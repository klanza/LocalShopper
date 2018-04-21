import axios from 'axios';

// use axios to do api calls
export default {
  getAllProduct() {
    return axios.get("/api/products/");
  },
  getProductName(productName) {
    return axios.get("/api/products/" + productName);
  },
  // Gets the product with the given id
  getProduct(id) {
    return axios.get("/api/products/" + id);
  },
  // Deletes the product with the given id
  deleteProduct(id) {
    return axios.delete("/api/products/" + id);
  },
  // Saves a product to the database
  saveProduct(productData) {
    return axios.post("/api/products", productData);
  },
  // Upload CSV file containing multiple products to db
  uploadCSV: function(id, file) {
    return axios.post("/api/products/upload/"+id);
  },
  getAllUser() {
    return axios.get("/api/users/");
  },
  getCurrentUser(){
    return axios.get("/api/users/me");
  },
  // Username will be matched to the password to verify the user and
  // access to the users profile page will be given
  getVerification: (username, password) => axios.post('/api/users/login', { username, password }),

  // New user will be created
  createUser: newUser => axios.post('/api/users', newUser),
};
