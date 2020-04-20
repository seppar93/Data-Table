// Modules
import React, { Component } from 'react'
import { connect } from 'react-redux';

// Styling
import './App.css';

// Components
import DataTableComponent from './components/DataTableComponent';

// Services
import UserAPIServices from './services/UserAPIServices';



 
class App extends Component {
  constructor(props) {
    super(props);
    this.userAPIServices = new UserAPIServices();
    this.state = {};
  }
  componentDidMount() {
    this.userAPIServices
      .getUser()
      .then((res) => {
        console.log(res);
      })
      .catch((res) => {
        console.log(res);
      });
  }

  render() {
    console.log(this.props);

    return (
      <div className='App'>
        <button onClick={this.props.updateUser()}>TESTING action</button>
        <DataTableComponent test={'test'} />
      </div>
    );
  }
}
 


const mapStateToProps = (state, props) => {
  return {
    posts: state.posts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (user) => {dispatch({type: 'UPDATE_USER', user: user})}
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(App);

