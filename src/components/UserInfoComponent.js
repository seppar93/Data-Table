// Modules
import React from 'react';
// Styling
import './DataTableComponent.css';

const UserInfo = props => {
  let thumbNail = props.user.picture.thumbnail;
  let name = `${props.user.name.title} ${props.user.name.first} ${props.user.name.last} `;
  let address = `${props.user.location.country}: ${props.user.location.state}: ${props.user.location.city}`;
  let contact = `Email: ${props.user.email}  
  Number: ${props.user.phone}`;

  return (
    <tr className='userRow'>
      <th scope='row'></th>
      <div className='table-data'>
        <td>
          <img alt='user' src={thumbNail} />
        </td>
      </div>
      <td>{name} </td>
      <td>{address}</td>
      <td>{contact}</td>
    </tr>
  );
};
export default UserInfo;
