import { useState, useEffect } from 'react';
import { AnswersLabel } from 'app/constants/Match';
import { questionDetailsAPI } from 'app/api/Moderator';
import PopUp from 'app/components/PopUp';
import {
    LabelContainer,
    Label,
    TeamsContainer,
    TeamLogo,
    TeamLabel,
    AnswerLabel,
    AnswerReson,
    TeamContainer,
    RightAnsContainer,
    AnswerSectionLabel,
    Answer,

} from './QuestionScoresPopUP.style';
 

const QuestionScoresPopUP = ({ isOpen, onClose, match }) => {
    const { question_file, team1_name, team2_name, team1_logo, team2_logo, current_question, id } = match;
    
    const [team1Answer, setTeam1Answer] = useState(null);
    const [team2Answer, setTeam2Answer] = useState(null);
    const [isLoaded, setLoaded] = useState(false);
    const [rightAnswer, setRightAnswer] = useState(null);

    useEffect(() => {
        if (isOpen) {
            const fetchScores = async () => {
                try {
                    const questionnareresponse = await fetch(`${import.meta.env.VITE_APP_ONCO_ASSETS_URL}/matchesquestions/${question_file}`);
                    const questionnaire = await questionnareresponse.json();
                    const currentQuestionObject = questionnaire?.questions?.[current_question];
                    const questionDetailsresponse = await questionDetailsAPI(id, current_question);


                    let team1AnswerObj = currentQuestionObject?.answers?.[questionDetailsresponse?.team1answerid];
                    let team1AnswerIndex = AnswersLabel?.[questionDetailsresponse?.team1answerid] || '';
                    team1AnswerObj = { ...team1AnswerObj, answer: `${team1AnswerIndex}${team1AnswerObj?.answer || ''}` };

                    let team2AnswerObj = currentQuestionObject?.answers?.[questionDetailsresponse?.team2answerid];
                    let team2AnswerIndex = AnswersLabel?.[questionDetailsresponse?.team2answerid] || '';
                    team2AnswerObj = { ...team2AnswerObj, answer: `${team2AnswerIndex}${team2AnswerObj?.answer  || ''}`  };

                    let rightAnswerObj = currentQuestionObject?.answers?.find(a => a.correct);
                    let rightAnswerIndex = AnswersLabel[currentQuestionObject?.answers?.findIndex(a => a.correct)];
                    rightAnswerObj = { ...rightAnswerObj, answer: `${rightAnswerIndex}${rightAnswerObj.answer}` }



                    setRightAnswer(rightAnswerObj)
                    setTeam1Answer(team1AnswerObj)
                    setTeam2Answer(team2AnswerObj)
                    setLoaded(true);
                } catch (err) {
                    console.log(err);
                }
            };
            fetchScores();
        } else {
            setTeam1Answer(null);
            setTeam2Answer(null);
            setLoaded(false);
            setRightAnswer(null);
        }
    }, [current_question, id, isOpen, match, question_file]);


    return (
        <PopUp isOpen={isOpen} onClose={onClose}>
             <div>
                <LabelContainer><Label>Teams answers</Label></LabelContainer>
                
                <TeamsContainer>
                    <TeamContainer>
                        <div>
                            <TeamLogo src={`${import.meta.env.VITE_APP_ONCO_ASSETS_URL}/teamslogos/${team1_logo}`} alt='team1_logo' />
                            <TeamLabel>{team1_name}</TeamLabel>
                            {isLoaded ? (
                                <div>
                                    <AnswerLabel isRight={team1Answer?.correct} isWrong={!team1Answer?.correct}>{team1Answer?.answer || 'N/A'}</AnswerLabel>
                                </div>
                            ) : ''}
                        </div>
                    </TeamContainer>
                    <TeamContainer>
                        <div>
                            <TeamLogo src={`${import.meta.env.VITE_APP_ONCO_ASSETS_URL}/teamslogos/${team2_logo}`} alt='team2_logo' />
                            <TeamLabel>{team2_name}</TeamLabel>
                            {isLoaded ? (
                                <div>
                                    <AnswerLabel isRight={team2Answer?.correct} isWrong={!team2Answer?.correct}>{team2Answer?.answer || 'N/A'}</AnswerLabel>
                                </div>
                            ) : ''}
                        </div>
                    </TeamContainer>
                </TeamsContainer>

                {rightAnswer && (
                    <RightAnsContainer>
                        <div style={{ display: 'flex', gap: '0px'}}>
                            <AnswerSectionLabel isRight>Right Answer:</AnswerSectionLabel>
                            <Answer style={{ margin: '15px 0' }} isRight>{rightAnswer.answer}</Answer>
                        </div>
                        
                        <AnswerReson isRight>{rightAnswer.reason}</AnswerReson>
                    </RightAnsContainer>
                )}
                
                
            </div>
        </PopUp>
     );
};

export default QuestionScoresPopUP;
