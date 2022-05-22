import React from 'react';
import api from '../api.json';

function Main() {
  return (
    <div className="App" >
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
  );
}

export default Main;
