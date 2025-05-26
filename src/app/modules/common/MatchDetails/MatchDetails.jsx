import Button from 'app/components/Button';
import {
    MatchDate,
    NextLabel,
    TeamLabel,
    TeamLogo,
    Container,
    InnerContainer,
    TeamContainer,
    TeamsContainer,
    extendRewardBtn,
    extendPenatlyBtn,
    RewardsPanelContainer,
    TeamScore,
    TeamLabelLogoContainer,
    ScoreBoardContainer,
    ScoreBoardTemp,
    Team1Logo,
    Team2Logo,
    Team1Name,
    Team2Name,
    MatchStatusLabel,
    Award1Action,
    Award2Action,
    Penalty1Action,
    Penalty2Action,
    ScoreContainer,
    ScoreItem,
    DateTimeString,
    DateTimeContainer,
} from './MatchDetails.style';
import { getLocalizedDateTime } from 'app/utils/Time';

const MatchDetails = ({ match, penaltyTeam, rewardTeam, isAdmin }) => {
    const showDate = match.match_status === 0;
    const showScores = (match.match_status === 1 || match.match_status === 2);
    const showRewardBtns = match.match_status === 1 && isAdmin;

    const team1Name = match?.match_status === 1 ? (match.team1_abbrev || match.team1_name) : match.team1_name;
    const team1Score = match?.score_team1;
    const team1Logo = `${import.meta.env.VITE_APP_ONCO_ASSETS_URL}/teamslogos/${match.team1_logo}`;
    const team2Name = match?.match_status === 1 ? (match.team2_abbrev || match.team2_name) : match.team2_name;
    const team2Score = match?.score_team2;
    const team2Logo = `${import.meta.env.VITE_APP_ONCO_ASSETS_URL}/teamslogos/${match.team2_logo}`;

    const showOldScoreBoard = match.match_status === 0 || match.match_status === 2;

    const onRewardHandler = teamId => {
        if (rewardTeam) {
            rewardTeam(teamId)
        }
    }

    const onPenaltyHandler = teamId => {
        if (penaltyTeam) {
            penaltyTeam(teamId)
        }
    }

    const oldScoreBoard = () => {
        return (
            <Container isMini={match.match_status === 1}>
            <InnerContainer>
                <div>
                    {match.match_status === 0 && (<NextLabel>Next</NextLabel>)}
                    {match.match_status === 1 && (<NextLabel isMini={match.match_status === 1}>In Progress ...</NextLabel>)}
                    {match.match_status === 2 && (<NextLabel>Ended</NextLabel>)}
                </div>
                <TeamsContainer isMini={match.match_status === 1}>
                    <TeamContainer>
                        <TeamContainer isMini={match.match_status === 1}>
                            <TeamLabelLogoContainer isRtL={match.match_status === 1} isMini={match.match_status === 1}>
                                <TeamLogo isMini={match.match_status === 1} src={team1Logo} alt={`${team1Name} logo`} />
                                <TeamLabel isMini={match.match_status === 1}>{team1Name}</TeamLabel>
                            </TeamLabelLogoContainer>
                            {showScores && (<TeamScore isMini={match.match_status === 1}>{team1Score}</TeamScore>)}
                        </TeamContainer>
                        
                        {showRewardBtns && (
                            <RewardsPanelContainer>
                                <Button label="+ 1" onClick={() => onRewardHandler(match.team1_id)} extendStyles={extendRewardBtn} />
                                <Button label="- 1" onClick={() => onPenaltyHandler(match.team1_id)} extendStyles={extendPenatlyBtn} />
                            </RewardsPanelContainer>
                        )}
                    </TeamContainer>

                    <TeamContainer>
                        <TeamContainer isRtL={match.match_status === 1} isMini={match.match_status === 1}>
                            <TeamLabelLogoContainer isLTR={match.match_status === 1} isMini={match.match_status === 1}>
                                <TeamLogo isMini={match.match_status === 1} src={team2Logo} alt={`${team2Name} logo`} />
                                <TeamLabel isMini={match.match_status === 1}>{team2Name}</TeamLabel>
                            </TeamLabelLogoContainer>
                            {showScores && (<TeamScore isMini={match.match_status === 1}>{team2Score}</TeamScore>)}
                        </TeamContainer>
                        
                        {showRewardBtns && (
                            <RewardsPanelContainer>
                                <Button label="+ 1" onClick={() => onRewardHandler(match.team2_id)} extendStyles={extendRewardBtn} />
                                <Button label="- 1" onClick={() => onPenaltyHandler(match.team2_id)} extendStyles={extendPenatlyBtn} />
                            </RewardsPanelContainer>
                        )}
                        
                    </TeamContainer>
                </TeamsContainer>
                
                {showDate && (
                    <div>
                        <MatchDate>{getLocalizedDateTime(match?.date_time)}</MatchDate>
                    </div>
                )}
            </InnerContainer>
        </Container>
        );
    };

    const newScoreBoard = () => {
        return (
            <ScoreBoardContainer notStarted={match.match_status === 0 || match.match_status === 2}>
                {showRewardBtns ? (
                    <ScoreBoardTemp src={`${import.meta.env.VITE_APP_ONCO_ASSETS_URL}/image/SCOREBOARD.png`} alt='score-board' />
                ) : (
                    <ScoreBoardTemp src={`${import.meta.env.VITE_APP_ONCO_ASSETS_URL}/image/SCOREBOARD2.png`} alt='score-board' />
                )}

                {/** Team 1 Logo */}
                <Team1Logo src={team1Logo} alt='team1_logo' />

                {/** Team 2 Logo */}
                <Team2Logo src={team2Logo} alt='team2_logo' />

                {/** Team 1 Name */}
                <Team1Name>{team1Name}</Team1Name>

                {/** Team 2 Name */}
                <Team2Name>{team2Name}</Team2Name>

                {/** Score */}
                {showScores ? (
                    <ScoreContainer>
                        <ScoreItem>{team1Score}</ScoreItem>
                        <ScoreItem>-</ScoreItem>
                        <ScoreItem>{team2Score}</ScoreItem>
                    </ScoreContainer>
                ) : (
                    <DateTimeContainer>
                        <DateTimeString>
                            {getLocalizedDateTime(match?.date_time)}
                        </DateTimeString>
                    </DateTimeContainer>
                )}

                {/** Status */}
                {match.match_status === 0 && (<MatchStatusLabel>NEXT</MatchStatusLabel>)}
                {match.match_status === 1 && (<MatchStatusLabel isMini={match.match_status === 1}>LIVE</MatchStatusLabel>)}
                {match.match_status === 2 && (<MatchStatusLabel>ENDED</MatchStatusLabel>)}

                {/** Panel Action */}
                {showRewardBtns && (<Award1Action onClick={() => onRewardHandler(match.team1_id)} />)}
                {showRewardBtns && (<Award2Action onClick={() => onRewardHandler(match.team2_id)} />)}
                
                {showRewardBtns && (<Penalty1Action onClick={() => onPenaltyHandler(match.team1_id)} />)}
                {showRewardBtns && (<Penalty2Action onClick={() => onPenaltyHandler(match.team2_id)} />)}

                

            </ScoreBoardContainer>
        );
    }



    return (
        <>
        {/*  */}

        {showOldScoreBoard ? oldScoreBoard() : newScoreBoard()}
        </>
        
    );
};

export default MatchDetails;
