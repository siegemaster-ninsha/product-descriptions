import fetch from "node-fetch";
require("dotenv").config();

export interface PromptMessage {
  productName: string;
  productBrand: string;
  productCategory: string;
  goal: string;
  constraints: string[];
  writingStyle: string[];
  attributes: string;
  additionalNote: string;
}

interface PromptOptions {
  model: string;
  messages: GptMessages[];
  temperature?: number;
}

interface GptMessages {
  role: string;
  content: string;
}

export async function query(promptOptions: string) {
  const API_KEY = process.env.API_KEY;
  const url = "https://api.openai.com/v1/chat/completions";

  const optionString = JSON.stringify(promptOptions);
  const gptRequestParams: PromptOptions = {
    model: "gpt-3.5-turbo",
    messages: [{ role: "system", content: optionString }],
    temperature: 0.5,
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify(gptRequestParams),
  });

  if (!response.ok) {
    console.error(`API request failed: ${response.status} ${response.statusText}`);
    return;
  }

  const data: any = await response.json();

  if (!data) {
    throw new Error(`API request failed: ${response}`);
  }
  return data?.choices?.[0]?.message?.content;
}
