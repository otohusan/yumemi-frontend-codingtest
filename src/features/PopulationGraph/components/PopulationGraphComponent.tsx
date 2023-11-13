import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import useGetData from '../../../hooks/useGetData';

interface PopulationGraphComponentProps {
  apiKey: string;
  selectedPrefectureOption: string;
}

function PopulationGraphComponent({
  apiKey,
  selectedPrefectureOption,
}: PopulationGraphComponentProps): JSX.Element {
  // 人口統計のデータを取得
  const [populationData, populationDataLoading] = useGetData(
    'https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=27',
    apiKey
  );

  // データを取得できてない時はこれを表示
  if (
    populationDataLoading === true ||
    populationData === null ||
    populationData.data === undefined
  ) {
    return <p>データをロード中</p>;
  }

  // 取得した人口統計データから総人口のデータを取得
  const totalPopulation = populationData.data.find(
    (d: { label: string }) => d.label === '総人口'
  );

  // totalPopulationがnullの可能性を考慮
  const totalPopulationData =
    totalPopulation !== null ? totalPopulation.data : [];

  return (
    <div style={{ width: '500', height: '300' }}>
      <p>{selectedPrefectureOption}</p>
      <LineChart width={500} height={300} data={totalPopulationData}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='year' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type='monotone'
          dataKey='pv'
          stroke='#8884d8'
          activeDot={{ r: 8 }}
        />
        <Line type='monotone' dataKey='value' stroke='#82ca9d' />
      </LineChart>
    </div>
  );
}

export default PopulationGraphComponent;
