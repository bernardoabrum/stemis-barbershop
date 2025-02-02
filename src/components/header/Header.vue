<template>
  <div class="cmp-header">
    <p v-if="authenticated">Entrou como: {{ userInfo.name }}</p>
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
      userInfo: "user",
    }),
  },
  methods: {
    ...mapMutations({
      logoutUser: "logout",
      clearSchedulingInfo: "clearSchedulingInfo",
      setActiveStep: "setActiveStep",
    }),
    handleLogout() {
      this.logoutUser();
      this.clearSchedulingInfo();
      this.setActiveStep(0);
      this.$router.push("/authenticate");
    },
  },
};
</script>
