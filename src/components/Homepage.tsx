import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TableContainer = styled.div`
  margin: 45px auto auto;
  width: 60%;
`
const Table = styled.table`
  text-align: left;
  font-size: 14px;
  border-collapse: collapse;
  background-color: var(--color-homepage-table);
  th, td {
    border: var(--color-background) 4px solid;
    border-left: none;
    border-right: none;
  }
  th {
    cursor: default;
    padding: 20px 25px;
    color: var(--color-primary-text);
    :first-of-type {
      width: 80px;
    }
    :not(:first-of-type) {
      width: 800px;
      padding-left: 0;
    }
  }
  td {
    padding: 10px 20px 10px 25px;
    line-height: 20px;
    :first-of-type {
      width: 80px;
      color: var(--color-primary-text);
      font-weight: 600;
      vertical-align: middle;
    }
    :not(:first-of-type) {
      width: 800px;
      padding-left: 0;
      font-weight: 500;
    }
  }
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

function Homepage(props) {
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <th>NAME</th>
            <th>DESCRIPTION</th>
          </tr>
        </thead>
        <tbody>
          {props.api.map(x =>
            <tr key={x.id}>
              <td>
                <StyledLink to={"/" + x.id}>
                  {x.name}
                </StyledLink>
              </td>
              <td>
                <StyledLink to={"/" + x.id}>
                  {x.description}
                </StyledLink>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </TableContainer>
  )
}

export default Homepage;
