import { RadioButton } from '../../../components';
import '../style/ageCategoryRadioButtons.css';

interface AgeCategoryRadioButtonsProps {
  selectedAgeCategory: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// APIのラベルに合わせている
const AgeCategoryData = [
  { ageCategoryCode: 1, ageCategoryName: '総人口' },
  { ageCategoryCode: 2, ageCategoryName: '年少人口' },
  {
    ageCategoryCode: 3,
    ageCategoryName: '生産年齢人口',
  },
  { ageCategoryCode: 4, ageCategoryName: '老年人口' },
];

function AgeCategoryRadioButtons({
  selectedAgeCategory,
  onChange,
}: AgeCategoryRadioButtonsProps): JSX.Element {
  return (
    <div className='ageCategoryRadioButtons'>
      {AgeCategoryData.map((ageCategory) => (
        <RadioButton
          key={ageCategory.ageCategoryCode}
          option={ageCategory.ageCategoryName}
          dataSet={ageCategory.ageCategoryCode}
          selectedOption={selectedAgeCategory}
          onChange={onChange}
        />
      ))}
    </div>
  );
}

export default AgeCategoryRadioButtons;
