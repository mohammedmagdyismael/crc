import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


// Styled components for burger icon and menu
export const BurgerIcon = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1000;
  cursor: pointer;
  
  div {
    width: 30px;
    height: 3px;
    background-color: ${({ isOpen }) => isOpen ? '#fff' : '#1A4870'};
    margin: 5px 0;
    transition: 0.3s;
    
    &:nth-child(1) {
      transform: ${({ isOpen }) => isOpen ? 'rotate(45deg) translateY(12px)' : 'rotate(0)'};
    }
    
    &:nth-child(2) {
      opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
    }
    
    &:nth-child(3) {
      transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg) translateY(-11px)' : 'rotate(0)'};
    }
  }
`;

export const SideMenu = styled.div`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => isOpen ? '0' : '-100%'};
  width: 250px;
  height: 100%;
  background-color: #1A4870;
  color: white;
  transition: 0.3s;
  padding: 75px 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
  
  ul {
    list-style: none;
    padding: 0;
    
    li {
      margin: 20px 0;
    }
  }
`;

export const Container = styled.div`
    display: none;
    @media only screen and (max-width: 1315px) {
        display: block;
        height: 73px;
        width: 100%;
        position: sticky;
        top: 0;
        z-index: 2;
    }
`;


export const Tab = styled(NavLink)`
  height: 60px;
  color: white;
  text-decoration: none;
  font-size: 1.2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  &.active {
    font-weight: bold;
    color: #61dafb;
    font-size: 1.4rem;
  }
`;

export const MenuTitle = styled.p`
    font-size: 22px;
    font-weight: bold;
`;

export const LogoutContainer = styled.div`
    color: white;
    font-size: 1.2rem;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: center;
    font-weight: bold;
`;

export const Title = styled.p`
    font-size: 28px;
    font-weight: 700;
    margin: 14px 0;
    width: 100%;
    text-align: center;
    color: #1A4870;
`;

export const OncoLogo = styled.img`
    width: 116px;
    margin: auto;
    display: flex;
    cursor: pointer;
`;