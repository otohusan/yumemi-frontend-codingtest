import { RadioButton } from '../../../components';
import { useState } from 'react';
import handleRadioButtonChange from '../api/handleRadioButtonChange';

interface Prefecture {
  prefCode: number;
  prefName: string;
}

interface PrefectureRadioButtonsProps {
  prefectureData: Prefecture[];
}

function PrefectureRadioButtons({
  prefectureData,
}: PrefectureRadioButtonsProps): JSX.Element {
  const [selectedOption, setSelectedOption] = useState<string>('東京都');

  return (
    <div>
      {prefectureData.map((prefecture: Prefecture) => (
        <RadioButton
          key={prefecture.prefCode}
          option={prefecture.prefName}
          selectedOption={selectedOption}
          onChange={(e) => {
            handleRadioButtonChange(e, setSelectedOption);
          }}
        />
      ))}
    </div>
  );
}

export default PrefectureRadioButtons;
