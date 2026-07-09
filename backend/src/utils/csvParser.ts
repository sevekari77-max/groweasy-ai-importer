import { parse } from "csv-parse/sync";

export const parseCsv = (fileBuffer: Buffer) => {
  const csvContent = fileBuffer.toString("utf-8");

  return parse(csvContent, {
    columns: true,
    skip_empty_lines: true,
    trim: true,
  });
};