import integratePrefectureData from './integratePrefectureData';

interface OriginalEntry {
  year: number;
  value: number;
}

interface OriginalCategory {
  label: string;
  data: OriginalEntry[];
}

interface TransformedEntry {
  year: number;
  [key: string]: number;
}

interface TransformedData {
  label: string;
  data: TransformedEntry[];
}

function transformPopulationData(
  originalData: OriginalCategory[],
  existingData: TransformedData[] | null,
  prefectureName: string
): TransformedData[] {
  // データが存在していなかった場合は新たに作る
  if (existingData == null || existingData.length === 0) {
    // 新しいデータを変換する
    return originalData.map((category) => ({
      label: category.label,
      data: category.data.map((entry) => ({
        year: entry.year,
        [prefectureName]: entry.value,
      })),
    }));
  }
  // データが存在していた場合は統合する
  else {
    // 新しい都道府県のデータを TransformedData[] 型に変換
    const newTransformedData = originalData.map((category) => ({
      label: category.label,
      data: category.data.map((entry) => ({
        year: entry.year,
        [prefectureName]: entry.value,
      })),
    }));

    // 既存のデータに新しいデータを統合
    return integratePrefectureData(
      existingData,
      newTransformedData,
      prefectureName
    );
  }
}

export default transformPopulationData;
