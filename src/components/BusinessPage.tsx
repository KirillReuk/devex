import React from 'react';
import api from '../api.json';

function BusinessPage() {
  return (
    <>
      <img className='photo' src={api[0].image} alt={api[0].name} height={300} />
      <br />
      <div style={{ display: "inline-block" }}>
        <div style={{ paddingLeft: "100px" }}>
          Address
          <br />
          {api[0].address.zip + " " + api[0].address.street}
          <br />
          {api[0].address.country + ", " + api[0].address.number}
        </div>
        <div style={{ paddingLeft: "auto", paddingRight: "auto" }}>
          Nearby Places
          <table>
            {api.filter(x => x.address.country === api[0].address.country).map(x =>
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
          {api[0].phone + ", " + api[0].email}
        </div>
      </div>
    </>
  );
}

export default BusinessPage;
