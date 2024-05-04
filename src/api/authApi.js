import API from '../config/api';
import { api } from '../config/index';


const authApi = {
    userLogin(userData = {}) {
        return API.post(api.login, userData)
            .then(response => {
                console.log('User Login', response);
                return response;
            })
            .catch(error => {
                console.error('Error logging in:', error);
                throw error;
            });
    }
};
export default authApi;
