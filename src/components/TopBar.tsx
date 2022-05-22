import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  width: 100%;
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
        <img src={require('../logo.svg').default} />
      </TopBarContainer>
    </Header>
  );
}

export default TopBar;
