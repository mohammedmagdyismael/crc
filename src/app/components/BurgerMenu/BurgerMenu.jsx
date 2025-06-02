// BurgerMenu.js
import { useState } from 'react';
import {
  BurgerIcon,
  Container,
  LogoutContainer,
  MenuTitle,
  SideMenu,
  Tab,
  Logo,
} from './BurgerMenu.style';

const BurgerMenu = ({ items, title, isLogged, handleLogout, handleLogin }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Container>
      <BurgerIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <div />
        <div />
        <div />
      </BurgerIcon>
      
      <Logo onClick={() => {
          window.location.href = '/';
        }} src={`${import.meta.env.VITE_APP_ASSETS_URL}/image/logo.png`} alt='App_Logo' />

      <SideMenu isOpen={isOpen}>
            <MenuTitle>{title}</MenuTitle>
            {items?.map((tab, i) => (
                <Tab exact to={tab.route} activeClassName="active" key={i}>
                    {tab.label}
                </Tab>
            ))}
            {isLogged && (
                <LogoutContainer onClick={handleLogout}>
                    Logout
                </LogoutContainer>
                )}
                {!isLogged && (
                <LogoutContainer onClick={handleLogin}>
                    Login
                </LogoutContainer>
                )}
      </SideMenu>
    </Container>
  );
};

export default BurgerMenu;
