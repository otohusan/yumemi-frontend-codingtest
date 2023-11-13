import { useState } from 'react';
import PrefectureRadioButtons from '../features/PopulationGraph/components/PrefectureRadioButtons';
import PopulationGraphComponent from '../features/PopulationGraph/components/PopulationGraphComponent';
import useGetData from '../hooks/useGetData';
import { handleRadioButtonChange } from '../features/PopulationGraph/api';

interface PrefectureOption {
  prefCode: number;
  prefName: string;
}

function PopulationGraph(): JSX.Element {
  // apiKeyを環境変数から取得
  const apiKey = import.meta.env.VITE_API_KEY;

  // カスタムフックを使って都道府県のデータを取得してきている
  const [prefectureData, prefectureDataLoading] = useGetData(
    'https://opendata.resas-portal.go.jp/api/v1/prefectures',
    apiKey
  );

  // ラジオボタンで選択されている都道府県を管理
  // 初期状態では、東京都（prefCode: 13）を設定
  const [selectedPrefecture, setSelectedPrefecture] =
    useState<PrefectureOption>({
      prefCode: 13,
      prefName: '東京都',
    });

  return (
    <main>
      <PrefectureRadioButtons
        prefectureData={prefectureData}
        selectedOption={selectedPrefecture.prefName}
        onChange={(e) => {
          handleRadioButtonChange(e, setSelectedPrefecture);
        }}
        prefectureDataLoading={prefectureDataLoading}
      />

      <PopulationGraphComponent
        selectedPrefectureOption={selectedPrefecture.prefName}
        apiKey={apiKey}
      />
      {selectedPrefecture.prefCode}
    </main>
  );
}

export default PopulationGraph;
