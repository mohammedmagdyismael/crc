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
    GalleryBtn,
} from './MatchQuestion.style';
import CountdownStopwatch from 'app/components/CountDown/CountDown';
import QuestionAssetsPopup from './QuestionAssetsPopup';


const MatchQuestion = ({ toggleDetailsPopUp, teamCanAnswer, stopAnswer, matchDetails, questionFile, currentQuestion }) => {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showRightAns, toggleRightAns] = useState(false);
    const [stopCounter, setStopCounter] = useState(false);
    const [showAssetsPopup, setShowAssetsPopup] = useState(false);
    const [currentAssetIndex, setCurrentAssetIndex] = useState(0);
    const [showGuidelinesPopup, setShowGuidelinesPopup] = useState(false);

    useEffect(() => {
        toggleRightAns(false);
        setStopCounter(false);
    }, [currentQuestion])

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_APP_ASSETS_URL}/matchesquestions/${questionFile}`);
                const data = await response.json();
                setQuestions(data.questions);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };
        fetchQuestions();
    }, [questionFile]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const question = questions[currentQuestion];
    const { questionsassets, guidelines } = question || {};

    const goalNumberOfQuestions = Number(import.meta.env.VITE_APP_NUMBER_MAIN_QUESTIONS);
    let label = '';
    if (currentQuestion + 1 > goalNumberOfQuestions) {
        label = `Extra Question ${(currentQuestion + 1) - goalNumberOfQuestions} / ${import.meta.env.VITE_APP_NUMBER_EXTRA_QUESTIONS}`;
    } else {
        label = `${currentQuestion + 1} / ${goalNumberOfQuestions}`
    }

    return (
        <Container>
            <QuestionAssetsPopup
                open={showAssetsPopup}
                assets={questionsassets}
                currentIndex={currentAssetIndex}
                onClose={() => setShowAssetsPopup(false)}
                onPrev={() => setCurrentAssetIndex(i => Math.max(i - 1, 0))}
                onNext={() => setCurrentAssetIndex(i => Math.min(i + 1, questionsassets.length - 1))}
            />
            <QuestionAssetsPopup
                open={showGuidelinesPopup}
                assets={guidelines}
                currentIndex={0}
                onClose={() => setShowGuidelinesPopup(false)}
                onPrev={() => {}}
                onNext={() => {}}
            />
            <TeamQuestionContainer>
                <div style={{ width: '100%' }}>
                    <div style={{ display: 'flex' }}>

                        <QuestionsCounter>{`${label}`}</QuestionsCounter>
                        <div style={{ margin: '0 auto', display: 'flex', justifyContent: 'center' }}>
                            <div style={{ width: '145px' }}>
                                <CountdownStopwatch isChanged={currentQuestion} stopCounter={stopCounter} />
                            </div>
                            {teamCanAnswer && (
                                <Stopwatch onClick={() => {stopAnswer(); setStopCounter(true);}} src={`${import.meta.env.VITE_APP_ASSETS_URL}/image/stopwatch.png`} alt='stopwatch' />
                            )}
                        </div>
                        {/* Gallery Btn */}
                        {questionsassets && questionsassets.length > 0 && (
                            <GalleryBtn
                                onClick={() => {
                                    setCurrentAssetIndex(0);
                                    setShowAssetsPopup(true);
                                }}
                            >
                                Gallery
                            </GalleryBtn>
                        )}
                        {/* Guidelines Btn */}
                        {guidelines.length > 0 && (
                            <GalleryBtn
                                style={{ marginLeft: 8 }}
                                onClick={() => setShowGuidelinesPopup(true)}
                            >
                                GuideLines
                            </GalleryBtn>
                        )}
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
