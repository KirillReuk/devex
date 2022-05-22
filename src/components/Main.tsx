import React, { Component } from 'react';
import api from '../api.json';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopBar from './TopBar';
import Homepage from './Homepage';
import BusinessPage from './BusinessPage';

class Main extends Component<{}, { api: Array<any> }> {
  constructor(props) {
    super(props)

    //добавить async await ч запросом к апи
    this.state = {
      api
    }
  }

  render() {
    return (
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path='/' element={
            <Homepage api={this.state.api} />}
          />
          {this.state.api.map(x =>
            <Route path={'/' + x.id} element={
              <BusinessPage info={x} nearbyPlaces={this.state.api.filter(y => (x.address.country === y.address.country) && (x !== y))}/>}
            />
          )}
        </Routes>
      </BrowserRouter>
    )
  }
}

export default Main;
