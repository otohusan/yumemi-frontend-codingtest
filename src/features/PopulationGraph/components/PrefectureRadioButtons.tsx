import { RadioButton, CheckButton } from '../../../components';
import { useState } from 'react';
import { handlePrefectureCheckButtonChange } from '../api';

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

  const [prefectureCheckedValues, setPrefectureCheckedValues] = useState<
    string[]
  >([]);

  return (
    <div>
      {prefectureData.map((prefecture: Prefecture) => (
        <RadioButton
          key={prefecture.prefCode}
          option={prefecture.prefName}
          dataSet={prefecture.prefCode}
          selectedOption={selectedOption}
          onChange={onChange}
        />
      ))}
      {prefectureData.map((prefecture: Prefecture) => (
        <CheckButton
          key={prefecture.prefCode}
          option={prefecture.prefName}
          checkedValues={prefectureCheckedValues}
          dataSet={prefecture.prefCode}
          onChange={(event) => {
            handlePrefectureCheckButtonChange({
              event,
              prefectureCheckedValues,
              setPrefectureCheckedValues,
            });
          }}
        />
      ))}
      {prefectureCheckedValues.join(', ')}
    </div>
  );
}

export default PrefectureRadioButtons;
