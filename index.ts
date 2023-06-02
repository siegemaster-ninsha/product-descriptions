import { Lifestyle } from "./src/utils/voice";

import { getConstraints } from "./src/utils/constraints";
import { getWritingStyle } from "./src/utils/voice";
import { getAttributes } from "./src/utils/attributes";
import { query } from "./src/services/chatGptService";
import { getFormat } from "./src/utils/format";
import { PromptMessage } from "./src/services/chatGptService";
import { getGoal } from "./src/utils/goals";

export interface DraftProductRequest {
  productName: string;
  productBrand: string;
  productCategory: string;
  productAttributes: string[];
  lifeStyleSegment?: Lifestyle;
  additionalNote: string;
}

export class ProductDescriptionGenerator {
  private gbtKey: string;
  constructor(apiKey: string) {
    this.gbtKey = apiKey
  }

  public async handleDraftProductRequest(event: DraftProductRequest) {
    if (!event.productName || !event.productBrand || !event.productAttributes.length) {
      throw new Error("insufficient product name, brand, or attributes");
    }

    return this.getDraftProductDescription(event);
  }

  private async getDraftProductDescription(draftDescriptionRequest: DraftProductRequest) {
    const goal = getGoal();
    const attributes = getAttributes(draftDescriptionRequest.productAttributes);
    const constraints = getConstraints();
    const writingStyle = getWritingStyle(draftDescriptionRequest.lifeStyleSegment);
  
    const promptOptions: PromptMessage = {
      goal: goal,
      productName: draftDescriptionRequest.productName,
      productBrand: draftDescriptionRequest.productBrand,
      productCategory: draftDescriptionRequest.productCategory,
      constraints: constraints,
      writingStyle: writingStyle,
      attributes: attributes,
      additionalNote: draftDescriptionRequest.additionalNote,
    };
  
    const formattedPrompt = getFormat(promptOptions);
  
    return query(formattedPrompt, this.gbtKey);
  }
}

