// BurgerMenu.js
import { useState } from 'react';
import {
  BurgerIcon,
  Container,
  LogoutContainer,
  MenuTitle,
  SideMenu,
  Tab,
  OncoLogo,
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
      
      <OncoLogo onClick={() => {
          window.location.href = '/';
        }} src={`${import.meta.env.VITE_APP_ONCO_ASSETS_URL}/image/Oncolympics Logo.png`} alt='Oncolympics_Logo' />

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
