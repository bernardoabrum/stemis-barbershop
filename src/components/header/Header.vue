<template>
  <div class="cmp-header">
    <p v-if="authenticated">Entrou como: {{ user.name }}</p>
    <p v-else>Bem vindo a Stemis Barbearia!</p>
    <v-btn outlined v-if="authenticated" @click="handleLogout">Sair</v-btn>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import "./Header.scss";

export default {
  computed: {
    ...mapGetters({
      authenticated: "isAuthenticated",
      user: "user",
    }),
  },
  methods: {
    ...mapMutations({
      logout: "logout",
      clearSchedulingInfo: "clearSchedulingInfo",
      setActiveStep: "setActiveStep",
    }),
    handleLogout() {
      this.logout();
      this.clearSchedulingInfo();
      this.setActiveStep(0);
      this.$router.push("/authenticate");
    },
  },
};
</script>
