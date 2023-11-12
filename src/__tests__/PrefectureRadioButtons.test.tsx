import { render } from '@testing-library/react';
import '@testing-library/jest-dom/';
import PrefectureRadioButtons from '../features/PopulationGraph/components/PrefectureRadioButtons';

describe('都道府県ラジオボタン', () => {
  const mockOnChange = jest.fn();

  test('レンダーができるか', () => {
    render(
      <PrefectureRadioButtons
        prefectureData={[]}
        selectedOption=''
        onChange={mockOnChange}
        prefectureDataLoading={false}
      />
    );
  });

  // test("ロード中はロード中のメッセージを表示", () => {
  //     render(<PrefectureRadioButtons prefectureData={[]} selectedOption="" onChange={mockOnChange} prefectureDataLoading={true} />);
  //     expect(screen.getByText('データをロード中')).toBeInTheDocument();
  // })
});
