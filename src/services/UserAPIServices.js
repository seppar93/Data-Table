/**
 * @class UserAPIServices
 * @description functions to fetch data from 
 */
import axios from 'axios'
export default class UserAPIServices  {

  getUser (){
    headers['Content-Type'] = 'application/json';
    const request = {
      ur: 'https://randomuser.me/api/?results=10',
      headers
    }
    return axios(request)
  }
}