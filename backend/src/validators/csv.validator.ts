export const validateCsv = (rows: unknown[]) => {
  if (rows.length === 0) {
    throw new Error("CSV file is empty.");
  }

  return true;
};