interface AgeCategory {
  ageCategoryCode: number;
  ageCategoryName: string;
}

function handleRadioButtonChange(
  event: React.ChangeEvent<HTMLInputElement>,
  setSelectedOption: (option: AgeCategory) => void
): void {
  const ageCategoryName = event.target.value;
  const ageCategoryNameStr = event.target.dataset.code;

  // stringとundefinedの場合を考慮する必要がある
  if (ageCategoryNameStr !== undefined) {
    const ageCategoryCode = parseInt(ageCategoryNameStr, 10);
    setSelectedOption({ ageCategoryName, ageCategoryCode });
  } else {
    alert('prefCodeが見つかりません');
  }
}

export default handleRadioButtonChange;
