import { GoogleGenerativeAI } from "@google/generative-ai";
import { buildImportPrompt } from "./import.prompt.js";
import { cleanAiResponse } from "../utils/cleanAiResponse.js";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

export const extractLeads = async (records: unknown[]) => {
  const prompt = buildImportPrompt(records);

  const result = await model.generateContent(prompt);

  const response = await result.response;

  const text = response.text();

  const cleaned = cleanAiResponse(text);

  return JSON.parse(cleaned);
};