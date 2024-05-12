import API from '../config/api';
import httpApi from '@/utils/http-api'
import { api } from '@/config'

export default {
    userLogin: (data = {}) => {
      return httpApi.postDataViaApi({
        url: api.authApi,
        body: data
      })
    },
}