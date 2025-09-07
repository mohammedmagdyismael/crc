// knockouts.js
import { matchDetailsAPI } from 'app/api/Knockouts';
import Layout from 'app/components/Layout/Layout';
import Matches from 'app/modules/common/Matches';
import { STAGES } from 'app/constants/Stages';
import { Container, KnockOutsImg, RefreshBar, RefreshButton } from './knockouts.style';
 
const Groups = ({ error, loading, matches, onRefresh = () => {} }) => {
  return (
    <Layout>
      <Container>
        <KnockOutsImg src={`${import.meta.env.VITE_APP_ASSETS_URL}/image/knockouts.png`} alt='knockouts' />
        <div style={{ height: '50px' }}/>
        <RefreshBar>
          <RefreshButton onClick={onRefresh} title="Refresh matches">
            <span className="icon">↻</span>
            <span>Refresh</span>
          </RefreshButton>
        </RefreshBar>
        <Matches
            sectionTitle="Knockouts"
            matchDetailsAPI={matchDetailsAPI}
            matches={matches && matches[STAGES.First_round]}
            error={error}
            loading={loading}
        />
        {/* <Matches
            sectionTitle="Semi-Finals"
            matchDetailsAPI={matchDetailsAPI}
            matches={matches && matches[STAGES.Third_round]}
            error={error}
            loading={loading}
        />
        <Matches
            sectionTitle="Final"
            matchDetailsAPI={matchDetailsAPI}
            matches={matches && matches[STAGES.Final_round]}
            error={error}
            loading={loading}
        /> */}
      </Container>
    </Layout>
  );
};

export default Groups;
