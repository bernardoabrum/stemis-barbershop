<template>
  <div class="cmp-register">
    <div class="form">
      <p>Ou então, crie uma agora!</p>
      <v-text-field outlined v-model="name" placeholder="Nome" />
      <v-text-field outlined v-model="email" placeholder="Email" />
      <v-text-field
        outlined
        v-model="password"
        placeholder="Senha"
        type="password"
      />
      <v-btn outlined @click="registerUser">Registrar</v-btn>
    </div>
  </div>
</template>

<script>
import "./Register.scss";
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async registerUser() {
      if (!this.name || !this.email || !this.password) {
        alert("Preencha todos os campos!");
        return;
      }

      try {
        const response = await axios.get("http://localhost:3000/users");
        const existingUser = response.data.find(
          (user) => user.email === this.email
        );

        if (existingUser) {
          alert("E-mail já cadastrado!");
          return;
        }

        const newUser = {
          name: this.name,
          email: this.email,
          password: this.password,
        };

        await axios.post("http://localhost:3000/users", newUser);
        alert("Usuário registrado com sucesso!");

        this.name = "";
        this.email = "";
        this.password = "";
      } catch (error) {
        console.error(error);
        alert('Erro na API')
      }
    },
  },
};
</script>
