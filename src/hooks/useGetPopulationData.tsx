import { useState, useEffect } from 'react';
import axios from 'axios';

function useGetPopulationData(prefCode: number, apiKey: string): any {
  const [populationData, setPopulationData] = useState([]);
  const [alreadyHavePrefCode, setAlreadyHavePrefCode] = useState<number[]>([]);

  // すでにAPIを一度実行していたら、何もせずに値を返す
  if (alreadyHavePrefCode.includes(prefCode)) {
    return populationData;
  }
  // 初めてのデータなら、APIを通信して、データを整えてから返す
  else {
    setAlreadyHavePrefCode([...alreadyHavePrefCode, prefCode]);
    axios
      .get(
        `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${prefCode}`,
        {
          headers: {
            'X-API-KEY': apiKey,
          },
        }
      )
      .then((response) => {})
      .catch((error) => {
        alert(`${error}が起きました`);
      });
  }
}

export default useGetPopulationData;
