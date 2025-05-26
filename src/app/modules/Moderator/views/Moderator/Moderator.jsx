// match?.js
import { useState, useEffect } from 'react';
import {
    moderatorMatchDetailsAPI,
    startMatchAPI,
    nextQuestionAPI,
    endMatchAPI,
    resetMatchAPI,
    stopAnswerAPI,
    penaltyPlayerAPI,
    rewardPlayerAPI,
} from 'app/api/Moderator';
import QuestionScoresPopUP from './QuestionScoresPopUP';

import Layout from 'app/components/Layout/Layout';
import { 
  ActionBtn,
  ActionBtnLabel,
  LoadingStatusContainer,
  StatusMsg,
  MatchQuestionContainer,
  BtnsPanel,
} from './Moderator.style';
import MatchDetails from 'app/modules/common/MatchDetails';
import MatchQuestion from './MatchQuestion';

const MatchModeratorView = () => {
    const [isDetailsPopUpOpened, toggleDetailsPopUp] = useState(false);

    const [matchData, setMatchData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [numberOfQuestions, setNumberOfQuestions] = useState(0);
    const [isRestting, setRestting] = useState(undefined);
    const [isProceeding, setProceeding] = useState(undefined);


    const fetchMatchData = async () => {
        setLoading(true);
        try {
            const response = await moderatorMatchDetailsAPI();
            setMatchData(response);
            setLoading(false);
            setRestting(undefined);
            setProceeding(undefined);
        } catch (err) {
            setError(err);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMatchData();
    }, []);

    const startMatch = async () => {
      setLoading(true);
      try {
          await startMatchAPI();
          fetchMatchData();
      } catch (err) {
          console.error(err);
      }
    };
    
    const nextQuestion = async () => {
        setProceeding(true);
        try {
            await nextQuestionAPI();
            fetchMatchData();
        } catch (err) {
            console.error(err);
        }
    };

    const stopAnswer = async () => {
        try {
            await stopAnswerAPI().then(() => {
                fetchMatchData();
            });
        } catch (err) {
            console.error(err);
        }
    };
    
    const endMatch = async () => {
        try {
            await endMatchAPI();
            fetchMatchData();
        } catch (err) {
            console.error(err);
        }
    };

    const resetMatch = async () => {
        setRestting(true);
        try {
            await resetMatchAPI()
            .then(() => {
                fetchMatchData();
            });
        } catch (err) {
            console.error(err);
        }
    };

    const rewardTeam = async teamId => {
        try {
            await rewardPlayerAPI(teamId).then(() => fetchMatchData());
        } catch (err) {
            console.error(err);
        }
    };

    const penaltyTeam = async teamId => {
        try {
            await penaltyPlayerAPI(teamId).then(() => fetchMatchData());
        } catch (err) {
            console.error(err);
        }
    };

    // if (loading && matchData === null) return <Layout><LoadingStatusContainer><StatusMsg>Loading...</StatusMsg></LoadingStatusContainer></Layout>;
    if (error) return <Layout isMatch><LoadingStatusContainer><StatusMsg>Error: {error.message}</StatusMsg></LoadingStatusContainer></Layout>;

    if (matchData?.length === 0) {
        return <Layout isMatch><LoadingStatusContainer><StatusMsg>No Matches Yet</StatusMsg></LoadingStatusContainer></Layout>;
    }

    const match = matchData?.[0];

    const teamCanAnswer = match?.canAnswer === 1

    if (match?.match_status === 0) {
        return (
          <Layout isMatch>
            <div>
                <MatchDetails isAdmin match={match} />
                <BtnsPanel id='panel'>
                    <ActionBtn onClick={startMatch}><ActionBtnLabel>{loading ? 'Loading' : 'Start Match'}</ActionBtnLabel></ActionBtn>
                </BtnsPanel>
            </div>
          </Layout>
        );
    } else if (match?.match_status === 1) {
        return (
          <Layout isMatch>
            <MatchQuestionContainer>
                <div>
                    <MatchQuestion
                        toggleDetailsPopUp={toggleDetailsPopUp}
                        teamCanAnswer={teamCanAnswer}
                        stopAnswer={stopAnswer}
                        setNumberOfQuestions={setNumberOfQuestions}
                        questionFile={match?.question_file}
                        currentQuestion={match?.current_question}
                        matchDetails={<MatchDetails isAdmin match={match} rewardTeam={rewardTeam} penaltyTeam={penaltyTeam}  />}
                    />
                  
                  <BtnsPanel id='panel'>
                    {numberOfQuestions === match?.current_question + 1 ? (
                        <div>
                            {!teamCanAnswer && (
                                <ActionBtn onClick={endMatch}><ActionBtnLabel>End Match</ActionBtnLabel></ActionBtn>
                            )}
                        </div>
                    ) : (
                        <div>
                            {!teamCanAnswer && (
                                <ActionBtn onClick={nextQuestion}><ActionBtnLabel>{isProceeding ? 'Loading ...' : 'Next'}</ActionBtnLabel></ActionBtn>
                            )}
                        </div>
                    )}
                    <ActionBtn bgColor='red' onClick={resetMatch}><ActionBtnLabel>{isRestting ? 'Resetting ...' : 'Reset'}</ActionBtnLabel></ActionBtn>
                  </BtnsPanel>
                 
                </div>
            </MatchQuestionContainer>
            {isDetailsPopUpOpened && (
                <QuestionScoresPopUP match={match} isOpen={isDetailsPopUpOpened} onClose={() => toggleDetailsPopUp(false)} />
            )}
          </Layout>
        );
    } else if (match?.match_status === 2) {
        return (
          <Layout isMatch>
            <div>
                <MatchDetails isAdmin match={match} />
                <BtnsPanel id='panel'BtnsPanel>
                    <ActionBtn bgColor='red' onClick={resetMatch}><ActionBtnLabel>{isRestting ? 'Resetting ...' : 'Reset Match'}</ActionBtnLabel></ActionBtn>
                </BtnsPanel>
            </div>
          </Layout>
        );
    }
};



export default MatchModeratorView;

