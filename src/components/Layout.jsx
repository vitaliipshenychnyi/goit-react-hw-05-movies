import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from './header/header';

const Container = styled.div`
background-color: #fff;
`;

const Layout = () => {
  return (
    <Container>
      <Header />
      <main>
        <Outlet />
      </main>
    </Container>
  );
};

export default Layout;
