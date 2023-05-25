// runScript.ts
import { handleDraftProductRequest } from "../handlers/descriptionHandler";
import { sampleRequest } from "./sampleRequest";

async function main() {
  try {
    const result = await handleDraftProductRequest(sampleRequest);
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
