// Match.js
import { useState, useEffect, useCallback, useRef } from 'react';
import _ from 'lodash';
import { answerAPI, playerMatchDetails } from 'app/api/Player';
import Layout from 'app/components/Layout/Layout';
import { 
  LoadingStatusContainer,
  StatusMsg,
  MatchQuestionContainer,
  RefreshBar,
  RefreshButton,
} from './Player.style';
import MatchDetails from 'app/modules/common/MatchDetails';
import MatchQuestion from './MatchQuestion';

const PlayerView = () => {
    const [matchData, setMatchData] = useState(null);
    const [error, setError] = useState(null);


    const answerQuestion = async (answer, index, isExtraQuestion) => {
        await answerAPI(answer, index, isExtraQuestion);
    }

    const previousMatchRef = useRef(null);

    const fetchMatchData = useCallback(async () => {
        try {
            const matchDetails = await playerMatchDetails();
            if (matchDetails) {
                const match = matchDetails;
                if (!_.isEqual(match, previousMatchRef.current)) {
                    previousMatchRef.current = match;
                    setMatchData([match]);
                } 
            } else {
                setMatchData(null);
            }
        } catch (err) {
            setError(err);
        }
    }, []);

    useEffect(() => {
        fetchMatchData();
    }, [fetchMatchData]);

    // if (loading && !matchData?.length === 0) return <Layout><LoadingStatusContainer><StatusMsg>Loading...</StatusMsg></LoadingStatusContainer></Layout>;
    if (error) return <Layout isMatch><LoadingStatusContainer><StatusMsg>Error: {error.message}</StatusMsg></LoadingStatusContainer></Layout>;

    if (matchData?.length === 0 ||  matchData === null) {
        return (
        <Layout isMatch>
            <RefreshBar>
                <RefreshButton onClick={fetchMatchData} title="Refresh match">
                    <span className="icon">↻</span>
                    <span>Refresh</span>
                </RefreshButton>
            </RefreshBar>
            <LoadingStatusContainer>
                <StatusMsg>No Matches Yet</StatusMsg>
            </LoadingStatusContainer>
        </Layout>
        );
    }

    const match = matchData?.[0];

    if (match?.match_status === 0) {
        return (
          <Layout isMatch>
            <RefreshBar>
                <RefreshButton onClick={fetchMatchData} title="Refresh match">
                    <span className="icon">↻</span>
                    <span>Refresh</span>
                </RefreshButton>
            </RefreshBar>
            <div>
                <MatchDetails match={match} />
            </div>
          </Layout>
        );
    } else if (match?.match_status === 1) {
        return (
          <Layout isMatch>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', width: 'fit-content', margin: '0 auto' }}>
            <RefreshBar>
                <RefreshButton onClick={fetchMatchData} title="Refresh match">
                    <span className="icon">↻</span>
                    <span>Get Score</span>
                </RefreshButton>
            </RefreshBar>
            <RefreshBar>
                <RefreshButton onClick={fetchMatchData} title="Refresh match">
                    <span className="icon">↻</span>
                    <span>Refresh / Next</span>
                </RefreshButton>
            </RefreshBar>
            </div>
            <MatchQuestionContainer>
                <div>
                  <MatchQuestion
                    match={match}
                    answerQuestion={answerQuestion}
                    questionFile={match?.question_file}
                    currentQuestion={match?.current_question} 
                    matchDetails={<MatchDetails match={match} />}    
                />
                </div>
            </MatchQuestionContainer>
          </Layout>
        );
    } else if (match?.match_status === 2) {
        return (
          <Layout isMatch>
            <RefreshBar>
                <RefreshButton onClick={fetchMatchData} title="Refresh match">
                    <span className="icon">↻</span>
                    <span>Refresh</span>
                </RefreshButton>
            </RefreshBar>
            <div>
                <MatchDetails match={match} />
            </div>
          </Layout>
        );
    }
};



export default PlayerView;

