import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header, MainContainer, Nav, NavItem } from './SharedLayout.styled';

const SharedLayout = () => {
  const location = useLocation();

  return (
    <>
      <Header>
        <Nav>
          <NavItem to="/" state={{ from: location }}>
            Home
          </NavItem>
          <NavItem to="/Movies" state={{ from: location }}>
            Movies
          </NavItem>
        </Nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <MainContainer>
          <Outlet />
        </MainContainer>
      </Suspense>
    </>
  );
};

export default SharedLayout;
