// Match.js
import { useState, useEffect, useDeferredValue } from 'react';
import _ from 'lodash';
import { answerAPI, playerMatchDetails } from 'app/api/Player';
import Layout from 'app/components/Layout/Layout';
import { 
  LoadingStatusContainer,
  StatusMsg,
  MatchQuestionContainer,
} from './Player.style';
import MatchDetails from 'app/modules/common/MatchDetails';
import MatchQuestion from './MatchQuestion';

const PlayerView = () => {
    const [matchData, setMatchData] = useState(null);
    const [error, setError] = useState(null);


    const answerQuestion = async (answer, index) => {
        await answerAPI(answer, index)
    }

    const prematchData  = useDeferredValue(matchData);

    useEffect(() => {
        const fetchMatchData = async () => {
            try {
                const matchDetails = await playerMatchDetails();
                if (matchDetails) {
                    const match = matchDetails;
                    if (!_.isEqual(match, prematchData)) {
                        setMatchData([match]);
                    }
                } else {
                    setMatchData(null);
                }
            } catch (err) {
                setError(err);
            }
        };

        if(!matchData) fetchMatchData();
        const interval = setInterval(fetchMatchData, 4000);

        return () => clearInterval(interval);
    }, [matchData]);

    // if (loading && !matchData?.length === 0) return <Layout><LoadingStatusContainer><StatusMsg>Loading...</StatusMsg></LoadingStatusContainer></Layout>;
    if (error) return <Layout isMatch><LoadingStatusContainer><StatusMsg>Error: {error.message}</StatusMsg></LoadingStatusContainer></Layout>;

    if (matchData?.length === 0 ||  matchData === null) {
        return <Layout isMatch><LoadingStatusContainer><StatusMsg>No Matches Yet</StatusMsg></LoadingStatusContainer></Layout>;
    }

    const match = matchData?.[0];

    if (match?.match_status === 0) {
        return (
          <Layout isMatch>
            <div>
                <MatchDetails match={match} />
            </div>
          </Layout>
        );
    } else if (match?.match_status === 1) {
        return (
          <Layout isMatch>
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
            <div>
                <MatchDetails match={match} />
            </div>
          </Layout>
        );
    }
};



export default PlayerView;

