import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {Redirect} from 'react-router-dom';
import { Container, InputGroup, FormControl, Form, Button, Col, Row } from 'react-bootstrap';

import logo from '../../images/tumo-logo.png'

import './login.css'

/**
 * Component for Login Page
 */
export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    alert(`Logged in as ${this.state.email}`);
    this.props.loginUser(this.state.email, this.state.password)
  }

  handleEmailChange = event => {
    this.setState({
      email: event.target.value
    })
  }

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    })
  }

  render() {
    
    if (this.props.user) {
      return (
        <Redirect to={{
          pathname: '/profile',
        }} />
      )
    }

    return (
      <div className="login-form-wrapper"  >
        <Col xl={6} className="input-form-wrapper mx-auto align-middle" >
          <img className="logo-img" src={logo} />
          <Form onSubmit={this.handleSubmit} >
            <Form.Control onChange={this.handleEmailChange} ref="email" className="mt-5" type="email" placeholder="Օգտանուն" />
            <Form.Control onChange={this.handlePasswordChange} ref="password" className="mt-3" type="password" placeholder="Գաղտնաբառ" />
            <a className="change-password" href="#" > Փոխել գաղտնաբառը </a>
            <Button type="submit" className="w-100 login-submit-button" variant="success">Մուտք</Button>
          </Form>
        </Col>
      </div>
    )
  }
}

Login.propTypes = {
  loginUser: PropTypes.func,
  user: PropTypes.object,
  userError: PropTypes.string,
}
