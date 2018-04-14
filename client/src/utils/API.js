import axios from "axios";

//use axios to do api calls
export default {
  getAllProduct: function() {
    return axios.get("/api/products/");
  },
  getProductName: function(productName) {
    return axios.get("/api/products/" + productName);
  },
  // Gets the product with the given id
  getProduct: function(id) {
    return axios.get("/api/products/" + id);
  },
  // Deletes the product with the given id
  deleteProduct: function(id) {
    return axios.delete("/api/products/" + id);
  },
  // Saves a product to the database
  saveProduct: function(productData) {
    return axios.post("/api/products", productData);
  },
  getAllUser: function() {
    return axios.get("/api/user/");
  },
  getUsername: function(username) {
    return axios.get("/api/user/" + username);
  },
  // Saves user to database
  signup: function(username) {
    return axios.post("/api/users", username);
  }
};