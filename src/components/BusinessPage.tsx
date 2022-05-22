import React from 'react';
import api from '../api.json';

function BusinessPage(props) {
  return (
    <>
      <img className='photo' src={props.info.image} alt={props.info.name} height={300} />
      <br />
      <div style={{ display: "inline-block" }}>
        <div style={{ paddingLeft: "100px" }}>
          Address
          <br />
          {props.info.address.zip + " " + props.info.address.street}
          <br />
          {props.info.address.country + ", " + props.info.address.number}
        </div>
        <div style={{ paddingLeft: "auto", paddingRight: "auto" }}>
          Nearby Places
          <table>
            {api.filter(x => x.address.country === props.info.address.country).map(x =>
              <tr>
                <td>
                  {x.description}
                </td>
              </tr>
            )}
          </table>
        </div>
        <div style={{ paddingRight: "100px" }}>
          Contact
          <br />
          {props.info.phone + ", " + props.info.email}
        </div>
      </div>
    </>
  );
}

export default BusinessPage;
