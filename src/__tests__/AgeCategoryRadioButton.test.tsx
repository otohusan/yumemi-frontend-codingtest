import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/';
import AgeCategoryRadioButtons from '../features/PopulationGraph/components/AgeCategoryRadioButtons';

describe('都道府県ラジオボタン', () => {
  const mockOnChange = jest.fn();

  test('レンダーができるか', () => {
    render(
      <AgeCategoryRadioButtons selectedAgeCategory='' onChange={mockOnChange} />
    );
  });

  test('onChangeが発動すると、そのボタンのValueを返す', () => {
    render(
      <AgeCategoryRadioButtons selectedAgeCategory='' onChange={mockOnChange} />
    );

    const totalRadio = screen.getByRole('radio', { name: '総人口' });

    // クリックする
    fireEvent.click(totalRadio);
    // mockOnChangeが正しい引数で呼ばれたか確認
    expect(mockOnChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: '総人口' }),
      })
    );
  });
});
