export const cleanAiResponse = (response: string): string => {
  return response
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();
};