import React, { Component } from 'react';
import api from '../api.json';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Homepage from './Homepage';
import BusinessPage from './BusinessPage';

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
      
      {/* <Topbar /> */}
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/BusinessPage' element={ <BusinessPage />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default Main;
