// import { render, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom/';
// import PrefectureRadioButtons from '../features/PopulationGraph/components/PrefectureCheckButtons';

// describe('都道府県ラジオボタン', () => {
//   const mockOnChange = jest.fn();

//   test('レンダーができるか', () => {
//     render(
//       <PrefectureRadioButtons
//         prefectureData={[]}
//         selectedOption=''
//         onChange={mockOnChange}
//         prefectureDataLoading={false}
//       />
//     );
//   });

//   test('ロード中はロード中のメッセージを表示', () => {
//     render(
//       <PrefectureRadioButtons
//         prefectureData={[]}
//         selectedOption=''
//         onChange={mockOnChange}
//         prefectureDataLoading={true}
//       />
//     );
//     expect(screen.getByText('データをロード中')).toBeInTheDocument();
//   });

//   test('onChangeが発動すると、そのボタンのValueを返す', () => {
//     render(
//       <PrefectureRadioButtons
//         prefectureData={[
//           { prefCode: 1, prefName: '東京都' },
//           { prefCode: 2, prefName: '大阪府' },
//         ]}
//         selectedOption='東京都'
//         onChange={mockOnChange}
//         prefectureDataLoading={false}
//       />
//     );

//     const osakaRadio = screen.getByRole('radio', { name: '大阪府' });

//     // 大阪をクリックする
//     fireEvent.click(osakaRadio);
//     // mockOnChangeが正しい引数で呼ばれたかを検証
//     expect(mockOnChange).toHaveBeenCalledWith(
//       expect.objectContaining({
//         target: expect.objectContaining({ value: '大阪府' }),
//       })
//     );
//   });
// });
