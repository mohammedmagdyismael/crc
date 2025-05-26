import { useState, useEffect, useDeferredValue } from 'react';
import Button from 'app/components/Button';
import { AnswersLabel } from 'app/constants/Match';
import {
    // QuestionContainer,
    // Question,
    OptionContainer,
    Option,
    Container,
    // QuestionsCounter,
    AnswerJustification,
    OptionsContainer,
    TeamQuestionContainer,
    TeamsDetailsContainer,
    extendPenatlyBtn,
} from './MatchQuestion.style';

const MatchQuestion = ({ questionFile, currentQuestion, answerQuestion, match, matchDetails }) => {
    const [questions, setQuestions] = useState([]);
    // const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const canAnswer = match?.canAnswer; 

    useEffect(() => {
        const myteamAnswerID = match?.myteamAnswerID;
        if (myteamAnswerID !== selectedOption && selectedAnswer === null) setSelectedOption(myteamAnswerID);
    }, [match]);


    const prevqueation = useDeferredValue(currentQuestion);
    useEffect(() => {
        if (prevqueation !== currentQuestion) {
            setSelectedAnswer(null);
            setSelectedOption(null);
        }
    }, [currentQuestion])

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_APP_ONCO_ASSETS_URL}/matchesquestions/${questionFile}`);
                const data = await response.json();
                setQuestions(data.questions);
                // setLoading(false);
            } catch (err) {
                setError(err);
                // setLoading(false);
            }
        };
        fetchQuestions();
    }, [questionFile]);

    // if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const question = questions[currentQuestion];


    const onSelectOption = (answer, index) => {
        if (canAnswer && match?.myteamAnswerID === null) {
            setSelectedOption(index)
            setSelectedAnswer(answer);
        }
    }

    const submitAnswer = () => {
        answerQuestion(selectedAnswer, selectedOption);
    }


    return (
        <Container>
            <TeamQuestionContainer>
                
                {/* <div style={{ width: '100%' }}>
                    <QuestionsCounter>{`${currentQuestion + 1} / ${questions?.length}`}</QuestionsCounter>
                    <QuestionContainer><Question>{question?.question}</Question></QuestionContainer>
                </div> */}
                <TeamsDetailsContainer>
                    {matchDetails}
                </TeamsDetailsContainer>
            </TeamQuestionContainer>
            
            <OptionsContainer>
                {question?.answers.map((answer, index) => (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }} key={index}>
                        <OptionContainer
                            onClick={() => onSelectOption(answer.correct, index)}
                            isSelected={index === selectedOption}
                            isRight={answer.correct && !canAnswer}
                            isWrong={!answer.correct && !canAnswer && index === selectedOption}
                            key={index}>
                                <Option>{`${AnswersLabel[index]}${answer.answer}`}</Option>
                        </OptionContainer>
                    </div>
                ))}
            </OptionsContainer>
            {match?.myteamAnswerID === null && (
                <Button label="Submit" onClick={() => {
                    submitAnswer();
                }} extendStyles={extendPenatlyBtn} />
            )}
            {(!canAnswer) && (
                <AnswerJustification>
                    {`${AnswersLabel[question?.answers.findIndex(answer => answer?.correct)]}${question?.answers.find(answer => answer?.correct)?.reason}`}
                </AnswerJustification>
            )}
        </Container>
    );
};

export default MatchQuestion;
