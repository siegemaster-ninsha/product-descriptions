require("dotenv").config();

import { ProductDescriptionGenerator } from "..";
import { sampleRequest } from "./sampleRequest";
import { products } from '../data/products';

async function main() {
  try {
    // load products
    for (let i = 0; i < products.length; i++) {
      // for each product, depending on category, build out specific sampelRequest
      const descriptionGenerator = new ProductDescriptionGenerator(process.env.API_KEY as string)
      const attributes = descriptionGenerator.buildProductAttributes(products[i]);
      const productDescriptionRequest = descriptionGenerator.buildProductDescriptionRequest(products[i], attributes);
      const result = await descriptionGenerator.handleDraftProductRequest(productDescriptionRequest);
      console.log(result);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
