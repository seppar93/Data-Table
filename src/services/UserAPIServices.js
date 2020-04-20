/**
 * @class UserAPIServices
 * @description functions to fetch data for users and future crud applications
 */
import axios from 'axios'
export default class UserAPIServices  {

  getUser (){
    const headers = { 'Content-Type': 'application/json' };
    const request = {
      url: 'https://randomuser.me/api/?results=10',
      headers
    }
    return axios(request)
  }
}