// import React, { Component } from "react";
// import API from "../../utils/API";
// import { Link } from "react-router-dom";

// class Products extends Component {
// 	state = {
// 		products: [],
// 		productName: "",
// 		sku: "",
// 		upc: "",
// 		serialNumber: "",
// 		price: "",
// 		seller: "",
// 		keywords: []
// 	};

// 	//lifeCycle DidMount()
// 	componentDidMount() {
// 		this.loadProudcts();
// 	}

// 	//constructors

// 	//come back to make this data print out prettier
// 	loadProducts = () => {
// 		API.getProducts()
// 	      .then(res =>
// 	        this.setState({ 
// 	        	products: res.data,
// 	        	productName: "",
// 				sku: "",
// 				upc: "",
// 				serialNumber: "",
// 				price: "",
// 				seller: "",
// 				keywords: []
// 	         })
// 	      )
// 	      .catch(err => console.log(err));
// 	}

// 	deleteProduct = id => {
// 	    API.deleteProduct(id)
// 	      .then(res => this.loadProducts())
// 	      .catch(err => console.log(err));
//   	};

//   	// how to integrate this with products
//   	// i'm thinking changing price or something
//   	handleInputChange = event => {
//     	const { name, value } = event.target;
//     	this.setState({
//       		[name]: value
//     	});
//   	};

//   	// this is for data input, but don't know how data will
//   	// be passed in yet so come back to this!
//   	// also how to push keywords info into the array I'm
//   	// assuming this is how we'll be storing the 'tags' for products
//   	// handleFormSubmit = event => {
// 	  //   event.preventDefault();
// 	  //   if (this.state.productName && this.state.sku) {
// 	  //     API.saveProduct({
// 	  //       productName: this.state.productName,
// 	  //       sku: this.state.sku,
// 	  //       upc: this.state.upc,
// 			// serialNumber: this.state.serialNumber,
// 			// price: this.state.price,
// 			// seller: this.state.seller,
// 			// keywords: []
// 	  //     })
// 	  //       .then(res => this.loadBooks())
// 	  //       .catch(err => console.log(err));
// 	  //   }
//   	// };

// };

// 	render() {
// 		return (




// 		);
// 	}

// export default Products;















