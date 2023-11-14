import { useState } from 'react';
import PrefectureRadioButtons from '../features/PopulationGraph/components/PrefectureRadioButtons';
import PopulationGraphComponent from '../features/PopulationGraph/components/PopulationGraphComponent';
import useGetData from '../hooks/useGetData';
import { handlePrefectureCheckButtonChange } from '../features/PopulationGraph/api';

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
  // グラフのために一旦おいているだけ、後で消す
  const [selectedPrefecture, setSelectedPrefecture] =
    useState<PrefectureOption>({
      prefCode: 13,
      prefName: '東京都',
    });

  const [prefectureCheckedValues, setPrefectureCheckedValues] = useState<
    string[]
  >([]);

  return (
    <main>
      <PrefectureRadioButtons
        prefectureData={prefectureData}
        prefectureCheckedValues={prefectureCheckedValues}
        onChange={(event) => {
          handlePrefectureCheckButtonChange({
            event,
            prefectureCheckedValues,
            setPrefectureCheckedValues,
          });
        }}
        prefectureDataLoading={prefectureDataLoading}
      />

      <PopulationGraphComponent
        selectedPrefectureOption={selectedPrefecture.prefName}
        selectedPrefectureCode={selectedPrefecture.prefCode}
        apiKey={apiKey}
      />
    </main>
  );
}

export default PopulationGraph;
