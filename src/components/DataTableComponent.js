// Modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table } from 'reactstrap';

// Services
import UserAPIServices from '../services/UserAPIServices';

// actions
import * as actions from '../redux/actions/action';

//Components
import UserInfo from './UserInfoComponent';

// Styling
import './DataTableComponent.css';

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
    // dispatching actions and passing data to redux and state
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

  // sort user inverted if sortied once before
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
        user: this.userSort(this.state.user, false),
        sortedBy: USER,
      });
    }
  }
  //  sorting functions expression
  userSort = (arr, reverse = false) =>
    arr.sort((a, b) => {
      if (reverse) {
        return b.name.first.localeCompare(a.name.first);
      }
      return a.name.first.localeCompare(b.name.first);
    });

  render() {
    return (
      <div className='table'>
        {/* ^^ the entire table and image column can be resized */}
        <Table hover>
          <thead>
            <tr>
              <th></th>
              <th> Image</th>
              <th onClick={this.onSort}>User</th>
              <th onClick={this.onSort}>Address</th>
              <th onClick={this.onSort}>Contact</th>
            </tr>
          </thead>
          <tbody>
            {this.state.user ? (
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
