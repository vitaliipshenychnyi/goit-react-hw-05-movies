// import { NavLink } from 'react-router-dom';
import { HeaderWrapper } from './header.styled';
import { Nav } from './header.styled';
import { Link } from './header.styled';

export const Header = () => {
  return (
    <HeaderWrapper>
      <Nav>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/movies" end>
          Movies
        </Link>
      </Nav>
    </HeaderWrapper>
  );
};
