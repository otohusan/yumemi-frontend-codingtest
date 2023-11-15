import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import PopulationGraphComponent from '../features/PopulationGraph/components/PopulationGraphComponent';
import * as useGetPopulationData from '../hooks';

// グローバルスコープでの ResizeObserver のモック化
window.ResizeObserver =
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  window.ResizeObserver ||
  jest.fn().mockImplementation(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
  }));

// rechartsをモック化している
jest.mock('recharts', () => {
  const OriginalModule = jest.requireActual('recharts');
  return {
    ...OriginalModule,
    ResponsiveContainer: ({ children }: { children: React.ReactNode }) => (
      <OriginalModule.ResponsiveContainer width={800} height={800}>
        {children}
      </OriginalModule.ResponsiveContainer>
    ),
  };
});

// useGetPopulationDataをモック化して、一定の値を返す
jest
  .spyOn(useGetPopulationData, 'useGetPopulationData')
  .mockImplementation(() => [
    { label: '総人口', data: [{ year: 2020, 北海道: 10000 }] },
  ]);

describe('PopulationGraphComponent', () => {
  const mockApiKey = 'mock-api-key';
  const mockPrefectureOption = '北海道';
  const mockPrefectureCode = 1;
  const mockPrefectureCheckedValues = ['北海道'];

  test('レンダー確認', async () => {
    render(
      <PopulationGraphComponent
        apiKey={mockApiKey}
        selectedPrefectureOption={mockPrefectureOption}
        selectedPrefectureCode={mockPrefectureCode}
        prefectureCheckedValues={mockPrefectureCheckedValues}
      />
    );
    await waitFor(() => {
      // レンダリングされた要素を確認する
      expect(screen.queryByText(/北海道/)).toBeInTheDocument();
    });
  });
});
