import FloatLabel from "primevue/floatlabel"
import InputGroup from "primevue/inputgroup"
import Toast from 'primevue/toast'
import Input from 'primevue/inputtext'
import Password from 'primevue/password'
import Button from 'primevue/button'

import { useAuthStore } from '../../stores/authStore'
import { mapActions } from 'pinia'


export default {
  name: "login",
  components: {
    FloatLabel,
    InputGroup,
    Input,
    Password,
    Button,
    Toast
  },
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    ...mapActions(useAuthStore, ['loginUser']),
    onLogin() {
      const payLoad = {
        email: this.email,
        password: this.password
      }
      this.loginUser({
        data: payLoad,
        success: (res) => {
          this.$toast.add({ severity: 'success', summary: 'success', detail: 'Login Successfull', life: 3000 })
          this.$router.push({ name: 'home' })
        },
        fail: (res) => {
          this.email = ""
          this.password = "",
            this.$toast.add({ severity: 'error', summary: 'Login Fail', detail: res.message, life: 3000 });
        }
      })
    }
  }
}
