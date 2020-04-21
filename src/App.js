// Modules
import React, { Component, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Styling
import './App.css';

// Services
import UserAPIServices from './services/UserAPIServices';

// Components
// import DataTableComponent from './components/DataTableComponent';
const DataTableComponent = lazy(() =>
  import('./components/DataTableComponent')
);

export const App = () => {
  return (
    <div className='App'>
      <Suspense fallback={<div>...loading</div>}>
        <DataTableComponent />
      </Suspense>
    </div>
  );
};

export default App;
