<template>
    <div class="login">
        <div class="login-form">
            <div class="login-header">
                <h1>Login</h1>
            </div>
            <div class="login-email">
                <FloatLabel>
                    <InputText id="email" v-model="email" />
                    <label for="email">Email</label>
                </FloatLabel>
            </div>
            <div class="login-password">
                <FloatLabel>
                    <Password v-model="password" inputId="password" />
                    <label for="password">Password</label>
                </FloatLabel>
            </div>
            <div class="login-signin">
                <Button label="Sign In" @click="test()" />
            </div>
        </div>
    </div>
</template>


<script src="./login.js"></script>
<style lang="scss" scoped>
.login {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    overflow-y: hidden;
    background-color: #74EBD5;
    background-image: linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%);
}

.login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
}

.login-header {
    text-align: center;
}
</style>
