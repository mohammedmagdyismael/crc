import axios from 'axios';
import Cookies from 'js-cookie';
import { urls } from 'app/configs/urls';

export const moderatorMatchDetailsAPI = async () => {
    try {
        const response = await axios.get(urls.moderatormatch, {
            headers: {
                'token': Cookies.get('token'),
            }
        });
        return response?.data?.data;
    } catch (e) {
        console.log(e);
        return '';
    }
};

export const startMatchAPI = async () => {
    try {
        await axios.get(urls.startmatch,  {
            headers: {
                'token': Cookies.get('token'),
            }
        });
    } catch (e) {
        console.log(e);
        return '';
    }
};

export const nextQuestionAPI = async () => {
    try {
        await axios.get(urls.nextquestion, {
            headers: {
                'token': Cookies.get('token'),
            }
        });
    } catch (e) {
        console.log(e);
        return '';
    }
};

export const endMatchAPI = async () => {
    try {
        await axios.get(urls.endmatch, {
            headers: {
                'token': Cookies.get('token'),
            }
        });
    } catch (e) {
        console.log(e);
        return '';
    }
};

export const stopAnswerAPI = async () => {
    try {
        return await axios.get(urls.stopanswer, {
            headers: {
                'token': Cookies.get('token'),
            }
        })
    } catch (e) {
        console.log(e);
        return '';
    }
};

export const resetMatchAPI = async () => {
    try {
        return await axios.get(urls.resetmatch, {
            headers: {
                'token': Cookies.get('token'),
            }
        })
    } catch (e) {
        console.log(e);
        return '';
    }
};

export const rewardPlayerAPI = async teamId => {
    try {
        await axios.post(urls.reward, {
            teamId
        }, {
            headers: {
                'token': Cookies.get('token'),
            }
        });
    } catch (e) {
        console.log(e);
        return '';
    }
};

export const penaltyPlayerAPI = async teamId => {
    try {
        await axios.post(urls.penalty, {
            teamId
        }, {
            headers: {
                'token': Cookies.get('token'),
            }
        });
    } catch (e) {
        console.log(e);
        return '';
    }
};

export const questionDetailsAPI = async (matchId, questionId) => {
    try {
        const response = await axios.get(`${urls.questionanswers}?matchId=${matchId}&questionId=${questionId}`, {
            headers: {
                'token': Cookies.get('token'),
            }
        });
        return response?.data?.data;
    } catch (e) {
        console.log(e);
        return '';
    }
}