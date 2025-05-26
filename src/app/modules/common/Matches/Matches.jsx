// Standings.js
import { useState } from 'react';
import MatchScoresPopUp from 'app/modules/Modals/MatchScoresPopUP';
import {
  LoadingStatusContainer,
  StatusMsg,
  StandingsContainer,
  MatchCard,
  TeamName,
  MatchDate,
  Deatils,
  SectionTitle,
  EmptyStateContainer,
  EmptyStateMessage,
} from './Matches.style';

const Standings = ({ matchDetailsAPI, matches, loading, error, sectionTitle }) => {

  const [isDetailsPopUpOpened, toggleDetailsPopUp] = useState(false);
  const [matchDetails, setMatchDetails] = useState(null);



  if (loading && !matches?.length) return <LoadingStatusContainer><StatusMsg>Loading ...</StatusMsg></LoadingStatusContainer>;
  if (error) return <LoadingStatusContainer><StatusMsg>{error}</StatusMsg></LoadingStatusContainer>;


  const handlePopUp = (match) => {
    setMatchDetails(match);
    toggleDetailsPopUp(true);
  }

  return (
    <>
      {sectionTitle && (
        <SectionTitle>{sectionTitle}</SectionTitle>
      )}
      {matches?.length > 0 ? (
        <StandingsContainer>
        {matches?.map((match, index) => (
            <MatchCard key={index}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                  <TeamName style={{ width: '40%', textAlign: 'center' }}>{match.team1}</TeamName> vs <TeamName style={{ width: '40%', textAlign: 'center' }}>{match.team2}</TeamName>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                  <TeamName>{match.team1Score}</TeamName> : <TeamName>{match.team2Score}</TeamName>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '5px' }}>
                  <TeamName>
                    {match.matchStatus === 0 && 'Not Started Yet'}
                    {match.matchStatus === 1 && 'Live Now'}
                    {match.matchStatus === 2 && 'Ended'}
                  </TeamName>
                  {match.matchStatus !== 0 && (
                    <Deatils onClick={() => handlePopUp(match)}>
                      <p style={{ margin: '0' }}>Details</p>
                    </Deatils>
                  )}
                  
                </div>
            </div>
            <MatchDate>{match.date}</MatchDate>
            </MatchCard>
        ))}
    </StandingsContainer>
      ) : (
        <EmptyStateContainer>
          <EmptyStateMessage>No Matches Yet!</EmptyStateMessage>
        </EmptyStateContainer>
      )}
      
      {isDetailsPopUpOpened && (
        <MatchScoresPopUp matchDetailsAPI={matchDetailsAPI} match={matchDetails} isOpen={isDetailsPopUpOpened} onClose={() => toggleDetailsPopUp(false)} />
      )}
    </>
  );
};

export default Standings;
