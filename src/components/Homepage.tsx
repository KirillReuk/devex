import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Homepage(props) {
  return (
    <div >
      <table>
        <tr>
          <th>NAME</th>
          <th>DESCRIPTION</th>
        </tr>
        {props.api.map(x =>
          <tr>
            <td>
              <Link to={"/" + x.id}>
                {x.name}
              </Link>
            </td>
            <td>
              <Link to={"/" + x.id}>
                {x.description}
              </Link>
            </td>
          </tr>
        )}
      </table>
    </div>
  )
}

export default Homepage;
