const express = require("express");
const {product} = require("../src/controller/product/product")
const app = express();
const PORT =  5000;

app.get("/", product);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
