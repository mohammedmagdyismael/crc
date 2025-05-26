import axios from 'axios';
import { urls } from 'app/configs/urls';

const enableFetchingFromClone = import.meta.env.VITE_APP_END_TOURNAMENT_DATE === 'true';

export const groupsAPI = async () => {
    if (enableFetchingFromClone) {
        try {
            const groups = await axios.get('/dbcloned/2024/Groups.json');
            const teams = await axios.get('/dbcloned/2024/Teams.json');

            const groupMapping = groups.data.reduce((acc, group) => {
                acc[group.id] = group.name;
                return acc;
              }, {});

            const groupedTeams = teams.data.reduce((acc, team) => {
                const groupName = groupMapping[team.group_id];
                
                if (!acc[groupName]) {
                  acc[groupName] = [];
                }
              
                acc[groupName].push({
                  teamName: team.name,
                  W: team.W,
                  D: team.D,
                  L: team.L,
                  Pts: team.Pts,
                  logo: team.logo
                });
              
                return acc;
              }, {});

            const sortedGroupNames = Object.keys(groupedTeams).sort();

            const sortedGroupedTeams = sortedGroupNames.reduce((acc, groupName) => {
            acc[groupName] = groupedTeams[groupName];
            return acc;
            }, {});

            const output = {
                status: 200,
                data: sortedGroupedTeams
              };

            return output;

        } catch (e) {
            console.error(e);
            return '';
        }
    } else {
        try {
            const response = await axios.get(urls.groups);
            return response.data;
        } catch (e) {
            console.error(e);
            return '';
        }
    }
};