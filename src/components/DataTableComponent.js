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
const UserInfo = (props) => {
  // const [data, setData] = useState(props);

  let thumbNail = props.user.picture.thumbnail;
  let name = `${props.user.name.title} ${props.user.name.first} ${props.user.name.last} `;
  let address = `${props.user.location.country}: ${props.user.location.state}: ${props.user.location.city}`;
  let contact = `Email: ${props.user.email}  
    Number: ${props.user.phone}`;

  return (
    <tr>
      <th scope='row'></th>
      <div>
        <td>
          <img src={thumbNail} />
        </td>
      </div>
      <td>{name} </td>
      <td>{address}</td>
      <td>{contact}</td>
    </tr>
  );
};
const USER = 0;
const USER_INVERTED = 1;

export class DataTableComponent extends Component {
  constructor(props) {
    super(props);
    this.userAPIServices = new UserAPIServices();
    this.onSort = this.onSort.bind(this);
    this.state = {
      user: [],
      sortedBy: null,
    };
  }

  componentDidMount() {
    this.props.actions.fetchUserPending();
    this.userAPIServices
      .getUser()
      .then((res) => {
        this.props.actions.fetchUserSuccess(res.data.results);
        this.setState({ user: res.data.results });
      })
      .catch((error) => {
        this.props.actions.fetchUserError(error);
      });
  }

  onSort() {
    this.setState({
      user: this.userSort(this.state.user),
      sortedBy: USER,
    });

    if (this.state.sortedBy === USER) {
      this.setState({
        user: this.userSort(this.state.user, true),
        sortedBy: USER_INVERTED,
      });
    } else if (this.state.sortedBy === USER_INVERTED) {
      this.setState({
        user: this.userSort(this.state.user, 'email', false),
        sortedBy: USER,
      });
    }
  }

  userSort = (arr, reverse = false) =>
    arr.sort((a, b) => {
      if (reverse) {
        return b.name.first.localeCompare(a.name.first);
      }
      return a.name.first.localeCompare(b.name.first);
    });

  render() {
    console.log(this.state);

    return (
      <div>
        <Table hover>
          <thead>
            <tr>
              <th>
                <i className='fas fa-arrow-down'></i>
              </th>
              <th> Image</th>
              <th onClick={this.onSort}>User</th>
              <th onClick={this.onSort}>Address</th>
              <th onClick={this.onSort}>Contact</th>
            </tr>
          </thead>
          <tbody>
            {this.state.user ? (
              // Array.from(this.state.user, ([key, value]) => value).map(
              this.state.user.map((val) => {
                return <UserInfo key={val.name.last} user={val}></UserInfo>;
              })
            ) : (
              <>LOADING USERS....</>
            )}
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
