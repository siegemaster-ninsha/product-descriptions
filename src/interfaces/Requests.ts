import { Lifestyle } from "../utils/voice";

export interface ProductDescriptionRequest {
  name: string;
  brand: string;
  category: string;
  attributes: string[];
  lifeStyleSegment?: Lifestyle;
  additionalNote?: string;
}
