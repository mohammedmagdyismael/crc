import { useState, useEffect } from 'react';
import { matchScoresAPI } from '../../api/Player';
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
} from './MatchScores.style';

const MatchScores = () => {
    const [scores, setScores] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchScores = async () => {
            try {
                const response = await matchScoresAPI();
                setScores(response);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };
        fetchScores();
    }, []);

    if (loading) return <LoadingStatusContainer><StatusMsg>Loading...</StatusMsg></LoadingStatusContainer>;
    if (error) return <LoadingStatusContainer><StatusMsg>Error: {error.message}</StatusMsg></LoadingStatusContainer>;

    return (
        <div>
            <LabelContainer><Label>Match Scores</Label></LabelContainer>
            {scores.scores.map((score, index) => (
                <QContainer key={index}>
                    <Qlabel>Question {score.questionId + 1}</Qlabel>
                    <ScoreContainer>
                        <TeamScoreContainer><TeamLabel>{score.team1_name}:</TeamLabel> <ScoreLabel>{score.score_team1}</ScoreLabel></TeamScoreContainer>
                        <TeamScoreContainer><ScoreLabel>{score.score_team2}</ScoreLabel> <TeamLabel>:{score.team2_name}</TeamLabel></TeamScoreContainer>
                    </ScoreContainer>
                </QContainer>
            ))}
        </div>
    );
};

export default MatchScores;
