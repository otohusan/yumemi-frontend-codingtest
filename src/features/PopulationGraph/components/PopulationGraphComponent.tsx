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
  const [populationData, populationDataLoading] = useGetData(
    'https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=27',
    apiKey
  );

  let totalPopulationData = [];

  // populationDataが取られる前にこのコードが発動するから、findメソッドがバグるのを対処するため
  // TODO: もっと良い方法を考える
  if (populationData !== null && populationData.data !== null) {
    const totalPopulation = populationData.data.find(
      (d: { label: string }) => d.label === '総人口'
    );
    if (totalPopulation !== null) {
      totalPopulationData = totalPopulation.data;
    }
  }

  // TODO: ここも手直し必要
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (populationDataLoading) {
    return (
      <>
        <p>データをロード中</p>
      </>
    );
  }

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
