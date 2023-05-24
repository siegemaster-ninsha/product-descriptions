export function getAttributes(productAttributes: string[]) {
    const attributeSetup = 'The product has the following attributes: ';

    return attributeSetup + productAttributes.join(', ');
}
