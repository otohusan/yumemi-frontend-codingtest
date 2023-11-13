import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import useGetData from '../../../hooks/useGetData';
import AgeCategoryRadioButtons from './AgeCategoryRadioButtons';

interface PopulationGraphComponentProps {
  apiKey: string;
  selectedPrefectureOption: string;
  selectedPrefectureCode: number;
}

function PopulationGraphComponent({
  apiKey,
  selectedPrefectureOption,
  selectedPrefectureCode,
}: PopulationGraphComponentProps): JSX.Element {
  // 人口統計のデータを取得
  const [populationData, populationDataLoading] = useGetData(
    `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${selectedPrefectureCode}`,
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
    <div style={{ width: '500px', height: '300px' }}>
      <p>{selectedPrefectureOption}</p>
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart
          width={500}
          height={300}
          data={totalPopulationData}
          margin={{
            top: 5,
            right: 10,
            left: 30,
            bottom: 5,
          }}
        >
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
          <Line
            type='monotone'
            dataKey='value'
            name='総人口'
            stroke='#82ca9d'
          />
        </LineChart>
      </ResponsiveContainer>
      <AgeCategoryRadioButtons />
    </div>
  );
}

export default PopulationGraphComponent;
