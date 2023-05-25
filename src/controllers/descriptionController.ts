import { DraftProductRequest } from "../handlers/descriptionHandler";
import { getConstraints } from "../services/constraints";
import { getWritingStyle } from "../services/voice";
import { getAttributes } from "../services/attributes";
import { query } from "../services/chatGptService";
import { getFormat } from "../services/format";
import { PromptMessage } from "../services/chatGptService";
import { getGoal } from "../services/goals";

export async function getDraftProductDescription(draftDescriptionRequest: DraftProductRequest) {
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

  return query(formattedPrompt);
}
