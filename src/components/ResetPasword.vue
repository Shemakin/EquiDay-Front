<template>
  <div class="reset-password">
    <div class="form-box">
      <h1>Восстановить пароль</h1>
      <form @submit.prevent="handlePasswordReset">
        <div class="input-group">
          <label for="email">Email:</label>
          <input
              type="email"
              id="email"
              v-model="email"
              placeholder="Enter your email"
              required
          />
        </div>
        <button type="submit" class="btn-primary">Send Reset Link</button>
        <p v-if="message" class="message">{{ message }}</p>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ResetPasswordPage",
  data() {
    return {
      email: "",
      message: "",
      errorMessage: "",
    };
  },
  methods: {
    async handlePasswordReset() {
      try {
        const response = await axios.post("http://localhost:3000/api/reset-password", {
          email: this.email,
        });
        this.message = response.data.message || "Password reset link sent!";
        this.errorMessage = ""; // Очистить сообщение об ошибке
      } catch (error) {
        this.errorMessage = error.response?.data?.message || "Failed to send reset link.";
        this.message = ""; // Очистить успешное сообщение
      }
    },
  },
};
</script>

<style scoped>
.reset-password {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  padding: 40px;
  background-image: url("@/assets/Fon.png");
  background-size: cover;
  background-position: center;
}

.form-box {
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  padding: 20px;
  border: none;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.9); /* Светлый фон с прозрачностью */
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
  color: #885e44;
}

.input-group {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  width: 100%;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
}

input {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
}

.btn-primary {
  background-color: #885e44;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
}

.btn-primary:hover {
  background-color: #693b26;
}

.message {
  color: green;
  margin-top: 15px;
  text-align: center;
}

.error {
  color: red;
  margin-top: 15px;
  text-align: center;
}

/* Адаптивность для мобильных устройств */
@media (max-width: 768px) {
  h1 {
    font-size: 20px;
  }
  input {
    font-size: 14px;
    padding: 8px;
  }
  .btn-primary {
    font-size: 14px;
    padding: 8px 16px;
  }
}
</style>
