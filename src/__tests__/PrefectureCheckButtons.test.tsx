import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PrefectureCheckButtons from '../features/PopulationGraph/components/PrefectureCheckButtons';

describe('PrefectureCheckButtons', () => {
  const prefectureData = [
    { prefCode: 1, prefName: '北海道' },
    { prefCode: 2, prefName: '青森県' },
  ];

  test('都道府県の数によってボタンを表示', () => {
    render(
      <PrefectureCheckButtons
        prefectureData={prefectureData}
        prefectureCheckedValues={[]}
        onChange={() => {}}
        prefectureDataLoading={false}
      />
    );
    expect(screen.getByText('北海道')).toBeInTheDocument();
    expect(screen.getByText('青森県')).toBeInTheDocument();
  });

  test('ロード中はロード中という文字を表示', () => {
    render(
      <PrefectureCheckButtons
        prefectureData={[]}
        prefectureCheckedValues={[]}
        onChange={() => {}}
        prefectureDataLoading={true}
      />
    );

    expect(screen.getByText('データをロード中')).toBeInTheDocument();
  });

  test('クリックするとonChange関数を発動', () => {
    const mockOnChange = jest.fn();
    render(
      <PrefectureCheckButtons
        prefectureData={prefectureData}
        prefectureCheckedValues={[]}
        onChange={mockOnChange}
        prefectureDataLoading={false}
      />
    );
    fireEvent.click(screen.getByText('北海道'));
    expect(mockOnChange).toHaveBeenCalled();
  });
});
