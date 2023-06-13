import { Lifestyle } from "./src/utils/voice";

import { getConstraints } from "./src/utils/constraints";
import { getWritingStyle } from "./src/utils/voice";
import { getAttributes } from "./src/utils/attributes";
import { query } from "./src/services/chatGptService";
import { getFormat } from "./src/utils/format";
import { PromptMessage } from "./src/services/chatGptService";
import { getGoal } from "./src/utils/goals";
import { Product, ProductDescriptionRequest } from "./src/interfaces";
import { categoryFieldMapper } from "./src/lib/categoryFieldMapper";

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
  private lifestyleSegment: Lifestyle;
  constructor(apiKey: string) {
    this.lifestyleSegment = "outdoors",
    this.gbtKey = apiKey
  }

  public async handleDraftProductRequest(event: ProductDescriptionRequest) {
    if (!event.name || !event.brand || !event.category) {
      console.log('MALFORMED PRODUCT DESCRIPTION EVENT');
      console.log(event);
      throw new Error("insufficient product name, brand, or category");
    }

    return this.getDraftProductDescription(event);
  }

  public buildProductAttributes(product: any): string[] {
    const category = product.category;
    const categoryAttributes: string[] = categoryFieldMapper[category];
    const productProperties: string[] = Object.keys(product);
    const attributeList: string[] = [];
    for (let i = 0; i < categoryAttributes.length; i++) {
      if (productProperties.indexOf(categoryAttributes[i] as string) >= 0) {
        attributeList.push(product[categoryAttributes[i] as string]);
      }
    }

    return attributeList;
  }

  public buildProductDescriptionRequest(product: Product, attributes: string[]): ProductDescriptionRequest {
    return {
      name: product.productName,
      brand: product.brand,
      category: product.category,
      attributes,
      lifeStyleSegment: this.lifestyleSegment,
      additionalNote: "color is matte black",
    }
  }

  private async getDraftProductDescription(draftDescriptionRequest: ProductDescriptionRequest) {
    const goal = getGoal();
    const attributes = getAttributes(draftDescriptionRequest.attributes);
    const constraints = getConstraints();
    const writingStyle = getWritingStyle(draftDescriptionRequest.lifeStyleSegment);

    const promptOptions: PromptMessage = {
      goal: goal,
      productName: draftDescriptionRequest.name,
      productBrand: draftDescriptionRequest.brand,
      productCategory: draftDescriptionRequest.category,
      constraints: constraints,
      writingStyle: writingStyle,
      attributes: attributes,
      additionalNote: draftDescriptionRequest.additionalNote,
    };

    const formattedPrompt = getFormat(promptOptions);

    return query(formattedPrompt, this.gbtKey);
  }
}

