import { useState, useEffect } from 'react';
import PopUp from 'app/components/PopUp';
import MatchDetails from 'app/modules/common/MatchDetails';
import {
    LoadingStatusContainer,
    StatusMsg,
    LabelContainer,
    Label,
    QContainer,
    Qlabel,
    ScoreContainer,
    TeamScoreContainer,
    TeamLabel,
    ScoreLabel,
    ScoresContainer,
    InnerContainer,
    MatchScoreBoardContainer,
} from './MatchScores.style';
 

const MatchScores = ({ isOpen, onClose, match, matchDetailsAPI }) => {
    const [scores, setScores] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (isOpen) {
            const fetchScores = async () => {
                setLoading(true);
                try {
                    const response = await matchDetailsAPI(match?.matchId);
                    setScores(response);
                    setLoading(false);
                } catch (err) {
                    setError(err);
                    setLoading(false);
                }
            };
            fetchScores();
        } else {
            setScores(null);
        }
    }, [isOpen, match]);

    if (loading) return <LoadingStatusContainer><StatusMsg>Loading...</StatusMsg></LoadingStatusContainer>;
    if (error) return <LoadingStatusContainer><StatusMsg>Error: {error.message}</StatusMsg></LoadingStatusContainer>;

    return (
        <PopUp isOpen={isOpen} onClose={onClose}>
             <div>
                <LabelContainer><Label>Match Details</Label></LabelContainer>
                <InnerContainer>
                    <MatchScoreBoardContainer>
                        <MatchDetails match={{
                            ...match,
                            match_status: match?.matchStatus,
                            team1_name: match?.team1abbrev,
                            team1_logo: match?.team1Logo,
                            score_team1: match?.team1Score,
                            team2_name: match?.team2abbrev,
                            team2_logo: match?.team2Logo,
                            score_team2: match?.team2Score,
                        }} />
                    </MatchScoreBoardContainer>
                    
                    <ScoresContainer>
                        {scores?.map((score, index) => (
                            <QContainer key={index}>
                                <Qlabel>Question {score.questionId + 1}</Qlabel>
                                <ScoreContainer>
                                    <TeamScoreContainer><TeamLabel>{score.team1_abbrev}:</TeamLabel> <ScoreLabel>{score.score_team1}</ScoreLabel></TeamScoreContainer>
                                    <TeamScoreContainer><ScoreLabel>{score.score_team2}</ScoreLabel> <TeamLabel>:{score.team2_abbrev}</TeamLabel></TeamScoreContainer>
                                </ScoreContainer>
                            </QContainer>
                        ))}
                    </ScoresContainer>
                </InnerContainer>
                
            </div>
        </PopUp>
     );
};

export default MatchScores;
