import { renderHook, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/';
import useGetData from '../hooks/useGetData';
import axios from 'axios';

jest.mock('axios');

const mockAxios = axios as jest.Mocked<typeof axios>;

describe('useGetDataの挙動確認', () => {
  test('ローディング中はローディングをtrue、API通信が成功するとデータを返す', async () => {
    // モックされたレスポンス
    const mockData = {
      data: {
        result: ['データ1', 'データ2'],
      },
    };

    mockAxios.get.mockResolvedValue(mockData);

    // フックをレンダリング
    const { result } = renderHook(() => useGetData('test-url', 'test-api-key'));

    // 最初はローディング状態であることを確認
    expect(result.current[1]).toBe(true);

    // 一定時間経つとデータを手に入れて、ローディングがfalseになることを確認
    await waitFor(() => {
      // データとローディング状態を確認
      expect(result.current[0]).toEqual(['データ1', 'データ2']);
      expect(result.current[1]).toBe(false);
    });
  });
});
