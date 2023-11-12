import { RadioButton } from '../../../components';

function PrefectureRadioButtons(): JSX.Element {
  const demoPrefectureData: string[] = ['tokyo', 'osaka', 'kyoto'];
  const demoFunc = (): void => {};

  return (
    <div>
      {demoPrefectureData.map((prefectureName) => (
        <RadioButton
          key={prefectureName}
          option={prefectureName}
          selectedOption='tokyo'
          onChange={demoFunc}
        />
      ))}
    </div>
  );
}

export default PrefectureRadioButtons;
