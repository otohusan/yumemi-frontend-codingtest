interface TransformedEntry {
  year: number;
  [prefecture: string]: number;
}

interface TransformedData {
  label: string;
  data: TransformedEntry[];
}

function integratePrefectureData(
  existingData: TransformedData[],
  newPrefectureData: TransformedData[],
  prefectureName: string
): TransformedData[] {
  return existingData.map((category) => {
    const newCategoryEntry = newPrefectureData.find(
      (c) => c.label === category.label
    );

    const newCategoryData =
      newCategoryEntry != null ? newCategoryEntry.data : [];

    return {
      ...category,
      data: category.data.map((entry) => {
        const newEntryData = newCategoryData.find((e) => e.year === entry.year);
        return {
          ...entry,
          ...(newEntryData != null && {
            [prefectureName]: newEntryData[prefectureName],
          }),
        };
      }),
    };
  });
}

export default integratePrefectureData;
