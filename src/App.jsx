import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Overlay from "./overlay";
import Header from './Header';
import Side from './Side';
import Form from './Form';

const App = () => {
  return (
    <div> 
     <Overlay/>
     <Header/>

     
     <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <Side />
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12">
          <Form/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App