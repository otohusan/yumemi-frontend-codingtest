import { RadioButton } from '../../../components';

interface Prefecture {
  prefCode: number;
  prefName: string;
}

interface PrefectureRadioButtonsProps {
  prefectureData: Prefecture[];
  selectedOption: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function PrefectureRadioButtons({
  prefectureData,
  selectedOption,
  onChange,
}: PrefectureRadioButtonsProps): JSX.Element {
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
