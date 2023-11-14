interface handlePrefectureCheckButtonChangeType {
  event: React.ChangeEvent<HTMLInputElement>;
  prefectureCheckedValues: string[];
  setPrefectureCheckedValues: React.Dispatch<React.SetStateAction<string[]>>;
}

function handlePrefectureCheckButtonChange({
  event,
  prefectureCheckedValues,
  setPrefectureCheckedValues,
}: handlePrefectureCheckButtonChangeType): void {
  if (prefectureCheckedValues.includes(event.target.value)) {
    setPrefectureCheckedValues(
      prefectureCheckedValues.filter(
        (checkedValue) => checkedValue !== event.target.value
      )
    );
  } else {
    // チェックされたセレクトボックスのvalueを配列prefectureCheckedValuesに追加する
    setPrefectureCheckedValues([
      ...prefectureCheckedValues,
      event.target.value,
    ]);
  }
}

export default handlePrefectureCheckButtonChange;
