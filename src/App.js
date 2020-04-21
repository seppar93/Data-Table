// Modules
import React, {lazy, Suspense } from 'react';

// Components
const DataTableComponent = lazy(() =>
  import('./components/DataTableComponent')
);

export const App = () => {
  return (
    <div className='App'>
      <Suspense fallback={<div>...loading</div>}>
        {/* Fall back to display lazy loaded "...loading" */}
        <DataTableComponent />
      </Suspense>
    </div>
  );
};

export default App;
