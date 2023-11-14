import { CheckButton } from '../../../components';

interface Prefecture {
  prefCode: number;
  prefName: string;
}

interface PrefectureRadioButtonsProps {
  prefectureData: Prefecture[];
  prefectureCheckedValues: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  prefectureDataLoading: boolean;
}

function PrefectureRadioButtons({
  prefectureData,
  prefectureCheckedValues,
  onChange,
  prefectureDataLoading,
}: PrefectureRadioButtonsProps): JSX.Element {
  // ロード中はこれを表示する
  // 三項演算子を使ってする方法もありだけど、これの方が見やすい気がする
  if (prefectureDataLoading) {
    return (
      <>
        <p>データをロード中</p>
      </>
    );
  }

  return (
    <div>
      {/* {prefectureData.map((prefecture: Prefecture) => (
        <RadioButton
          key={prefecture.prefCode}
          option={prefecture.prefName}
          dataSet={prefecture.prefCode}
          selectedOption={selectedOption}
          onChange={onChange}
        />
      ))} */}
      {prefectureData.map((prefecture: Prefecture) => (
        <CheckButton
          key={prefecture.prefCode}
          option={prefecture.prefName}
          checkedValues={prefectureCheckedValues}
          dataSet={prefecture.prefCode}
          onChange={onChange}
        />
      ))}
      {prefectureCheckedValues.join(', ')}
    </div>
  );
}

export default PrefectureRadioButtons;
