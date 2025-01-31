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
import { mapMutations } from "vuex";
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
    ...mapMutations({
      setSchedulingInfo: "setSchedulingInfo",
    }),

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
          this.$router.push("/scheduling");
          this.setSchedulingInfo({ client: {
            id: user.id,
            name: user.name,
          } });
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
