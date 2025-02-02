<template>
  <div class="cmp-login">
    <div class="form">
      <p>Caso você já possua uma conta...</p>
      <v-text-field outlined v-model="email" placeholder="Email" type="email" />
      <v-text-field
        outlined
        v-model="password"
        placeholder="Senha"
        type="password"
      />
      <v-btn outlined @click="loginUser">Entrar</v-btn>
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
          this.$store.commit("setUser", user);
          this.$router.push("/home");
        } else {
          alert("Usuário não encontrado!");
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
