import { defineStore } from 'pinia'
import authApi from '@/api/authApi'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: false,
    token: ''
  }),
  actions: {
      loginUser({ data, success, fail } = {}) {
        authApi.userLogin(data).then(res => {
          success && success(res?.body)
          if(res.body){
          this.isLoggedIn = true
          sessionStorage.setItem('authToken', res.body.token)
          this.token = res.body.token
          }
        }, res => {
          fail && fail(res)
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
