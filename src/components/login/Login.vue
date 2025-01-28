<template>
  <div class="cmp-login">
    <p>Login</p>
    <div class="form">
      <input v-model="email" placeholder="Email" type="email" />
      <input v-model="password" placeholder="Senha" type="password" />
      <button @click="loginUser">Entrar</button>
    </div>
  </div>
</template>

<script>
import "./Login.scss";
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async loginUser() {
      if (!this.email || !this.password) {
        alert("Preencha todos os campos!");
        return;
      }

      try {
        const response = await axios.get("http://localhost:3000/users", {
          params: { email: this.email },
        });
        const user = response.data.find(
          (user) => user.email === this.email && user.password === this.password
        );

        if (user) {
          this.$router.push("/home");
          console.log("Entrou com sucesso!");
        } else {
          console.log("Usuário não encontrado!");
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
