import '@testing-library/jest-dom';
import { returnButtonValues } from '../features/PopulationGraph/api';

describe('returnButtonValues関数', () => {
  test('クリックされたボタンのvalueとdatasetを返す', () => {
    const setSelectedOption = jest.fn();
    const mockEvent = {
      target: {
        value: '東京都',
        dataset: { code: '13' },
      },
    };

    returnButtonValues(
      mockEvent as unknown as React.ChangeEvent<HTMLInputElement>,
      setSelectedOption
    );

    expect(setSelectedOption).toHaveBeenCalledWith({
      prefName: '東京都',
      prefCode: 13,
    });
  });

  test('datasetが空の場合はアラートを呼ぶ', () => {
    const setSelectedOption = jest.fn();
    const mockEvent = {
      target: {
        value: '東京都',
        dataset: {},
      },
    };

    window.alert = jest.fn(); // アラートのモック
    returnButtonValues(
      mockEvent as unknown as React.ChangeEvent<HTMLInputElement>,
      setSelectedOption
    );
    expect(window.alert).toHaveBeenCalledWith('prefCodeが見つかりません');
  });
});
