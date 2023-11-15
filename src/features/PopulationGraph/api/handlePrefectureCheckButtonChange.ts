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
  // チェックが外された場合の処理
  if (prefectureCheckedValues.includes(event.target.value)) {
    setPrefectureCheckedValues(
      prefectureCheckedValues.filter(
        (checkedValue) => checkedValue !== event.target.value
      )
    );
  }
  // チェックがつけられた時の処理
  else {
    // チェックされたセレクトボックスのvalueを配列prefectureCheckedValuesに追加する
    setPrefectureCheckedValues([
      ...prefectureCheckedValues,
      event.target.value,
    ]);
  }
}

export default handlePrefectureCheckButtonChange;
