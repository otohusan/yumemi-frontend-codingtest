import { RadioButton } from '../../../components';

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
  const demoFunc = (): void => {};

  return (
    <div>
      {prefectureData.map((prefecture: Prefecture) => (
        <RadioButton
          key={prefecture.prefCode}
          option={prefecture.prefName}
          selectedOption='東京都'
          onChange={demoFunc}
        />
      ))}
    </div>
  );
}

export default PrefectureRadioButtons;
