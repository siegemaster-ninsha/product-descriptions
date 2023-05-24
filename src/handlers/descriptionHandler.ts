import { getDraftProductDescription } from '../controllers/descriptionController';
import { Lifestyle } from '../services/voice';

export interface DraftProductRequest {
    productName: string;
    productBrand: string;
    productCategory: string;
    productAttributes: string[]
    lifeStyleSegment?: Lifestyle;
    additionalNote: string;
}

export async function handleDraftProductRequest(event: DraftProductRequest) {
    if (!event.productName || !event.productBrand || !event.productAttributes.length) {
        throw new Error('insufficient product name, brand, or attributes');
    }

    return getDraftProductDescription(event)
}
