import { withTranslation } from 'app/hooks/withTranslation';
import Groups from './views/Groups';


const GroupsContainer = withTranslation(({ localization }) => {
  return <Groups localization={localization} />
});

export default GroupsContainer;