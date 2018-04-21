import React, { Component } from "react";
import Home from "../Index/Home";
import {Inputs, SearchButton} from "../../components/Input"
import API from "../../utils/API";
import Nav from "../../components/Nav";
import { Link } from "react-router-dom";
import AWS from 'aws-sdk';
import { Col, Row } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { NavItem, NavBar, Button } from 'react-materialize'


class Upload extends Home {
	state = {
		products: [],
		val: []
		
	};
	componentDidMount() {
		 
	this.listinit();
		   
	}
	handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
        [name]: value
    });
    console.log(this.state)
    };

	listinit = () => {

    //initialize AWS
	AWS.config.region = 'us-west-2'; // 1. Enter your region

	AWS.config.credentials = new AWS.CognitoIdentityCredentials({
	    IdentityPoolId: 'us-west-2:4b2f1fbe-8aa9-4ec7-bf13-f3733114db21' // 2. Enter your identity pool
	});
	AWS.config.update({correctClockSkew: true}); 

	AWS.config.credentials.get(function(err) {
	    if (err) alert("Error: " + err);  
	    console.log(AWS.config.credentials);
	});
	    
	    this.listObjs(); //call function to list previous files
	};

     

	listObjs = () => {
	   
	     this.setState({ val: [],products: []});
	 	 var bucketName = 'an-test'; // Enter your bucket name
	     var bucket = new AWS.S3({
	        params: {
	            Bucket: bucketName
	        }
	     });  //list all objects
	     var prefix = 'testing/';
	        bucket.listObjects({
	            Prefix: prefix
	        }, (err, data) => {
	            if (err) {
	                
	                console.log(err);
	            } else {
	                //console.log(data);
	               this.setState({ val: data});
	               console.log("val changed state",this.state.val);

	             
	              for(var i=0;i<this.state.val.Contents.length;i++){
	              //add unique user id to upload in specific user folder instead of 2
		               this.state.val.Contents[i].Key.trim().indexOf("testing/"+ this.props.match.params.id ) === -1?
			             console.log("This item does not  exist"):
			             
	                     this.setState({ products: [...this.state.products, this.state.val.Contents[i]]});

	               }           
	                       
             console.log("prod",this.state.products);
	                         
	       	        
	            }

	        });
	          
	    
	};

	


	handleFormSubmit = (event) => {
	  event.preventDefault();
	       var bucket = new AWS.S3({
	        params: {
	            Bucket: "an-test"
	        }
	     });
	    var fileChooser = document.getElementById('file-chooser');
	    var button = document.getElementById('upload-button');
	    var results = document.getElementById('results');
	    
	        var file = fileChooser.files[0];

	        if (file) {
                //add unique user id to upload in specific user folder instead of 2 in objKey
	            results.innerHTML = '';
	            var objKey = 'testing/' + this.props.match.params.id +'/'+ file.name ;
	            var params = {
	                Key: objKey,
	                ContentType: file.type,
	                Body: file,
	                ACL: 'public-read'
	            };

	            bucket.upload(params, (err, data) => {
	                if (err) {
	                    results.innerHTML = 'ERROR: ' + err;
	                } else {
	                    console.log(data.location);
	                    this.listObjs();
	                }
	            }).on('httpUploadProgress', function(evt) {
	                console.log('Progress:', evt.loaded /  evt.total * 100); 
	            });
	            
	        } else {
	            results.innerHTML = 'Nothing to upload.';
	        }
	    
	};
  
  
	render() {

	const styles = {
      color: "green"
    };

    var copy = (
        <div>
        <Nav/>
       
		 <div className="col s12">
		           
		            {this.state.products.length ? (
	              
    
		              <ul className="collection with-header">
		              <li className="collection-header"><h4>{this.props.match.params.id}'s Uploaded  Items </h4></li>
		                {this.state.products.map((products,index) => (
		                  <li className="collection-item" key={index}>
<a href= {'http://s3-us-west-2.amazonaws.com/an-test/'+ products.Key} target="_blank">Uploaded File {index+1} </a><br/>	                     
	                   
		                   </li>
		                ))}
		               </ul>
		            ) 

		            : (
		              <h3>No Results to Display</h3>
		            )}
		   </div>

        <input type="file" id="file-chooser" style={styles}/>
        

		<button className="btn waves-effect waves-light" type="submit" name="action" id="upload-button"  onClick={this.handleFormSubmit}>
		Upload Your Document
		        <i className="material-icons right">cloud</i>
		    </button>

	    
	  
	    <div id="results"></div>




		</div>
      
    );

		return (

			<div>{copy}
			</div>
		);
	}
}
export default Upload;















