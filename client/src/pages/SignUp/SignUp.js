import React, { Component } from 'react';
import { Inputs, SearchButton } from '../../components/Input'
//import {DeleteBtn,SaveBtn} from '../../components/DeleteBtn';
//import Jumbotron from '../../components/Jumbotron';
import API from '../../utils/API';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
// import Segment from '../../components/Segment';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from '../../components/Grid';
//import { Input, FormBtn } from '../../components/Form';
import { Redirect } from 'react-router-dom'
import { Input, Button, } from 'react-materialize';

class SignUp extends Component {

    state = {
        user: [],
        username: '',
        password: '',
        usernameError: '',
        passwordError: '',
        confirmError: '',
        registerError: false,
        errorMsg: '',
        address: '',
        storeName: '',
        picture: '',
        redirectTo: null
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(this.state)
    };

    // handlePassChange = event => {
    //     this.setState({ password: event.target.value, passwordError: '' });
    // }

    // handleConfirmChange = event => {
    //     this.setState({ confirm: event.target.value, confirmError: '' });
    // }

    validateForm = () => {
        let result = true;

        // Username must consist of letters and/or numbers
        if (!(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/).test(this.state.username)) {
            result = false;
            this.setState({
                usernameError: 'Use letters and/or numbers only',
            });
        }
        // contains at least 1 lowercase, 1 uppercase, and one number
        if (!(/^[a-zA-Z0-9_\-\.~[\]@!$'()\*+;,= ]{2,30}$/).test(this.state.password)) {
            result = false;
            this.setState({
                passwordError: 'Not secure enough',
            });
        }
        // Confirmation must match the password
        if (this.state.password !== this.state.confirm) {
            result = false;
            this.setState({
                confirmError: 'Passwords do not match',
            });
        }
        return result;
    }

    handleSubmit = event => {
        event.preventDefault();

        const valid = this.validateForm();

        if (valid) {
            const newUser = {
                username: this.state.username,
                password: this.state.password,
                address: this.state.address,
                storeName: this.state.storeName,
                picture: this.state.picture,
            };
            this.setState({ preloader: true });
            setTimeout(() => {
                API.createUser(newUser)
                    .then((res) => {
                        if (typeof res.data === 'object') {
                            this.setState({
                                username: '',
                                password: '',
                                usernameError: '',
                                passwordError: '',
                                confirmError: '',
                                registerError: false,
                                errorMsg: '',
                                address: '',
                                storeName: '',
                                picture: '',
                                redirectTo: '/SignIn'
                            });
                        } else if (typeof res.data === 'string') {
                            this.setState({
                                registerError: true,
                                errorMsg: res.data,
                            });
                        }
                    })
                    .catch(err => {
                        this.setState({
                            username: '',
                            password: '',
                            usernameError: '',
                            passwordError: '',
                            confirmError: '',
                            errorMsg: '',
                            address: '',
                            storeName: '',
                            picture: '',
                            registerError: true,
                            errorMsg: 'Ooops! Something went wrong, try again later',
                        });
                    });
            }, 2000);
        }
    }

    // handleFormSubmit = event => {
    //   event.preventDefault();
    //   if (this.state.searchTerm) {
    //       let searchTerm = this.state.searchTerm
    //       console.log(searchTerm)
    //       API.getAllProduct()
    //           .then(res => this.setState({ products: res.data, search: ''})
    //   )
    //           .catch(err => console.log(err))
    //   }
    // };

    render() {
        // const styles = {
        //   transform: `translateX(${-105}%)`
        // };
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        }
        return (
            <div>
                <Nav>
                </Nav>
                <Container>

                    <Row>
                        <div className='col s6 offset-s2'>
                            <h4 className=''>Create your account!</h4>
                            <h6>You're one step away from setting up your one-stop shop!</h6>
                        </div>
                    </Row>
                    <Row>
                        <form className='col s12'>
                            <Row>
                                <div className='input-field col s6 offset-s3'>
                                    <i className='material-icons prefix'>assignment_ind</i>
                                    <Inputs
                                        value={this.state.username}
                                        onChange={this.handleInputChange}
                                        id='icon_prefix'
                                        name='username'
                                    />
                                    <label for='icon_prefix'>E-mail</label>
                                </div>
                            </Row>
                            <Row>
                                <div className='input-field col s6 offset-s3'>
                                    <i className='material-icons prefix'>lock</i>
                                    <Inputs
                                        value={this.state.password}
                                        onChange={this.handleInputChange}
                                        id='icon_prefix'
                                        name='password'
                                        type='password'
                                    />
                                    <label for='icon_prefix'>Password</label>
                                </div>
                            </Row>
                            <Row>
                                <div className='input-field col s6 offset-s3'>
                                    <i className='material-icons prefix'>lock_outline</i>
                                    <Inputs
                                        value={this.state.confirm}
                                        onChange={this.handleInputChange}
                                        id='icon_prefix'
                                        type='password'
                                        name='confirm'
                                    />
                                    <label for='icon_prefix'>Confirm Password</label>
                                </div>
                            </Row>
                            <div className='input-field col s6 offset-s3'>
                                <i className='material-icons prefix'>location_city</i>
                                <Inputs
                                    value={this.state.address}
                                    onChange={this.handleInputChange}
                                    id='icon_prefix'
                                    name='address'
                                />
                                <label for='icon_prefix'>Address</label>
                            </div>
                            <Row>
                                <div className='input-field col s6 offset-s3'>
                                    <i className='material-icons prefix'>event_note</i>
                                    <Inputs
                                        value={this.state.storeName}
                                        onChange={this.handleInputChange}
                                        id='icon_prefix'
                                        name='storeName'
                                    />
                                    <label for='icon_prefix'>Company Name</label>
                                </div>
                            </Row>
                            <Row>
                                <div className='input-field col s6 offset-s3'>
                                    <i className='material-icons prefix'>picture_in_picture</i>
                                    <Inputs
                                        value={this.state.picture}
                                        onChange={this.handleInputChange}
                                        id='icon_prefix'
                                        name='picture'
                                    />
                                    <label for='icon_prefix'>Store-front or Location Picture</label>
                                </div>
                            </Row>
                            <Button
                                disabled={!this.state.username || !this.state.password || !this.state.confirm}
                                onClick={this.handleSubmit}
                                className="col s6 offset-s3 green lighten-1"
                            >
                                Create
                            </Button>
                        </form>
                    </Row>
                </Container>
                <Footer>
                </Footer>
            </div>
        );
    }
}

export default SignUp;
