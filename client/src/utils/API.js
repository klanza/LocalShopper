import axios from "axios";

//use axios to do api calls
export default {
  // Gets the book with the given id
  getAllProduct: function() {
    return axios.get("/api/products/");
  },
  getProductName: function(productName) {
    return axios.get("/api/products/" + productName);
  },
  // Gets the book with the given id
  getProduct: function(id) {
    return axios.get("/api/products/" + id);
  },
  // Deletes the book with the given id
  deleteProduct: function(id) {
    return axios.delete("/api/products/" + id);
  },
  // Saves a book to the database
  saveProduct: function(productData) {
    return axios.post("/api/products", productData);
  }
};