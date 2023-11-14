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
  prefectureName: string
): TransformedData[] {
  return originalData.map((category) => {
    const transformedEntries = category.data.map((entry) => ({
      year: entry.year,
      [prefectureName]: entry.value,
    }));

    return {
      label: category.label,
      data: transformedEntries,
    };
  });
}

export default transformPopulationData;
