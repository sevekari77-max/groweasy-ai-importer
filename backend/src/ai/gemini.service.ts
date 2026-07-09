import { GoogleGenAI } from "@google/genai";
import { buildImportPrompt } from "./import.prompt.js";
import { cleanAiResponse } from "../utils/cleanAiResponse.js";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export const extractLeads = async (records: unknown[]) => {
  const prompt = buildImportPrompt(records);

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  const text = response.text ?? "";

  const cleaned = cleanAiResponse(text);

  return JSON.parse(cleaned);
};