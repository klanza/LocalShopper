import axios from "axios";

//use axios to do api calls
export default {
  // Gets the product 
  getProduct: function(productName) {
    return axios.get("/api/products/" + productName);
  },
  // Deletes the product
  deleteProduct: function(productName) {
    return axios.delete("/api/products/" + productName);
  },
  // Saves a product to the database
  saveProduct: function(productData) {
    return axios.post("/api/products", productData);
  }
};