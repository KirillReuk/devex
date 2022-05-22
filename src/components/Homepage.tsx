import React, { Component } from 'react';
import api from '../api.json';

function Homepage() {
  return (
    <div >
      <table>
        <tr>
          <th>NAME</th>
          <th>DESCRIPTION</th>
        </tr>
        {api.map(x =>
          <tr>
            <td>{x.name}</td>
            <td>{x.description}</td>
          </tr>
        )}
      </table>
    </div>
  )
}

export default Homepage;
