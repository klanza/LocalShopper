import React, { Component } from "react";
import Home from "../Index/Home";
import {Inputs, SearchButton} from "../../components/Input"
//import {DeleteBtn,SaveBtn} from "../../components/DeleteBtn";
//import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import Nav from "../../components/Nav";
import { Link } from "react-router-dom";
import { Col, Row } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { NavItem, NavBar } from 'react-materialize'
//import { Input, FormBtn } from "../../components/Form";
//import {DeleteBtn,SaveBtn} from "../../components/DeleteBtn";
//import Jumbotron from "../../components/Jumbotron";


class Products extends Home {
	state = {
		products: [],
		productName: "",
		sku: "",
		upc: "",
		serialNumber: "",
		price: "",
		seller: "",
		searchTerm: "",
		val: [],
		keywords: []

	};


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
  	// handleInputChange = event => {
   //  	const { name, value } = event.target;
   //  	this.setState({
   //    		[name]: value
   //  	});
  	// };

//      componentDidMount() {
//     this.loadBooks();
//   }
// //   	// this is for data input, but don't know how data will
// //   	// be passed in yet so come back to this!
// //   	// also how to push keywords info into the array I'm
// //   	// assuming this is how we'll be storing the 'tags' for products
  	
// 	 loadBooks = () => {
// 	     API.getAllProduct()
//            .then(res => {
//            	this.setState({ products: res.data, search: ""});
//             console.log(this.state.products);
//            })
   
//            .catch(err => console.log(err))  
// 	  };
 componentDidMount() {
    this.loadInitial();
  }
//    // this is for data input, but don't know how data will
//    // be passed in yet so come back to this!
//    // also how to push keywords info into the array I'm
//    // assuming this is how we'll be storing the 'tags' for products
   //var val=[];
   loadInitial = () => {
   //get all products  
   API.getAllProduct()
       .then(res => {
           this.setState({ val: res.data}); //change state of val with array of objects received
           this.loadData(this.state.val);   //pass the val function               
       })

       .catch(err => console.log(err))  
    };
     
     

   loadData = (val) => {

                   for(var i=0;i<val.length;i++){ //check if keyword matches search term entered by user 
		             val[i].keywords.indexOf(this.props.match.params.id) === -1?
		             console.log("This item does not  exist"):
		             
             //change products state with every iteration if keyword   matches usersearch keyword
              this.setState({ products: [...this.state.products, val[i]]});
             }
       
           
            console.log(this.state.products);

    };

    


	render() {

	const styles = {
      transform: `translateX(${-105}%)`
    };

    var copy = (
        <div>
        <Nav/>
       
		 <div className="col s12">
		           
		            {this.state.products.length ? (
	              
    
		              <ul className="collection with-header">
		              <li class="collection-header"><h4>{(this.props.match.params.id).toUpperCase()}</h4></li>
		                {this.state.products.map(products => (
		                  <li className="collection-item" key={products._id}>
		                     
	                        {products.productName}
			                {"       "} <br/>
			                {"Price: "}${products.price} <br/>
							{"Seller: "}{products.seller.storeName}
							{"Address: "}{products.seller.address}


		                   </li>
		                ))}
		               </ul>
		            ) 

		            : (
		              <h3>No Results to Display</h3>
		            )}
		   </div>
		</div>
      
    );

		return (

			<div>{copy}
			</div>
		);
	}
}
export default Products;















