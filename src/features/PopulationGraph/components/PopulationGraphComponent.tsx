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
import { useGetPopulationData } from '../../../hooks';
import AgeCategoryRadioButtons from './AgeCategoryRadioButtons';
import CustomLineDots from './CustomLineDots';
import { useState } from 'react';
import { handleAgeCategoryRadioButtonChange } from '../api';

interface PopulationGraphComponentProps {
  apiKey: string;
  selectedPrefectureOption: string;
  selectedPrefectureCode: number;
  prefectureCheckedValues: string[];
}

interface AgeCategory {
  ageCategoryCode: number;
  ageCategoryName: string;
}

// LegendType 型を定義（Rechartsの定義に基づく）
type LegendType = 'square' | 'circle' | 'cross' | 'triangle';

// legendType 配列を LegendType 型として定義
const legendTypes: LegendType[] = ['circle', 'square', 'triangle', 'cross'];

// グラフの色
const lineStroke = [
  'cornflowerblue',
  'lightseagreen',
  'powderblue',
  'sandybrown',
  'silver',
  'mediumpurple',
  'gold',
  'darkorchid',
  'lightpink',
  'seagreen',
  'papayawhip',
  'pink',
];

function PopulationGraphComponent({
  apiKey,
  selectedPrefectureOption,
  selectedPrefectureCode,
  prefectureCheckedValues,
}: PopulationGraphComponentProps): JSX.Element {
  // 人口のデータを取得する
  const populationData = useGetPopulationData(
    selectedPrefectureCode,
    selectedPrefectureOption,
    apiKey
  );

  // 選択されている年齢カテゴリを管理、初期値は総人口にしている
  const [selectedAgeCategory, setSelectedAgeCategory] = useState<AgeCategory>({
    ageCategoryCode: 1,
    ageCategoryName: '総人口',
  });

  // 取得した人口統計データから人口カテゴリをもとに取得、初期値は総人口
  const totalPopulation = populationData.find(
    (d: { label: string }) => d.label === selectedAgeCategory.ageCategoryName
  );

  // totalPopulationがnullの可能性を考慮
  const totalPopulationData =
    totalPopulation != null ? totalPopulation.data : [];

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

          {prefectureCheckedValues.map((prefecture: string, index: number) => {
            const dotTypeIndex = Math.floor(index / lineStroke.length);
            const CustomDotComponent = CustomLineDots[dotTypeIndex];
            const strokeColor = lineStroke[index % lineStroke.length];

            return (
              <Line
                type={'monotone'}
                legendType={legendTypes[dotTypeIndex]}
                dot={(props) => (
                  <CustomDotComponent {...props} stroke={strokeColor} />
                )}
                dataKey={prefecture}
                name={prefecture}
                stroke={strokeColor}
                key={prefecture}
              />
            );
          })}
        </LineChart>
      </ResponsiveContainer>
      <AgeCategoryRadioButtons
        selectedAgeCategory={selectedAgeCategory.ageCategoryName}
        onChange={(e) => {
          handleAgeCategoryRadioButtonChange(e, setSelectedAgeCategory);
        }}
      />
    </div>
  );
}

export default PopulationGraphComponent;
