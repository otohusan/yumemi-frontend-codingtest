interface RadioButtonProps {
  option: string;
  selectedOption: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function RadioButton({
  option,
  selectedOption,
  onChange,
}: RadioButtonProps): JSX.Element {
  return (
    <div>
      <label key={option}>
        <input
          type='radio'
          value={option}
          checked={selectedOption === option}
          onChange={onChange}
        />
        {option}
      </label>
    </div>
  );
}

export default RadioButton;
