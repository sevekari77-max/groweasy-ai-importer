import { parseCsv } from "../utils/csvParser.js";
import { validateCsv } from "../validators/csv.validator.js";
import { extractLeads } from "../ai/gemini.service.js";
import { chunkArray } from "../utils/chunkArray.js";

export const previewCsv = (fileBuffer: Buffer) => {
  const rows = parseCsv(fileBuffer);

  validateCsv(rows);

  return {
    totalRows: rows.length,
    previewRows: Math.min(10, rows.length),
    preview: rows.slice(0, 10),
  };
};

export const processImport = async (records: unknown[]) => {
  const batches = chunkArray(records, 25);

  const imported: unknown[] = [];
  const skipped: unknown[] = [];

  for (const batch of batches) {
    const response = await extractLeads(batch);

    if (response.records && Array.isArray(response.records)) {
      imported.push(...response.records);
    }

    if (response.skipped && Array.isArray(response.skipped)) {
      skipped.push(...response.skipped);
    }
  }

  return {
    imported,
    skipped,
    totalImported: imported.length,
    totalSkipped: skipped.length,
  };
};