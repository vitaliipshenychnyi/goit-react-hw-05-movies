import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  background-color: #edf3fb;
  padding: 20px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 16px;
  background-color: #edf3fb;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
`;
