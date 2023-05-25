import { PromptMessage } from "./chatGptService";

export function getFormat(promptToFormat: PromptMessage) {
  const newLineSeparatedAttributes = formatAttributes(promptToFormat.attributes);

  const formattedPrompt = `
  Goal:
  ${promptToFormat.goal}

  Product Details:
  ${promptToFormat.productName}
  ${promptToFormat.productBrand}
  ${promptToFormat.productCategory}

  Product Attributes:
  ${newLineSeparatedAttributes}

  Constraints:
  ${promptToFormat.constraints}

  Writing Style:
  ${promptToFormat.writingStyle}

  Format:
  Here are the formatting rules:

    Start with a bulleted list, mentioning each attribute of the product.
    Follow with individual sections of text, without titles, emphasizing each attribute in prose.
    Include a section highlighting two attributes as well as the ease of use and aesthetics of the product.
    Conclude with summary that urges the customer to buy the product.
`;

  return formattedPrompt;
}

function formatAttributes(attributes: string) {
  const attributesArray = attributes.split(",");
  const attributeStringNL = attributesArray.join("\n");
  return attributeStringNL;
}
