import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from './header/header';
import { Suspense } from 'react';

const Container = styled.div`
  background-color: #fff;
`;

const Layout = () => {
  return (
    <Container>
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default Layout;
