import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TableDiv = styled.div`
  margin: 50px auto auto;
  width: 60%; 
`
const Table = styled.div`
  text-align: left;
  font-size: 14px;
`
const Cell = styled.td`
  border: 3px solid #EEEEEE;
  border-left: none;
  border-right: none;
  border-collapse: true;
`
const LeftCell = styled(Cell)`
  width: 80px;
  padding: 10px 25px 10px 25px;
  color: #f4511e;
  vertical-align: center;
  font-weight: 600;
  vertical-align: middle;
`
const RightCell = styled(Cell)`
  width: 800px;
  padding: 10px 25px 10px 0px;
  font-weight: 500;
`
const Header = styled.th`
  border: 3px solid #EEEEEE;
  border-left: none;
  border-right: none;
  border-collapse: true;
  cursor: default;
`
const LeftHeader = styled(Header)`
  width: 80px;
  padding: 15px 25px 15px 25px;
  color: #f4511e;
`
const RightHeader = styled(Header)`
  width: 800px;
  padding: 15px 25px 15px 0px;
  color: #f4511e;
`
const TableRow = styled.tr`
  background-color: white;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

function Homepage(props) {
  return (
    <TableDiv>
      <Table>
        <TableRow>
          <LeftHeader>NAME</LeftHeader>
          <RightHeader>DESCRIPTION</RightHeader>
        </TableRow>
        {props.api.map(x =>
          <StyledLink to={"/" + x.id}>
            <TableRow>
              <LeftCell>
                {x.name}
              </LeftCell>
              <RightCell>
                {x.description}
              </RightCell>
            </TableRow>
          </StyledLink>
        )}
      </Table>
    </TableDiv>
  )
}

export default Homepage;
