import React from 'react';

import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import tumoLogoArm from './tumo-logo-arm.png';
import ProfileIcon from './ProfileIcon';
import NetworkIcon from './NetworkIcon';
import SearchIcon from './SearchIcon';

import './navigationbar.css';

export default ({ user, location, logoutUser }) => (
  <div className="global-nav">
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <LinkContainer to="/">
        <Navbar.Brand><img alt="tumo" className="tumo-logo" src={tumoLogoArm} /></Navbar.Brand>
      </LinkContainer>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {
            // user.data ? (
            <span>
              <span className="ml-4 nav-icon">
                <LinkContainer to="/profile">
                  <span><ProfileIcon fillColor={location.pathname === '/profile' ? "#ffa400" : "#ffffff"} /></span>
                </LinkContainer>
              </span>
              <span className="ml-4 nav-icon">
                <LinkContainer to="/search">
                  <span><SearchIcon fillColor={location.pathname === '/search' ? "#ffa400" : "#ffffff"} /></span>
                </LinkContainer>
              </span>
              <span className="ml-4 nav-icon">
                <LinkContainer to="/network">
                  <span><NetworkIcon fillColor={location.pathname === '/network' ? "#ffa400" : "#ffffff"} /></span>
                </LinkContainer>
              </span>
            </span>
            // ) : null
          }
        </Nav>
      </Navbar.Collapse>
      {
        user.data ? (
          <div className="user-navbar-information" >
            <div> 
              {`Hello ${user.data.firstName}`} 
            </div>
            <a className="logout-link" href="/login" onClick={() => logoutUser(user)} >Log out</a>
          </div>
        ) : null
        /**
         * TODO: When user logged in
         * 1. Text Hello [user first name]!
         * 2. Button to logout user
         * 3. If connected to peer a button to chat
         */
      }

    </Navbar>
  </div>
);
