import styled from "styled-components";

export const MatchScoreLabel = styled.div``;

export const LoadingStatusContainer = styled.div`
    height: 100vh;
    display: flex;
    width: 100%;
    justify-content: center;
`;

export const StatusMsg = styled.p`
    display: flex;
    height: fit-content;
    margin: auto;
    font-size: 24px;
    font-weight: 500;
`;

export const LabelContainer = styled.div`
    margin-bottom: 1.5rem;
`;

export const Label = styled.p`
    font-size: 26px;
    text-align: center;
    color: #333;
    font-weight: 700;
`;

export const QContainer = styled.div`
    margin-bottom: 3px;
`;

export const Qlabel = styled.p`
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    margin: 15px 0px 0 0;
`;

export const ScoreContainer = styled.div`
    display : flex;
    justify-content: center;
    gap: 60px;
`;

export const TeamScoreContainer = styled.div`
    display: flex;
    gap: 15px;
`;

export const TeamLabel = styled.p`
    font-size: 18px;
    font-weight: bold;
`;

export const ScoreLabel = styled.p`
    font-size: 18px;
    font-weight: bold;
`;

export const ScoresContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;

    @media only screen and (max-width: 1315px) {
        display: flex;
        flex-direction: column;
    }
`;

export const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 1315px) {
        max-width: unset;
        width: 100%;
        max-height: unset;
        height: 95vh;
        flex-direction: column;
        gap: 30px;
    }
`;

export const MatchScoreBoardContainer = styled.div`
    display: flex;
    justify-content: center;
`;