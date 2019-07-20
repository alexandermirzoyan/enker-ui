import { connect } from 'react-redux'

import Profile from './Profile';

const mapStateToProps = state => ({
  // TODO: pass logged in user data
  user: state.user.data,
  userError: state.user.data,
})

const mapDispatchToProps = dispatch => {
  // TODO: EXTRA WORK - pass update user action 
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
