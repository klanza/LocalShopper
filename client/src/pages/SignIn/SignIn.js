import React, { Component } from "react";
import { Button, Icon } from 'react-materialize';
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

class SignIn extends Component {

    state = {

        loggedIn: false,

        user: {},

        username: "",
        password: "",
        message: 'Enter your username and password',
        systemError: false,
        redirectTo: null,
    };

    handleSubmit = event => {
        event.preventDefault();
        //set timeout because i got stuck in a request that wasn't being caught 
        setTimeout(() => {
            API.getVerification(this.state.username, this.state.password).then((res) => {
                //message comes from loginController from passport localStrategy!!
                if (res.data.message === 'Incorrect username' || res.data.message === 'Incorrect password') {
                    this.setState({
                        systemError: true,
                        message: 'Incorrect username or password',
                    });
                } else {
                    this.setState({
                        systemError: false,
                        message: '',
                        //set this route to default user page
                        redirectTo: '/'
                    });
                    console.log('welcome')
                }
            })
                .catch(err => {
                    this.setState({
                        systemError: true,
                        message: 'Something went wrong',
                    });
                });
        }, 2000);
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(this.state)
    };

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div>
                    <Nav>
                    </Nav>
                    <Container>

                        <Row>
                            <div className="col s6 offset-s3">
                                <h4 className="">Log Into Your Account</h4>
                            </div>
                        </Row>
                        <Row>
                            <form className="col s12">
                                <Row>
                                    <div className="input-field col s6 offset-s3">
                                        <i className="material-icons prefix">assignment_ind</i>
                                        <Inputs
                                            value={this.state.username}
                                            onChange={this.handleInputChange}
                                            id="icon_prefix"
                                            name="username"
                                        />
                                        <label for="icon_prefix">E-mail</label>
                                    </div>
                                </Row>
                                <Row>
                                    <div className="input-field col s6 offset-s3">
                                        <i className="material-icons prefix">lock</i>
                                        <Inputs
                                            value={this.state.password}
                                            onChange={this.handleInputChange}
                                            id="icon_prefix"
                                            name="password"
                                            type='password'
                                        />
                                        <label for="icon_prefix">Password</label>
                                    </div>
                                    <span className="err-msg err-msg-login">{this.state.message}</span>
                                </Row>
                                <Row>
                                    <Button
                                        className="col s6 offset-s3 green lighten-1"
                                        waves='light'
                                        disabled={!this.state.username || !this.state.password}
                                        onClick={this.handleSubmit}
                                        >Sign
                                        <Icon right>send</Icon>
                                    </Button>
                                </Row>
                            </form>
                        </Row>
                    </Container>
                    <Footer>
                    </Footer>
                </div>
            );
        }
    }
}
export default SignIn;
