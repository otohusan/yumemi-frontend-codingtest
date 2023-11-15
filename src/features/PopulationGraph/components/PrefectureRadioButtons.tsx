import { CheckButton } from '../../../components';
import '../style/prefectureCheckButtons.css';

interface Prefecture {
  prefCode: number;
  prefName: string;
}

interface PrefectureRadioButtonsProps {
  prefectureData: Prefecture[];
  prefectureCheckedValues: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  prefectureDataLoading: boolean;
}

function PrefectureRadioButtons({
  prefectureData,
  prefectureCheckedValues,
  onChange,
  prefectureDataLoading,
}: PrefectureRadioButtonsProps): JSX.Element {
  // ロード中はこれを表示する
  // 三項演算子を使ってする方法もありだけど、これの方が見やすい気がする
  if (prefectureDataLoading) {
    return (
      <>
        <p>データをロード中</p>
      </>
    );
  }

  return (
    <section className='prefectureCheckButtonsContainer'>
      {prefectureData.map((prefecture: Prefecture) => (
        <CheckButton
          key={prefecture.prefCode}
          option={prefecture.prefName}
          checkedValues={prefectureCheckedValues}
          dataSet={prefecture.prefCode}
          onChange={onChange}
        />
      ))}
    </section>
  );
}

export default PrefectureRadioButtons;
