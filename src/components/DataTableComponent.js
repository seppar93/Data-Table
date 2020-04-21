// Modules
import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Services
import UserAPIServices from '../services/UserAPIServices';

// actions
import {
  fetchUserPending,
  fetchUserSuccess,
  fetchUserError,
} from '../redux/actions/action';
import * as actions from '../redux/actions/action';

export class DataTableComponent extends Component {
  constructor(props) {
    super(props);
    this.userAPIServices = new UserAPIServices();

    this.state = {};
  }

  componentDidMount() {
    this.props.actions.fetchUserPending();
    this.userAPIServices
      .getUser()
      .then((res) => {
        this.props.actions.fetchUserSuccess(res.data.results);
        console.log(this.props);
      })
      .catch((error) => {
        this.props.actions.fetchUserError(error);
      });
  }

  render() {
    return (
      <>
        <Button>TESTING</Button>
      </>
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

export default connect(mapStateToProps, mapDispatchToProps)(DataTableComponent);
