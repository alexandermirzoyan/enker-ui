import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Container, Form, Button, Alert } from 'react-bootstrap';

import profilePicture from './profile.jpg';
import location from './location.svg';
import learningTargets from './learning-targets.png';
import emailIcon from './email.png';

import './profile.css'

class Profile extends Component {
  constructor(props) {
    super(props);
    this.learningTargets = ["Animation", "Game Development", "Filmmaking", "Web Development"]
    this.locations = ["Yerevan", "Gyumri", "Stepnakert", "Dilijan"]
    this.state = {
      email: props.user ? props.user.email : '',
      firstName: props.user ? props.user.firstName : '',
      lastName: props.user ? props.user.lastName : '',
      password: props.user ? props.user.password : '',
      learningTargets: props.user ? props.user.learningTargets : [],
      location: props.user ? props.user.location : this.locations[0]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.updateUser(this.state);
  }
  handleChange(type, value) {
    if (type === "learningTargets") {
      const valueAsArray = Array.from(value); // Convert HTMLCollections to Array
      const learningTargets = valueAsArray.filter(v => v.selected).map(v => v.value); // Filter and map to option value
      this.setState({
        learningTargets,
      })
    } else {
      this.setState({
        [type]: value
      });
    }
  }
  render() {
    if (this.props.user == null) {
      return (
        <Redirect to={{
          pathname: '/',
        }} />
      )
    }
    return (
      <React.Fragment>
        <div className="profile-info-wrapper" >
          <div className="profile-picture-wrapper" >
            <img width="400" src={profilePicture} />
          </div>
          <div className="profile-text-info-wrapper" >
            <h2> {`${this.state.firstName} ${this.state.lastName}`} </h2>
            <hr />
            <p> <img width="50" alt="location" src={location} /> Location: <b>{this.state.location}</b> </p>
            <p> <img width="50" alt="location" src={learningTargets} /> Learning Targets: <b>{this.state.learningTargets.toString()}</b> </p>
            <p> <img width="50" alt="location" src={emailIcon} /> Email: <b>{this.state.email}</b> </p>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

Profile.propTypes = {
  updateUser: PropTypes.func,
  user: PropTypes.object,
  userError: PropTypes.string,
}

export default Profile;
