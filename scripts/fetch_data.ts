import { GoogleGenAI } from "@google/genai";

async function fetchData() {
  const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY! });
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "Find detailed information about Utpal Ghosh (Serial Entrepreneur) from his official website https://utpalghoshofficial.com/ and other sources. I need his bio, list of ventures (names, roles, descriptions), expertise areas, and any notable achievements or stats. Return the data in JSON format.",
    config: {
      tools: [{ googleSearch: {} }],
      responseMimeType: "application/json",
    },
  });
  console.log(response.text);
}

fetchData();
