interface RadioButtonProps {
  option: string;
  selectedOption: string;
  // 何かデータを追加したい時に使える
  dataSet: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function RadioButton({
  option,
  selectedOption,
  dataSet,
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
          name={option}
          data-code={dataSet}
        />
        {option}
      </label>
    </div>
  );
}

export default RadioButton;
