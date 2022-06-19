import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import OtherComponent from './MyOtherComponent';
import ComponentAsClass from './ComponentAsClass';
import Countries from './Countries';

function MyComponent() {
  return (
    <React.Fragment>
      <h1>List of Components:</h1>
      <OtherComponent></OtherComponent>
      <br/>
      <ComponentAsClass></ComponentAsClass>
      <ComponentAsClass />
      <Countries></Countries>
    </React.Fragment>);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MyComponent></MyComponent>
  // <MyComponent />
  // <OtherComponent></OtherComponent>
  // <ComponentAsClass></ComponentAsClass>

  // <Countries></Countries>
);
