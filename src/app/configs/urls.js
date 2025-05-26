const baseURL = import.meta.env.VITE_APP_ONCO_API_URL;

export const urls = {
    login: `${baseURL}/users/login`,
    userInfo: `${baseURL}/users/userInfo`,
    allmatches: `${baseURL}/standings/all-matches`,
    matchdetails: `${baseURL}/standings/matchdetails`,
    groups: `${baseURL}/groups`,
    playermatch: `${baseURL}/match/playermatch`,
    answer: `${baseURL}/match/answer`,
    matchscores: `${baseURL}/match/matchscores`,
    questionanswers: `${baseURL}/match/questionanswers`,

    moderatormatch: `${baseURL}/match/moderatormatch`,
    startmatch: `${baseURL}/match/startmatch`,
    nextquestion: `${baseURL}/match/nextquestion`,
    endmatch: `${baseURL}/match/endmatch`,
    stopanswer: `${baseURL}/match/stopanswer`,
    resetmatch: `${baseURL}/match/resetmatch`,

    reward: `${baseURL}/match/reward`,
    penalty: `${baseURL}/match/penalty`,

    knockouts: `${baseURL}/knockouts`,
    knockoutsMatchdetails: `${baseURL}/knockouts/matchdetails`,
};