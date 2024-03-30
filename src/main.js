import 'primevue/resources/themes/aura-light-green/theme.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
const app = createApp(App);

app.use(createPinia());
app.use(PrimeVue);
app.use(ToastService);
app.use(router);
app.mount('#app');
