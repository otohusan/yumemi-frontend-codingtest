import { useState } from 'react';
import PrefectureRadioButtons from '../features/PopulationGraph/components/PrefectureRadioButtons';
import useGetData from '../hooks/useGetData';
import { handleRadioButtonChange } from '../features/PopulationGraph/api';

function PopulationGraph(): JSX.Element {
  // apiKeyを環境変数から取得
  const apiKey = import.meta.env.VITE_API_KEY;

  // カスタムフックを使って都道府県のデータを取得してきている
  const [prefectureData, prefectureDataLoding] = useGetData(
    'https://opendata.resas-portal.go.jp/api/v1/prefectures',
    apiKey
  );

  // ラジオボタンで選択されている都道府県を管理
  const [selectedPrefectureOption, setSelectedPrefectureOption] =
    useState<string>('東京都');

  return (
    <div>
      <PrefectureRadioButtons
        prefectureData={prefectureData}
        selectedOption={selectedPrefectureOption}
        onChange={(e) => {
          handleRadioButtonChange(e, setSelectedPrefectureOption);
        }}
      />
    </div>
  );
}

export default PopulationGraph;
