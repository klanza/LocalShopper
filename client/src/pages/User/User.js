import React, { Component } from "react";
import { Button, Icon, NavItem, NavBar, CardPanel } from 'react-materialize';
import { Inputs, SearchButton } from "../../components/Input"
//import {DeleteBtn,SaveBtn} from "../../components/DeleteBtn";
//import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
// import Segment from "../../components/Segment";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
//import { Input, FormBtn } from "../../components/Form";
import { Redirect } from 'react-router-dom'

class User extends Component {

	state = {
        file: {},
        id: "",
        username: "",
        storeName: "",
        address: "",
	};

    componentDidMount() {
        this.loadInitial();
    }

    loadInitial = () => {
        //get all products  
        API.getCurrentUser()
            .then(res => {
                console.log(res)
                // console.log(req)
                // console.log(req.user);
                this.setState({
                     id: res.data._id,
                     username: res.data.username,
                     storeName: res.data.storeName,
                     address: res.data.address
                }); //change state of val with array of objects received

                // this.loadData(this.state.val);   //pass the val function               
            })
     
            .catch(err => console.log(err))  
    };
    
    handleFormSubmit = event => {
      event.preventDefault();
      
          window.location = '/upload1/'+this.state.username;
           
    };


    handleFileUpload = event => {
        event.preventDefault();
        var fileChooser = document.getElementById('file-chooser');
        var file = fileChooser.files[0];
    //    this.setState({ file: file });
        if (file) {
            // console.log(file);
            API.uploadCSV( this.state.id , file)
            // .then(res => res.json("File Upload Sucessfull"))
            .catch(err => console.log(err));
        }
    };


    render() {

        var copy = (
            <div>
            <Nav/>
                <Row>
                    <CardPanel className="amber darken-3 col s6 white-text">
                        <span>Username: {this.state.username}</span> <br/>
                        <span>Store: {this.state.storeName}</span> <br/>
                        <span>Address: {this.state.address}</span> 
                        {/* <span>Hours: {storeHours}</span>   To be added later */}


                        <input type="file" id="file-chooser" />
                            
                            <button className="btn waves-effect waves-light" type="submit" name="action" id="upload-button"  onClick={this.handleFileUpload}>
                            Upload CSV
                                    <i className="material-icons right">cloud</i>
                                </button>
                            <div id="results"></div>
                    </CardPanel>
                </Row> 
            <button className="btn waves-effect waves-light" type="submit" name="action"  onClick={this.handleFormSubmit}>
                Click to upload your documents
                <i className="material-icons right">cloud</i>
            </button>
            </div>
        );

        return (

            <div>
                {copy}
            </div>
        );
    }
}

export default User;