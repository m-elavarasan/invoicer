import FloatLabel from "primevue/floatlabel";
import InputGroup from "primevue/inputgroup";
import Toast from 'primevue/toast';
import { useAuthStore } from '../../stores/authStore';
import { mapActions } from 'pinia';
import Login from "./Login.vue";

export default {
  name: "login",
  components: {
    FloatLabel,
    InputGroup,
    Toast
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(useAuthStore, ['loginUser']),
    onLogin() {
      this.loginUser({ email: this.email, password: this.password })
        .then(() => {
          this.$toast.add({ severity: 'success', summary: 'success', detail: 'Login Successfull', life: 3000 });
          console.log('Login Success:', Login);
        })
        .catch(error => {
          console.error('Login failed:', error);
        });
    }
  },
};
