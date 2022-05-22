import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = styled.header`
  width: 100%;
  background-color: white;
`

const TopBarContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width:100%;
  height:90px;
  margin-bottom: 5px;
`

function TopBar() {
  return (
    <Header>
      <TopBarContainer>
        <Link to="/">
          <img src={require('../logo.svg').default} />
        </Link>
      </TopBarContainer>
    </Header>
  );
}

export default TopBar;
