#!./node_modules/.bin/ts-node

require("dotenv").config();
import { writeFileSync } from 'fs';
import { ProductDescriptionGenerator } from '..';
import { products } from '../data/products';

async function main() {
  try {
    // load products
    for (let i = 0; i < products.length; i++) {
      const descriptionGenerator = new ProductDescriptionGenerator(process.env.API_KEY as string)
      const attributes = descriptionGenerator.buildProductAttributes(products[i]);
      const productDescriptionRequest = descriptionGenerator.buildProductDescriptionRequest(products[i], attributes);
      const result = await descriptionGenerator.handleDraftProductRequest(productDescriptionRequest);
      console.log(result);
      products[i].generatedDescription = result;
    }
    writeFileSync(`./data/output.json`, JSON.stringify(products));
  } catch (error) {
    console.error("Error:", error);
  }
}

(async () => {
  await main();
})()
