import React from 'react';
import PropTypes from 'prop-types';
import Socket from '../../socket';
import { Container, InputGroup, FormControl, Button, Row, Col, ListGroup, Tab, Form } from 'react-bootstrap';

/**
 * React component to render search page
 */
class Search extends React.Component {
  constructor(props) {
    //TODO: set default state of list of users, and text search, event handler and socket connect 
    super(props);
    this.state = {
      users: [],
      user: '',
      searchQuery: '',
    }
  }
  componentDidMount() {
    // TODO: event handlers if user logged in or out, run query
  }

  handleSubmit(event) {
    // TODO: form submit
    event.preventDefault();
    Socket.connect(user => {
      user.emit('search', this.state.searchQuery, (users) => {
        this.setState({ users });
        console.log(users)
      })
    })
    this.setState({ user: '' })
  }
  onStudentLoggedIn() {
    // TODO: Socket event handler if user logged in - run query
  }
  onStudentLoggedOut() {
    // TODO: Socket event handler if user logged out - run query
  }
  onstartChat(withUser) {
    // TODO: event to invoke start-chat action via Socket, redirect to /network page
  }

  query(textSearch) {
    this.setState({
      searchQuery: textSearch,
    })
  }

  handleUserSelect = (user) => {
    this.setState({user})
  }

  render() {
    return (
      <Container className="mt-5">
        <Form onSubmit={(e) => this.handleSubmit(e)} >
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Tumo Friend name"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={e => this.query(e.target.value)}
            />
            <InputGroup.Append>
              <Button type="submit" variant="outline-secondary">Search</Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">

          {this.state.users.map(i => (
            <ListGroup.Item onClick={this.handleUserSelect(i)} action href="#link1">
              {i.firstName}
              {i.learningTargets}
            </ListGroup.Item>
          ))}

        </Tab.Container>

      </Container>
    )
  }
}

Search.propTypes = {
  startChat: PropTypes.func,
  currentUser: PropTypes.object,
};
export default Search;