<template>
  <div class="login-container">
    <div class="login-form p-shadow-8">
      <h2>Welcome Back!</h2>
      <p>Login to your account</p>
      <div class="form-group">
        <InputText class="form-group-email" v-model="email" placeholder="Email" required :style="{ width: '100%' }" />
      </div>
      <div class="form-group">
        <Password class="form-group-password" :style="{ width: '100%' }" :toggleMask="true" v-model="password"
          placeholder="Password" :feedback="false" required />
      </div>
      <Button type="button" @click="onLogin">Login</Button>
      <p class="forgot-password">Forgot your password?</p>
    </div>
  </div>
</template>
<script src="./login.js"></script>

<style scoped>
.login-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-height: 100vh;
  background-image: url('../../assets/login.jpg');
  background-size: cover;
}

.login-form {
  background-color: var(--blue-50);
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 40px;
  width: 80%;
  max-width: 400px;
  text-align: center;
  margin-right: 64px;
}

.login-form h2 {
  margin-bottom: 20px;
}

.login-form p {
  margin-bottom: 30px;
}

.form-group {
  width: 100%;
  margin-bottom: 20px;

  &-email [input],
  &-password {
    width: 100%;
  }
}

.forgot-password {
  color: var(--blue-400);
  cursor: pointer;
  margin-bottom: 20px;
}

@media screen and (max-width: 768px),
(max-width: 480px) {
  .login-container {
    justify-content: center;
  }

  .login-form {
    background-color: rgba(255, 255, 255, 0.815);
    width: 90%;
    margin-right: 0;
  }
}
</style>