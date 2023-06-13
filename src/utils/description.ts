import { Product, ProductDescriptionRequest } from '../interfaces';

export function buildProductDescriptionRequest(product: Product, attributes: string[]): ProductDescriptionRequest {
  return {
    name: product.productName,
    brand: product.brand,
    category: product.category,
    attributes,
    lifeStyleSegment: "outdoors",
    additionalNote: "color is matte black",
  }
}
