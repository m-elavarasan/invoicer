import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import 'primevue/resources/themes/aura-light-green/theme.css';
import './style.css'
import App from './App.vue';
import router from './router';
import pinia from '@/stores/init';
const app = createApp(App);
app.use(pinia);
app.use(PrimeVue);
app.use(ToastService);
app.use(router);
app.mount('#app');
