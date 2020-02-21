import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6'>column number 1</div>
        <div className='col-6'>
          column number 2
          <span>
            <i className='fas fa-home' />
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
