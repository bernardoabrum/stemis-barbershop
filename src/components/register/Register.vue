<template>
  <div class="cmp-register">
    <p>Register</p>
    <div class="form">
      <input v-model="name" placeholder="Nome" />
      <input v-model="email" placeholder="Email" />
      <input v-model="password" placeholder="Senha" type="password" />
      <button @click="registerUser">Registrar</button>
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
      }
    },
  },
};
</script>
