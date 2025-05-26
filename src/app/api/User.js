import axios from 'axios';
import Cookies from 'js-cookie';
import { urls } from 'app/configs/urls';

export const loginAPI = async (username, password) => {
    try {
        const response =  await axios.post(urls.login, {
            username,
            password,
        });
        if (response.data.status === 200) {
            const { token, role } = response.data.data;
            Cookies.set('token', token);
            Cookies.set('username', username);
            Cookies.set('role', role);
        }
        return response?.data;
    } catch (e) {
        console.log(e);
        return ''
    }
}

export const userInfoAPI = async () =>{
    try {
        if (Cookies.get('token')) {
            const response = await axios.get(urls.userInfo, {
                headers: {
                    'token': Cookies.get('token'),
                }
            });
            return response?.data;
        } else {
            return '';
        }
    } catch (e) {
        console.log(e)
        return '';
    }
    
}