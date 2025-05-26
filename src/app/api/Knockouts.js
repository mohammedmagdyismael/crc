import axios from 'axios';
import { urls } from 'app/configs/urls';

const enableFetchingFromClone = import.meta.env.VITE_APP_END_TOURNAMENT_DATE === 'true';

export const allMatchesAPI = async () => {

  if (enableFetchingFromClone) {
    const [matchesResponse, teamsResponse] = await Promise.all([
          fetch('/dbcloned/2024/Matches.json'),
          fetch('/dbcloned/2024/Teams.json')
      ]);

      const matches = await matchesResponse.json();
      const teams = await teamsResponse.json();

      let formattedMatches = [];
      matches.forEach(match => {
        if (match?.match_type !== "First_round") {
          formattedMatches.push({
              matchId: match.id,
              team1: teams?.find(team => team.id === match.team1_id)?.name || 'Unknown Team',
              team1abbrev: teams?.find(team => team.id === match.team1_id)?.abbrev || 'Unknown',
              team1Logo: teams?.find(team => team.id === match.team1_id)?.logo || 'default.png',
              team2: teams?.find(team => team.id === match.team2_id)?.name || 'Unknown Team',
              team2abbrev: teams?.find(team => team.id === match.team2_id)?.abbrev || 'Unknown',
              team2Logo: teams?.find(team => team.id === match.team2_id)?.logo || 'default.png',
              team1Score: match.score_team1,
              team2Score: match.score_team2,
              match_type: match.match_type,
              date: match.date_time.toLocaleString('en-EG', {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              }),
              matchStatus: match.match_status
          });
        };
      });
      formattedMatches = formattedMatches.sort((a, b) => new Date(a.date) - new Date(b.date));
      
      const output = {
          status: 200,
          data: {
            "Second_round": [],
            "Third_round": [],
            "Final_round": [],
          },
      };

      formattedMatches.forEach(match => {
        if (match?.match_type === "Second_round") {
          output.data.Second_round.push(match);
        } else if (match?.match_type === "Third_round") {
          output.data.Third_round.push(match);
        } else if (match?.match_type === "Final_round") {
          output.data.Final_round.push(match);
        };
      });

      return output.data;
  } else {
    try {
        const response = await axios.get(urls.knockouts);
        const responseMapped = {};

          if (response?.data?.data) {
            for (const [key] of Object.entries(response?.data?.data)) {
                responseMapped[key] = response?.data?.data[key].map(match => {
                    let localTimeString = match?.date_time.replace('Z', '');
                    let localDate = new Date(localTimeString);
                    return ({
                    team1: match.team1_name,
                    team2: match.team2_name,
                    team1abbrev: match.team1_abbrev,
                    team2abbrev: match.team2_abbrev,
                    date: localDate.toLocaleString('en-EG', {
                      weekday: 'long',
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    }),
                    team1Score: match.score_team1,
                    team2Score: match.score_team2,
                    matchStatus: match.match_status,
                    matchId: match.match_id,
                    team1Logo: match.team1_logo,
                    team2Logo: match.team2_logo,
                  })});
            }
          }

        return responseMapped;
    } catch (e) {
        console.log(e);
        return '';
    }
  }    
};

export const matchDetailsAPI = async matchId => {
  if (enableFetchingFromClone) {
        const [macthScoresResponse, teamsResponse] = await Promise.all([
            fetch(`/dbcloned/2024/MatchScore.json`),
            fetch('/dbcloned/2024/Teams.json')
        ]);
        const teams = await teamsResponse.json();
        const macthScores = await macthScoresResponse.json();

        const matchScoresByMatchId = [];
        macthScores?.forEach(match => {
            if (match.matchId === matchId)
                matchScoresByMatchId.push(
                    {
                        "id": match.id,
                        "questionId": match.questionId,
                        "matchId": match.matchId,
                        "score_team1": match.score_team1,
                        "score_team2": match.score_team2,
                        "team1_name": teams?.find(team => team.id === match.team1_id)?.name,
                        "team1_abbrev": teams?.find(team => team.id === match.team1_id)?.abbrev,
                        "team1_logo": teams?.find(team => team.id === match.team1_id)?.logo,
                        "team2_name": teams?.find(team => team.id === match.team2_id)?.name,
                        "team2_abbrev": teams?.find(team => team.id === match.team2_id)?.abbrev,
                        "team2_logo": teams?.find(team => team.id === match.team2_id)?.logo,
                    });
        });

        return matchScoresByMatchId;
    } else {
      try {
        const response = await axios.get(`${urls.knockoutsMatchdetails}?matchid=${matchId}`);
        return response?.data?.data;
      } catch (e) {
          console.log(e);
          return '';
      }
    }
    
}