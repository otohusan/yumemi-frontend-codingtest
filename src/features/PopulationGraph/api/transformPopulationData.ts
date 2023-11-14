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
  if (existingData == null || existingData.length === 0) {
    // 新しいデータを変換する
    return originalData.map((category) => ({
      label: category.label,
      data: category.data.map((entry) => ({
        year: entry.year,
        [prefectureName]: entry.value,
      })),
    }));
  } else {
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
