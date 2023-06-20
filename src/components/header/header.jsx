// import { NavLink } from 'react-router-dom';
import { HeaderWrapper } from './header.styled';
import { Nav } from './header.styled';
import { StyledLink } from './header.styled';

export const Header = () => {
  return (
    <HeaderWrapper>
      <Nav>
        <ul>
          <li><StyledLink to="/">Home</StyledLink></li>
          <li><StyledLink to="/movies">Movies</StyledLink></li>
        </ul>
      </Nav>
    </HeaderWrapper>
  );
};
