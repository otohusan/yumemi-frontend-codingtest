import { RadioButton } from '../../../components';

function PrefectureRadioButtons(): JSX.Element {
  const demoPrefectureData: string[] = ['tokyo', 'osaka', 'kyoto'];
  const demoFunc = (): void => {};

  return (
    <div>
      {demoPrefectureData.map((option) => (
        <RadioButton
          key={option}
          option={option}
          selectedOption='tokyo'
          onChange={demoFunc}
        />
      ))}
    </div>
  );
}

export default PrefectureRadioButtons;
