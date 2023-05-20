export function getAttributes(productAttributes: string[]) {
    const attributeSetup = 'The product has the following attributes: ';
    const appendedAttributes = attributeSetup + productAttributes.join(', ');
  
    return appendedAttributes;
  }