import { useState, useEffect } from 'react';
import { AnswersLabel } from 'app/constants/Match';

import {
    QuestionContainer,
    Question,
    OptionContainer,
    Option,
    Container,
    QuestionsCounter,
    ActionBtn,
    ActionBtnLabel,
    AnswerJustification,
    OptionsContainer,
    TeamQuestionContainer,
    TeamsDetailsContainer,
    Stopwatch,
} from './MatchQuestion.style';
import CountdownStopwatch from 'app/components/CountDown/CountDown';


const MatchQuestion = ({ toggleDetailsPopUp, teamCanAnswer, stopAnswer, matchDetails, questionFile, currentQuestion, setNumberOfQuestions }) => {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showRightAns, toggleRightAns] = useState(false);
    const [stopCounter, setStopCounter] = useState(false);

    useEffect(() => {
        toggleRightAns(false);
        setStopCounter(false);
    }, [currentQuestion])

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_APP_ONCO_ASSETS_URL}/matchesquestions/${questionFile}`);
                const data = await response.json();
                setQuestions(data.questions);
                setNumberOfQuestions(data?.questions?.length)
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };
        fetchQuestions();
    }, [questionFile, setNumberOfQuestions]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const question = questions[currentQuestion];

    return (
        <Container>
            <TeamQuestionContainer>
                <div style={{ width: '100%' }}>
                    <div style={{ display: 'flex' }}>

                        <QuestionsCounter>{`${currentQuestion + 1} / ${questions?.length}`}</QuestionsCounter>
                        <div style={{ margin: '0 auto', display: 'flex', justifyContent: 'center' }}>
                            <div style={{     width: '145px' }}>
                                <CountdownStopwatch isChanged={currentQuestion} stopCounter={stopCounter} />
                            </div>
                            {teamCanAnswer && (
                                <Stopwatch onClick={() => {stopAnswer(); setStopCounter(true);}} src={`${import.meta.env.VITE_APP_ONCO_ASSETS_URL}/image/stopwatch.png`} alt='stopwatch' />
                            )}
                        </div>
                    </div>
                    
                    <QuestionContainer><Question>{question?.question}</Question></QuestionContainer>
                </div>
                <TeamsDetailsContainer>
                    {matchDetails}
                </TeamsDetailsContainer>
            </TeamQuestionContainer>
            
            
            <OptionsContainer>
                {question?.answers.map((answer, index) => (
                    <div key={index}>
                        <OptionContainer isRight={answer.correct && showRightAns} key={index}><Option>{`${AnswersLabel[index]}${answer.answer}`}</Option></OptionContainer>
                    </div>
                ))}
            </OptionsContainer>
            {showRightAns && (
                <AnswerJustification>
                    {`${AnswersLabel[question?.answers?.findIndex(answer => answer?.correct)]} ${question?.answers.find(answer => answer?.correct)?.reason}`}
                </AnswerJustification>
            )}
            
            <ActionBtn onClick={() => {
                    toggleRightAns(true);
                    toggleDetailsPopUp(true)
            }}><ActionBtnLabel>Show Right Answer</ActionBtnLabel></ActionBtn>

        </Container>
    );
};

export default MatchQuestion;
