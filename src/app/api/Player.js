import axios from 'axios';
import Cookies from 'js-cookie';
import { urls } from 'app/configs/urls';

export const playerMatchDetails = async () => {
    try {
        const response = await axios.get(urls.playermatch, {
            headers: {
                'token': Cookies.get('token'),
            }
        });
        
        return response.data.data?.[0];
    } catch (e) {
        console.log(e);
        return '';
    }
};

export const answerAPI = async (answer, answerId) => {
    try {
        await axios.post(urls.answer, {
            answer,
            answerId,
        },{
            headers: {
                'token': Cookies.get('token'),
            }
        });
    } catch (e) {
        console.log(e);
        return '';
    }
};

export const matchScoresAPI = async () => {
    try {
        const response = await axios.get(urls.matchscores, {
            headers: {
                'token': Cookies.get('token')
            }
        });
        return response?.data?.data;
    } catch (e) {
        console.log(e);
        return '';
    }
};