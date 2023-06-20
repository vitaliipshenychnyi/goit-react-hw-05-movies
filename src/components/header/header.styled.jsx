import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  background-color: #edf3fb;
  padding: 20px;
`;

export const Nav = styled.nav`
  background-color: #edf3fb;
  ul {
    display: flex;
    gap: 16px;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  &.active {
    color: orange;
  }
`;
