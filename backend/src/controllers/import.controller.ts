import { Request, Response } from "express";
import {
  previewCsv,
  processImport,
} from "../services/import.service.js";

export const previewImport = (
  req: Request,
  res: Response
): void => {
  if (!req.file) {
    res.status(400).json({
      success: false,
      message: "No CSV file uploaded",
    });
    return;
  }

  const previewData = previewCsv(req.file.buffer);

  res.status(200).json({
    success: true,
    preview: previewData,
  });
};

export const confirmImport = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { records } = req.body;

    if (!Array.isArray(records) || records.length === 0) {
      res.status(400).json({
        success: false,
        message: "No records provided.",
      });
      return;
    }

    const result = await processImport(records);

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to process records.",
    });
  }
};