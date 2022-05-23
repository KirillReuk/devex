import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TableContainer = styled.div`
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
  padding: 10px 25px 10px 25px;
`
const LeftCell = styled(Cell)`
  width: 80px;
  color: #f4511e;
  font-weight: 600;
  vertical-align: middle;
`
const RightCell = styled(Cell)`
  width: 800px;
  padding-left: 0;
  font-weight: 500;
`
const Header = styled.th`
  border: 3px solid #EEEEEE;
  border-left: none;
  border-right: none;
  cursor: default;
  padding: 15px 25px 15px 25px;
  color: #f4511e;
`
const LeftHeader = styled(Header)`
  width: 80px;
`
const RightHeader = styled(Header)`
  width: 800px;
  padding-left: 0;
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
    <TableContainer>
      <Table>
        <TableRow>
          <LeftHeader>NAME</LeftHeader>
          <RightHeader>DESCRIPTION</RightHeader>
        </TableRow>
        {props.api.map(x =>
          <StyledLink key={x.id} to={"/" + x.id}>
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
    </TableContainer>
  )
}

export default Homepage;
