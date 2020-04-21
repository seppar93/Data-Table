// Modules
import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col, Container, Table } from 'reactstrap';


// Services
import UserAPIServices from '../services/UserAPIServices';

// actions
import {
  fetchUserPending,
  fetchUserSuccess,
  fetchUserError,
} from '../redux/actions/action';
import * as actions from '../redux/actions/action';


// 
const UserInfo = props => {
  let thumbNail = props.user.picture.thumbnail;
  console.log(props);
  

  return (
      <tr>
        <th scope='row'>
          <img src={thumbNail} />
        </th>
      </tr>
  );
}

export class DataTableComponent extends Component {
  constructor(props) {
    super(props);
    this.userAPIServices = new UserAPIServices();

    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    this.props.actions.fetchUserPending();
    this.userAPIServices
      .getUser()
      .then((res) => {
        this.props.actions.fetchUserSuccess(res.data.results);
        this.setState({user: res.data.results});
      })
      .catch((error) => {
        this.props.actions.fetchUserError(error);
      });
  }

  render() {
    
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>Image</th>
              <th>User</th>
              <th>Address</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {this.props.user?
            Array.from(this.props.user, ([key, value]) => value).map(val => {
              return (
                <UserInfo
                key={val.name.first}
                  user={val}></UserInfo>
              );
            })
            :
            <p>LOADING USERS....</p>
          
          }
            
          </tbody>
        </Table>
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

export default connect(mapStateToProps, mapDispatchToProps)(DataTableComponent);
