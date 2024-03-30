import { defineStore } from 'pinia';
import authApi from '../api/authApi';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    isLoggedIn: false,
    token: '',
  }),
  actions: {
    async loginUser(email, password) {
      const response = await authApi.userLogin(email, password)
        .catch(error => {
          console.error('Error logging in:', error);
          throw error;
        });
      this.isLoggedIn = true;
      this.token = response.token;
    },
    logout() {
      this.isLoggedIn = false;
      this.token = '';
    },
  },
});