<template>
  <div class="cmp-header">
    <span v-if="authenticated">Bem vindo {{ userInfo.name }}!</span>
    <span v-else>Não autenticado</span>
    <button v-if="authenticated" @click="handleLogout">Sair</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import "./Header.scss"

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
      setActiveStep: "setActiveStep"
    }),
    handleLogout() {
      this.logoutUser();
      this.clearSchedulingInfo()
      this.setActiveStep(0)
      this.$router.push("/authenticate");
    },
  },
};
</script>
