import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 40px;
    ${props => props.isMini && `
        padding: 20px 40px;
        background: #fff;
        border-radius: 8px;
        box-shadow: 0 0 25px rgb(0 0 0 / 25%);
    `};

    @media only screen and (max-width: 1315px) {
        padding: 0px;
    }
`;

export const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const TeamsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 100px;
    ${props => props.isMini && `
        gap: 55px;
    `};
    @media only screen and (max-width: 1315px) {
        gap: 0px;
    }
`;


export const TeamContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    min-width: 410px;

    ${props => props.isRtL && `
        direction: rtl;
    `};

    ${props => props.isMini && `
        flex-direction: row;
        gap: 15px;
    `};

    @media only screen and (max-width: 1315px) {
        min-width: 200px;
    }
`;

export const NextLabel = styled.p`
    font-weight: bold;
    font-size: 28px;
    text-align: center;
    ${props => props.isMini && `
        font-size: 18px;
        margin: 10px;
    `};

    @media only screen and (max-width: 1315px) {
        font-size: 24px;
    }
`;

export const TeamLabelLogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    ${props => props.isRtL && `
        direction: rtl;
    `};

    ${props => props.isLTR && `
        direction: ltr;
    `};
    ${props => props.isMini && `
        flex-direction: row;
        gap: 15px;
    `};
`

export const TeamLabel = styled.p`
    font-weight: bold;
    font-size: 28px;
    text-align: center;
    ${props => props.isMini && `
        font-size: 18px;
        margin: 13px 0;
    `};

    @media only screen and (max-width: 1315px) {
        font-size: 18px;
    }
`;

export const TeamScore = styled(TeamLabel)`
    ${props => props.isMini && `
        font-size: 18px
    `};
`;

export const TeamLogo = styled.img`
    width: 120px;
    height: 120px;
    margin: auto;

    background: #fff;
    border-radius: 50%;
    border: 10px solid #fff;
    ${props => props.isMini && `
        width: 50px
        height: 50px;
    `};

    @media only screen and (max-width: 1315px) {
        width: 100px;
        height: 100px;
    }
`;

export const MatchDate = styled.p`
    font-weight: bold;
    font-size: 20px;
    text-align: center;

    @media only screen and (max-width: 1315px) {
        font-size: 16px;
    }
`;

export const extendRewardBtn = css`
    font-size: 16px;
    font-weight: 700;
    height: 40px;
    width: 40px;
    border-radius: 8px;
    background-color: lightgreen;
`;

export const extendPenatlyBtn = css`
    font-size: 16px;
    font-weight: 700;
    height: 40px;
    width: 40px;
    border-radius: 8px;
    background-color: red;
    color: #fff;
`;

export const RewardsPanelContainer = styled.div`
    display: flex;
    gap: 5px;
    justify-content: center;
    margin-top: 10px;
`;

///

export const ScoreBoardContainer = styled.div`
    position: relative;
    width: fit-content;
    z-index: 1;
    ${props => props.notStarted && `
        margin: 4% auto;
    `}
`;

export const ScoreBoardTemp = styled.img`
    width: 450px;

    @media only screen and (max-width: 1315px) {
        width: 350px;
    }
`;

export const MatchStatus = styled.p``;


// Logos
export const TeamsLogo = styled.img`
    width: 90px;
    height: 90px;
    position: absolute;
    top: 39px;

    @media only screen and (max-width: 1315px) {
        width: 65px;
        height: 65px;
        top: 34px;
    }
`;

export const Team1Logo = styled(TeamsLogo)`
    left: 26px;    

    @media only screen and (max-width: 1315px) {
        left: 23px; 
    }
`;

export const Team2Logo = styled(TeamsLogo)`
    right: 26px;
    @media only screen and (max-width: 1315px) {
        right: 23px; 
    }
`;

// Teams Names
export const TeamsNames = styled.p`
    margin: 0;
    font-weight: 900;
    color: #843891;
    position: absolute;
    top: 141px;
    width: 89px;
    text-align: center;
    font-size: 17px;

    @media only screen and (max-width: 1315px) {
        top: 107px;
        width: 93px;
    }
`;

export const Team1Name = styled(TeamsNames)`
    left: 78px;
    @media only screen and (max-width: 1315px) {
        left: 50px;
        font-size: 12px;
    }
`;

export const Team2Name = styled(TeamsNames)`
    right: 78px;
    @media only screen and (max-width: 1315px) {
        right: 50px;
        font-size: 12px;
    }
`;

export const MatchStatusLabel = styled.p`
    width: 60px;
    text-align: center;
    margin: 0;
    font-weight: 900;
    color: #843891;
    position: absolute;
    top: 141px;
    left: 50%;
    transform: translate(-50%, 0%);
    background-color: white;

    @media only screen and (max-width: 1315px) {
        top: 107px;
        font-size: 12px;
    }
`;

// Award
export const AwardAction = styled.div`
    width: 15px;
    height: 24px;
    position: absolute;
    bottom: 13px;
    cursor: pointer;
    @media only screen and (max-width: 1315px) {
        width: 13px;
        bottom: 13px;
    }
`;

export const Award1Action = styled(AwardAction)`
    left: 36px;

    @media only screen and (max-width: 1315px) {
        left: 27px;
    }
`;

export const Award2Action = styled(AwardAction)`
    right: 36px;

    @media only screen and (max-width: 1315px) {
        right: 27px;
    }
`;


// Penalty
export const PenaltyAction = styled.div`
    width: 15px;
    height: 24px;
    position: absolute;
    bottom: 3px;
    cursor: pointer;

    @media only screen and (max-width: 1315px) {
        width: 13px;
        bottom: 3px;
    }
`;

export const Penalty1Action = styled(PenaltyAction)`
    left: 54px;

    @media only screen and (max-width: 1315px) {
        left: 43px;
    }
`;

export const Penalty2Action = styled(PenaltyAction)`
    right: 54px;
    @media only screen and (max-width: 1315px) {
        right: 43px;
    }
`;

// Scores
export const ScoreContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: fit-content;
    min-width: 100px;
    position: absolute;
    top: 66px;
    
    left: 50%;
    transform: translate(-50%, 0%);

    @media only screen and (max-width: 1315px) {
        top: 55px;
    }
`;

export const ScoreItem = styled.p`
    font-weight: 900;
    color: #843891;
    max-width: 10px;
    margin: 0;
    font-size: 30px;

    @media only screen and (max-width: 1315px) {
        font-size: 18px;
    }
`;


export const DateTimeContainer = styled.div`
    left: 50%;
    transform: translate(-50%, 0%);
    top: 72px;
    position: absolute;
    width: 150px;

    @media only screen and (max-width: 1315px) {
        top: 45px;
        width: 150px;
    }
`;


export const DateTimeString = styled.p`
    margin: 0;
    font-weight: 900;
    color: #843891;
    text-align: center;

    @media only screen and (max-width: 1315px) {
        font-size: 12px;
    }
`;