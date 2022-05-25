import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = styled.header`
  width: 100%;
  background-color: var(--color-header);
`
const TopBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 88px;
`
const Image = styled.img`
  width: 240px;
`

function TopBar() {
  return (
    <Header>
      <TopBarContainer>
        <Link to="/">
          <Image src={require('../logo.svg').default} />
        </Link>
      </TopBarContainer>
    </Header>
  );
}

export default TopBar;
