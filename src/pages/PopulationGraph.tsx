import { useState } from 'react';
import PrefectureCheckButtons from '../features/PopulationGraph/components/PrefectureCheckButtons';
import PopulationGraphComponent from '../features/PopulationGraph/components/PopulationGraphComponent';
import { useGetData } from '../hooks';
import {
  handlePrefectureCheckButtonChange,
  handleRadioButtonChange,
} from '../features/PopulationGraph/api';

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
  // 選択された都道府県を認識して、api通信を発動するために使う
  const [selectedPrefecture, setSelectedPrefecture] =
    useState<PrefectureOption>({
      prefCode: 13,
      prefName: '東京都',
    });

  // チェックのついている都道府県を管理、動的にグラフを出現させるためなどに使う
  const [prefectureCheckedValues, setPrefectureCheckedValues] = useState<
    string[]
  >(['東京都']);

  return (
    <main>
      <PrefectureCheckButtons
        prefectureData={prefectureData}
        prefectureCheckedValues={prefectureCheckedValues}
        onChange={(event) => {
          // APIの更新などのためにクリックされたボタンの認識
          handleRadioButtonChange(event, setSelectedPrefecture);
          // チェックがついてるかによっての挙動が変わる関数の呼び出し
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
        prefectureCheckedValues={prefectureCheckedValues}
      />
    </main>
  );
}

export default PopulationGraph;
