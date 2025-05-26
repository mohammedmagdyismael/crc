import { getTabs } from 'app/routes';
import { Container, MenuContainer, Tab, OncoLogo } from './Landing.style';
 
const Landing = () => {
  const tabs = getTabs();

  return (
    <Container>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <MenuContainer>
        <OncoLogo src={`${import.meta.env.VITE_APP_ONCO_ASSETS_URL}/image/Oncolympics Logo.png`} alt='Oncolympics_Logo' />

        {tabs?.map((tab, index) => (
          <Tab exact to={tab.route} activeClassName="active" key={index}>
            {tab.label}
          </Tab>
        ))}
      </MenuContainer>
    </div>
    </Container>
  );
};

export default Landing;
