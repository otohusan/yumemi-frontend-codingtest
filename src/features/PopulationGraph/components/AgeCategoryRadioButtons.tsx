import { RadioButton } from '../../../components';

function AgeCategoryRadioButtons(): JSX.Element {
  const AgeCategoryData = [
    { ageCategoryCode: 1, ageCategoryName: '年少人口', graphColor: 'blue' },
    {
      ageCategoryCode: 2,
      ageCategoryName: '生産年齢人口',
      graphColor: 'red',
    },
    { ageCategoryCode: 3, ageCategoryName: '老年人口', graphColor: 'green' },
  ];

  function demoFunc(): void {}

  return (
    <div>
      {AgeCategoryData.map((ageCategory) => (
        <RadioButton
          key={ageCategory.ageCategoryCode}
          option={ageCategory.ageCategoryName}
          dataSet={ageCategory.ageCategoryCode}
          selectedOption='年少人口'
          onChange={demoFunc}
        />
      ))}
    </div>
  );
}

export default AgeCategoryRadioButtons;
