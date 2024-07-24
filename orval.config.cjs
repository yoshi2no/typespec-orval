module.exports = {
  "petstore-file": {
    input: "./generated/openapi.yaml",
    output: {
      target: "./src/petstore.ts",
      client: "react-query",
      mock: true,
      prettier: true
    }
  },
};
