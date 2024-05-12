import { defineStore } from 'pinia'
import authApi from '../api/authApi'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: false,
    token: ''
  }),
  actions: {
    async loginUser(email, password) {
      await authApi.userLogin(email, password)
        .then(res => {
          this.isLoggedIn = true
          sessionStorage.setItem('authToken', res.token)
          this.token = res.token
        })
        .catch(error => {
          console.error('Error logging in:', error)
          throw error
        })
    },
    logout() {
      this.isLoggedIn = false
      sessionStorage.removeItem('authToken')
      this.token = ''
    },
    checkSessionStorage() {
      const localToken = sessionStorage.getItem('authToken')
      if (localToken) {
        this.isLoggedIn = true
        this.token = localToken
      }
    },
  }
})
