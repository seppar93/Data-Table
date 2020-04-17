import React, { Component } from 'react'
import ReactTable from 'react-table'

export class DataTableComponent extends Component {




  render() {
    const columns = [
      { Header: 'Profile', accessor: 'picture' },
      { Header: 'User', accessor: 'name' },
      { Header: 'Address', accessor: 'location' },
      { Header: 'Contact', accessor: 'email' },
    ];
    return (
      <>
      {/* <ReactTable/> */}
      </>
    )
  }
}

export default DataTableComponent

{/* <ReactTable
  columns={columns}
        >
 </ReactTable> */}