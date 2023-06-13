import { categoryFieldMapper } from '../lib/categoryFieldMapper';

export function getAttributes(productAttributes: string[]) {
  return productAttributes.join(", ");
}

export function buildProductAttributes(product: any): string[] {
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
