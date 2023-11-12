function handleRadioButtonChange(
  event: React.ChangeEvent<HTMLInputElement>,
  setSelectedOption: (value: string) => void
): void {
  setSelectedOption(event.target.value);
}

export default handleRadioButtonChange;
