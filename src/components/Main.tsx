import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopBar from './TopBar';
import Homepage from './Homepage';
import BusinessPage from './BusinessPage';

class Main extends Component<{}, { api: Array<any> }> {
  constructor(props) {
    super(props)

    this.state = {
      api: []
    }
  }

  componentWillMount() {
    this.fetchApi();
  }

  fetchApi() {
    fetch('https://api.jsonbin.io/b/625eb6da80883c3054e3915e/13')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ api: responseJson })
      })
      .catch((error) => {
        console.error(error);
      });
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
              <BusinessPage info={x} nearbyPlaces={this.state.api.filter(y => (x.address.country === y.address.country) && (x !== y))} />}
            />
          )}
        </Routes>
      </BrowserRouter>
    )
  }
}

export default Main;
