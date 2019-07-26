import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Redirect, Link } from 'react-router-dom';
import { Container, Alert, Col } from 'react-bootstrap';

import logo from '../../images/tumo-logo.png';
import './login.css'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.type]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.loginUser(this.state.email, this.state.password)
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
      <React.Fragment>
        {/* <Container className="mt-3">
          <h1 className="display-4 text-secondary">Login</h1>
          <Form className="mt-5" onSubmit={e => this.handleSubmit(e)}>
            {
              this.props.userError ?
                <Alert variant="danger">{this.props.userError}</Alert> : null
            }
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control onChange={this.handleChange} type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                Login with your TUMO username and password.
          </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control onChange={this.handleChange} type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
          </Button>
          </Form>
          <hr />
          <p className="h5">Don't have an account? <Link className="text-decoration-none text-light font-weight-bold bg-primary" to="/signup">Sign-up to connect!</Link></p>
        </Container> */}

        <div className="login-form-wrapper" >
            <Col xl={6} className="input-form-wrapper mx-auto align-middle" > 
              <img className="logo-img" src={logo} />
              <Form onSubmit={this.handleSubmit} > 
                <Form.Control onChange={this.handleChange} type="email" placeholder="Օգտանուն" className="mt-5"  />
                <Form.Control onChange={this.handleChange} type="password" placeholder="Գաղտնաբառ" className="mt-3"  />
                <a className="change-password" href="#" > Փոխել գաղտնաբառը </a>
                <Button type="submit" className="w-100 login-submit-button" variant="success">Մուտք</Button>
              </Form>
            </Col>
        </div>
      </React.Fragment>
    )
  }
}

Login.propTypes = {
  loginUser: PropTypes.func,
  user: PropTypes.object,
  userError: PropTypes.string,
}
