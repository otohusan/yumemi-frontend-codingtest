interface PrefectureOption {
  prefCode: number;
  prefName: string;
}

function handleRadioButtonChange(
  event: React.ChangeEvent<HTMLInputElement>,
  setSelectedOption: (option: PrefectureOption) => void
): void {
  const prefName = event.target.value;
  const prefCodeStr = event.target.dataset.code;

  // stringとundefinedの場合を考慮する必要がある
  if (prefCodeStr !== undefined) {
    const prefCode = parseInt(prefCodeStr, 10);
    setSelectedOption({ prefName, prefCode });
  } else {
    alert('prefCodeが見つかりません');
  }
}

export default handleRadioButtonChange;
