import { RadioButton } from '../../../components';

interface Prefecture {
  prefCode: number;
  prefName: string;
}

interface PrefectureRadioButtonsProps {
  prefectureData: Prefecture[];
  selectedOption: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  prefectureDataLoading: boolean;
}

function PrefectureRadioButtons({
  prefectureData,
  selectedOption,
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
      {prefectureData.map((prefecture: Prefecture) => (
        <RadioButton
          key={prefecture.prefCode}
          option={prefecture.prefName}
          selectedOption={selectedOption}
          onChange={onChange}
        />
      ))}
    </div>
  );
}

export default PrefectureRadioButtons;
