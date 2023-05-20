#!/bin/bash

# Read the JSON data from file
input=$(cat ./sampleRequest.json )

# Execute handleDraftProductRequest function using Node.js
node -e "require('./product.js').handleDraftProductRequest($input);"
