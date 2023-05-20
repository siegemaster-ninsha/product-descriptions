import { getDraftProductDescription } from '../controllers/descriptionController';
export interface DraftProductRequest {
    productName: string;
    productBrand: string;
    productCategory: string;
    productAttributes: string[]
    lifeStyleSegment: string;
    additionalNote: string;
}

export async function handleDraftProductRequest(event: DraftProductRequest) {
    if (!event.productName || !event.productBrand || !event.productAttributes.length)
    {throw new Error('insufficient product name, brand, or attributes');}

    const result = await getDraftProductDescription(event)
    return result;
}
