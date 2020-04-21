// Modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Styling
import './App.css';

// Components
import DataTableComponent from './components/DataTableComponent';

// Services
import UserAPIServices from './services/UserAPIServices';

// actions
import {
  fetchUserPending,
  fetchUserSuccess,
  fetchUserError,
} from './redux/actions/action';
import * as actions from './redux/actions/action';

class App extends Component {
  constructor(props) {
    super(props);
    this.userAPIServices = new UserAPIServices();
    this.fetchUsers = this.fetchUsers.bind(this);
    this.state = {};
  }
  componentDidMount() {}

  fetchUsers() {
    this.props.actions.fetchUserPending();
    this.userAPIServices
      .getUser()
      .then((res) => {
        this.props.actions.fetchUserSuccess(res.data.results);
        console.log(this.props);
      })
      .catch((res) => {
        this.props.actions.fetchUserError();
      });
  }

  render() {
    console.log(this.props);

    return (
      <div className='App'>
        <button onClick={this.fetchUsers}>Testing</button>
        {/* <DataTableComponent test={'test'} /> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.users,
  };
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
