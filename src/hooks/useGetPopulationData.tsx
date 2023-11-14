import { useState, useEffect } from 'react';
import axios from 'axios';
import transformPopulationData from '../features/PopulationGraph/api/transformPopulationData';

function useGetPopulationData(
  prefCode: number,
  prefName: string,
  apiKey: string
): any {
  const [populationData, setPopulationData] = useState<any[]>([]);
  const [alreadyHavePrefCode, setAlreadyHavePrefCode] = useState<number[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      // すでにデータを取得済みであれば何もしない
      if (alreadyHavePrefCode.includes(prefCode)) {
        return;
      }

      // 新しいデータの取得
      await axios
        .get(
          `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${prefCode}`,
          { headers: { 'X-API-KEY': apiKey } }
        )
        .then((response) => {
          const transformedData = transformPopulationData(
            response.data.result.data,
            populationData,
            prefName
          );
          setPopulationData(transformedData);
          setAlreadyHavePrefCode([...alreadyHavePrefCode, prefCode]);
        })
        .catch((error) => {
          alert(`${error}が起きました`);
        });
    };

    void fetchData();
  }, [prefCode, prefName, apiKey, populationData, alreadyHavePrefCode]);

  return populationData;
}

export default useGetPopulationData;
