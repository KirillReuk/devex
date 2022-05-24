import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
  height: 400px;
  opacity: 0.5;
  object-fit: cover;  
`
const InfoContainer = styled.div`
  margin: 15px 70px;
  display: flex;
  gap: 30px;
  font-size: 10pt;
  line-height: 22px;
`
const InfoItem = styled.div`
  background-color: var(--color-business-tile-background);
  padding: 30px 15px;
  min-width: 240px;
`
const InfoHeader = styled.div`
  font-size: x-large;
  font-weight: 500;
  margin-bottom: 30px;
`
const Table = styled.table`
  text-align: left;
  font-size: 14px;
  table-layout: fixed;
  width: 100%;
  color: var(--color-business-table-text);
  td {
    border: 3px solid var(--color-business-tile-background);
    border-left: none;
    border-right: none;
    border-collapse: collapse;
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis;
    padding: 5px 30px 5px 10px;
    background-color: var(--color-background);  
  }
`
function BusinessPage(props) {
  return (
    <>
      <Image className='photo' src={props.info.image} />
      <InfoContainer>
        <InfoItem>
          <InfoHeader>Address</InfoHeader>
          {`${props.info.address.zip} ${props.info.address.street}`}
          <br />
          {`${props.info.address.country}, ${props.info.address.number}`}
        </InfoItem>
        <InfoItem>
          <InfoHeader>Nearby Places</InfoHeader>
          <Table>
            <tbody>
              {props.nearbyPlaces.map(x =>
                <tr key={x.id}>
                  <td>
                    {x.description}
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </InfoItem>
        <InfoItem>
          <InfoHeader>Contact</InfoHeader>
          {props.info.phone}
          <br />
          {props.info.email}
        </InfoItem>
      </InfoContainer>
    </>
  );
}

export default BusinessPage;
