// Standings.style.js
import styled from 'styled-components';

export const StandingsContainer = styled.div`
  
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;

  align-items: center;
  padding: 2rem;

  @media only screen and (max-width: 1315px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px 5px;
  }
`;

export const MatchCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 80%;
`;

export const TeamName = styled.p`
  font-weight: bold;
  color: #333;
  margin: 0;
`;

export const MatchDate = styled.div`
  margin-top: 0.5rem;
  color: #777;
  text-align: center;
`;

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

export const Deatils = styled.div`
  cursor: pointer;
  color: blue;
  text-decoration: underline;
  line-height: 18px;
`;

export const SectionTitle = styled.p`
  font-size: 28px;
  font-weight: bold;
  background: #EDAA20;
  border-radius: 8px;
  padding: 2rem;
  color: #ffff;

  width: 83%;
  margin: auto;


  @media only screen and (max-width: 1315px) {
    padding: 20px 5px;
    width: 81%;
    margin: auto;
  }
`;

export const EmptyStateContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const EmptyStateMessage = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;