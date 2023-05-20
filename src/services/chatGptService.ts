import fetch from 'node-fetch';
require('dotenv').config();

interface PromptMessage {
  productName: string,
  productBrand: string,
  productCategory: string,
  goal: string,
  constraints: string[],
  writingStyle: string[],
  attributes: string,
  additionalNote: string
}

interface PromptOptions {
  model: string;
  messages: GptMessages[];
}

interface GptMessages {
  role: string,
  content: string
}

export async function chatGPT(promptOptions: PromptMessage) {
  const API_KEY = process.env.API_KEY;
  const url = 'https://api.openai.com/v1/chat/completions';

  const optionString = JSON.stringify(promptOptions)
  const gptRequestParams: PromptOptions  = {
    "model": "gpt-3.5-turbo",
    "messages": [{"role": "user", "content": optionString}]
  };
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`
    },
    body: JSON.stringify(gptRequestParams)
  });

  if (!response.ok) {
    console.error(`API request failed: ${response.status} ${response.statusText}`);
    return;
  }

  const data: any = await response.json();
  console.log(data.choices[0].message.content)
  return data.choices[0].message.content;
}




