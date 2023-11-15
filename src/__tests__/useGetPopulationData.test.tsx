import { renderHook } from '@testing-library/react';
import { useGetPopulationData } from '../hooks';
import axios from 'axios';

jest.mock('axios');

describe('useGetPopulationData', () => {
  it('すでにAPI通信を行なった都道府県(PrefData)はAPI通信を行わない', async () => {
    // axios.get をモック化
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.get.mockResolvedValue({ data: { result: [] } });

    // 初めてのデータ取得のシミュレーション
    const { rerender } = renderHook(
      ({ prefCode, prefName, apiKey }) =>
        useGetPopulationData(prefCode, prefName, apiKey),
      {
        initialProps: {
          prefCode: 1,
          prefName: '北海道',
          apiKey: 'mock-api-key',
        },
      }
    );

    // API が呼ばれたことを確認
    expect(mockedAxios.get).toHaveBeenCalled();

    // axios.get の呼び出しをリセット
    mockedAxios.get.mockClear();

    // 同じ prefCode でフックを再レンダリング
    rerender({ prefCode: 1, prefName: '北海道', apiKey: 'mock-api-key' });

    // API が呼ばれていないことを確認
    expect(mockedAxios.get).not.toHaveBeenCalled();
  });
});
