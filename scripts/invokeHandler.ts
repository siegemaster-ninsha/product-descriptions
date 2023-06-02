require("dotenv").config();

// runScript.ts
import { ProductDescriptionGenerator } from "..";
import { sampleRequest } from "./sampleRequest";

async function main() {
  try {
    const descriptionGenerator = new ProductDescriptionGenerator(process.env.API_KEY as string)
    const result = await descriptionGenerator.handleDraftProductRequest(sampleRequest);
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
