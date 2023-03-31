import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  min-height: 40px;
  background-color: #536dfe;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Nav = styled.nav`
  max-width: 1280px;
  padding: 0 15px;
  margin: 0 auto;
  display: flex;
`;

export const NavItem = styled(NavLink)`
  padding: 10px;
  text-decoration: none;
  font-weight: 700;
  color: #fff;

  &.active {
    color: yellow;
  }
`;

export const MainContainer = styled.main``;
