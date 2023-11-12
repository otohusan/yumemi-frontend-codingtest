import PrefectureRadioButtons from '../features/PopulationGraph/components/PrefectureRadioButtons';
import useGetData from '../hooks/useGetData';

function PopulationGraph(): JSX.Element {
  // apiKeyを環境変数から取得
  const apiKey = import.meta.env.VITE_API_KEY;
  const [prefectureData, prefectureDataLoding] = useGetData(
    'https://opendata.resas-portal.go.jp/api/v1/prefectures',
    apiKey
  );

  return (
    <div>
      <PrefectureRadioButtons prefectureData={prefectureData} />
    </div>
  );
}

export default PopulationGraph;
