interface CheckButtonProps {
  option: string;
  checkedValues: string[];
  // 何かデータを追加したい時に使える
  dataSet: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function CheckButton({
  option,
  checkedValues,
  dataSet,
  onChange,
}: CheckButtonProps): JSX.Element {
  return (
    <div>
      <label key={option}>
        <input
          type='checkbox'
          value={option}
          // セレクトボックスがチェックされた、またはチェックが外れた際に関数handleChangeが実行される
          onChange={onChange}
          data-code={dataSet}
          checked={checkedValues.includes(option)}
        />
        {option}
      </label>
    </div>
  );
}

export default CheckButton;
