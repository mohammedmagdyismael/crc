// knockouts.js
import { matchDetailsAPI } from 'app/api/Knockouts';
import Layout from 'app/components/Layout/Layout';
import Matches from 'app/modules/common/Matches';
import { STAGES } from 'app/constants/Stages';
import { Container, KnockOutsImg } from './knockouts.style';
 
const Groups = ({ error, loading, matches }) => {
  return (
    <Layout>
      <Container>
        <KnockOutsImg src={`${import.meta.env.VITE_APP_ONCO_ASSETS_URL}/image/knockouts.png`} alt='knockouts' />
        <div style={{ height: '50px' }}/>
        <Matches
            sectionTitle="Quarter-Finals"
            matchDetailsAPI={matchDetailsAPI}
            matches={matches && matches[STAGES.Second_round]}
            error={error}
            loading={loading}
        />
        <Matches
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
        />
      </Container>
    </Layout>
  );
};

export default Groups;
