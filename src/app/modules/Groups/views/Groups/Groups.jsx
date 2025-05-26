// Groups.js
import { useState, useEffect } from 'react';
import { groupsAPI } from 'app/api/Groups';
import Layout from 'app/components/Layout';
import { StatusMsg, LoadingStatusContainer, GroupsContainer, GroupTable, GroupHeader, TableRow, TableHeader, TableCell } from './Groups.style';

const Groups = () => {
  const [groupsData, setGroupsData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch groups data from API
    const fetchGroups = async () => {
      try {
        const response = await groupsAPI();
        setGroupsData(response?.data);
        setLoading(false);
      } catch (error) {
        console.log(error)
        setError('Failed to fetch data');
        setLoading(false);
      }
    };

    fetchGroups();
  }, []);

  if (loading) return <LoadingStatusContainer><StatusMsg>Loading ...</StatusMsg></LoadingStatusContainer>;
  if (error) return <LoadingStatusContainer><StatusMsg>{error}</StatusMsg></LoadingStatusContainer>;

  return (
    <Layout>
      <GroupsContainer>
        {Object.entries(groupsData)?.map(([groupName, teams], index) => (
          <GroupTable key={index}>
            <GroupHeader>{groupName}</GroupHeader>
            <thead>
              <TableRow>
                <TableHeader>Name</TableHeader>
                <TableHeader>W</TableHeader>
                <TableHeader>D</TableHeader>
                <TableHeader>L</TableHeader>
                <TableHeader>Pts</TableHeader>
              </TableRow>
            </thead>
            <tbody>
              {teams.map((team, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <div style={{ display: 'flex', gap: '15px' }}>
                      <div style={{ width: '30px' }}>
                        {team.logo && (
                          <img style={{ width: '30px' }} src={`${import.meta.env.VITE_APP_ONCO_ASSETS_URL}/teamslogos/${team.logo}`} alt={team.logo} />
                        )}
                      </div>
                      <p style={{ margin: '0', lineHeight: '28px' }}>{team.teamName}</p>
                    </div>
                  </TableCell>
                  <TableCell>{team.W}</TableCell>
                  <TableCell>{team.D}</TableCell>
                  <TableCell>{team.L}</TableCell>
                  <TableCell>{team.Pts}</TableCell>
                </TableRow>
              ))}
            </tbody>
          </GroupTable>
        ))}
      </GroupsContainer>
    </Layout>
  );
};

export default Groups;
