// Layout.js
import { useEffect, useState } from 'react';
import { getTabs } from 'app/routes';
import { userInfoAPI } from 'app/api/User';
import Cookies from 'js-cookie';
import BurgerMenu from '../BurgerMenu';
import { AuthPathes } from 'app/configs/Auth';
import { 
  LoginContainer, 
  ChildrenContainer,
  OncoLogo,
  LogoutContainer,
  LayoutContainer,
  Tab,
  TabContainer,
  UserInfoContainr,
  UserLogo,
  UserName,
  UserInfoInnerContainr,
  ButtonsContainer,
} from './Layout.style';

const Layout = ({ children, hidebackground, extendChildContainer, isMatch }) => {
  const [userInfo, setUserInfo] = useState(null);
  const role = Cookies.get('role');

  if (!role && AuthPathes.includes(String(window.location.pathname.split('/')[1]).toLowerCase())) {
    window.location.href = '/login';
  }

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await userInfoAPI();
        setUserInfo(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserInfo();
  }, []);

  

  const handleLogout = () => {
    // Remove all cookies
    Cookies.remove('username');
    Cookies.remove('token');
    Cookies.remove('role');

    window.location.href = '/';
  };

  const handleLogin = () => {
    window.location.href = '/login';
  };

  const tabs = getTabs(role);

  const enableLogin = import.meta.env.VITE_APP_END_TOURNAMENT_DATE === 'false' && !role;

  return (
    <LayoutContainer hidebackground={hidebackground} isMatch={isMatch}>
      <BurgerMenu items={tabs} title={`Hi! ${userInfo?.name || ''}`} isLogged={!!role} handleLogin={handleLogin} handleLogout={handleLogout} />
      <TabContainer>
        <OncoLogo
          isMatch={isMatch}
          onClick={() => {
            window.location.href = '/';
          }}
          src={`${import.meta.env.VITE_APP_ONCO_ASSETS_URL}/image/Oncolympics Logo.png`} alt='Oncolympics_Logo'
        />
        
        <ButtonsContainer isMatch={isMatch}>
          {tabs?.map((tab, i) => (
            <Tab isMatch={isMatch} exact to={tab.route} activeClassName="active" key={i}>
              {tab.label}
            </Tab>
          ))}
          {enableLogin && (
            <LoginContainer onClick={handleLogin}>
              Login
            </LoginContainer>
          )}

          {!!role && (
            <UserInfoContainr isMatch={isMatch}>
              {userInfo ? (
                <UserInfoInnerContainr>
                  <UserName>{`Hi! ${userInfo?.name}`}</UserName>
                  {!!userInfo.logo && (<UserLogo src={`${import.meta.env.VITE_APP_ONCO_ASSETS_URL}/teamslogos/${userInfo?.logo}`} alt='user_logo' />)}
                </UserInfoInnerContainr>
              ): (
                <UserInfoInnerContainr>
                  <UserName>{`. . .`}</UserName>
                </UserInfoInnerContainr>
              )}
              {userInfo && (
              <LogoutContainer id='logout' onClick={handleLogout}>
                Logout
              </LogoutContainer>
            )}
            </UserInfoContainr>
          )}
        </ButtonsContainer>
        
      
      </TabContainer>
      

      <ChildrenContainer extendChildContainer={extendChildContainer}> 
        {children}
      </ChildrenContainer>
    </LayoutContainer>
  );
};

export default Layout;
