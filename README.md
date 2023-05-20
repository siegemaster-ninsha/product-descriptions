# product-descriptions
POC for a tool to assist in generating product descriptions.

The handler takes a request object and returns the response from ChatGPT.

## How To Use

First create a .env file in the root of the project and add your OpenAI API key to a variable called ```API_KEY```.

Then, from the root directory, you can run this manually by running the following command
```ts-node ./src/scripts/invokeHandler.ts```
This runs with the contents of the ```./src/scripts/sampleRequest.ts``` file, which can be updated to your liking.
