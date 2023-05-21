import { DraftProductRequest } from "../handlers/descriptionHandler";
import { getConstraints } from "../services/constraints";
import { getWritingStyle } from "../services/voice";
import { getAttributes } from "../services/attributes";
import { chatGPT } from '../services/chatGptService';
export async function getDraftProductDescription(draftDescriptionRequest: DraftProductRequest){

    const constraints = getConstraints();
    const writingStyle = getWritingStyle(draftDescriptionRequest.lifeStyleSegment);
    const attributes = getAttributes(draftDescriptionRequest.productAttributes);
    
    const promptOptions = {
        goal:`Write a draft description for a product that will be published on an ecommerce website.  
             Use the constraints, writing style, attributes, and any additional notes to inform the creation process.`,
        productName: draftDescriptionRequest.productName,
        productBrand: draftDescriptionRequest.productBrand,
        productCategory: draftDescriptionRequest.productCategory,
        constraints: constraints,
        writingStyle: writingStyle,
        attributes: attributes,
        additionalNote: draftDescriptionRequest.additionalNote
    } 

    const draftProductDescription = await chatGPT(promptOptions)
    return draftProductDescription
}
