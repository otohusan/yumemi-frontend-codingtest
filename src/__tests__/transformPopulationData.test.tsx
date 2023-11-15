import transformPopulationData from '../features/PopulationGraph/api/transformPopulationData';

describe('transformPopulationData', () => {
  const originalData = [
    { label: '総人口', data: [{ year: 2020, value: 10000 }] },
    { label: '年少人口', data: [{ year: 2020, value: 2000 }] },
  ];

  it('データの数がゼロの場合には変形して追加', () => {
    const result = transformPopulationData(originalData, null, '北海道');
    expect(result).toEqual([
      { label: '総人口', data: [{ year: 2020, 北海道: 10000 }] },
      { label: '年少人口', data: [{ year: 2020, 北海道: 2000 }] },
    ]);
  });

  it('データが存在する場合には、定めた場所に人口の値を追加', () => {
    const existingData = [
      { label: '総人口', data: [{ year: 2020, 東京都: 15000 }] },
      { label: '年少人口', data: [{ year: 2020, 東京都: 3000 }] },
    ];
    const result = transformPopulationData(
      originalData,
      existingData,
      '北海道'
    );
    expect(result).toEqual([
      { label: '総人口', data: [{ year: 2020, 東京都: 15000, 北海道: 10000 }] },
      { label: '年少人口', data: [{ year: 2020, 東京都: 3000, 北海道: 2000 }] },
    ]);
  });
});
