import React, { Component } from 'react'
import { Button } from 'reactstrap';

import  UserAPIServices from '../services/UserAPIServices'

export class DataTableComponent extends Component {
  constructor(props){
    super(props)
    this.userAPIServices = new UserAPIServices();
    this.fetchUserData = this.fetchUserData.bind(this)
  }

  fetchUserData(){
    this.userAPIServices.getUser().then(res => {
      console.log(res);
    }).catch(res => {
      console.log(res);

    })
  }

  render() {

    return (
      <>
      <Button onClick={this.fetchUserData}>TESTING</Button>
      </>
    );
  }
}

export default DataTableComponent

