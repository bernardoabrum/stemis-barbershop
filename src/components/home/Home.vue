<template>
  <div class="cmp-home">
    <v-btn outlined @click="serviceStep">Reservar horário</v-btn>
    <v-btn outlined>Meus agendamentos</v-btn>
  </div>
</template>

<script>
import "./Home.scss";
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations({
      setActiveStep: "setActiveStep",
    }),
    serviceStep() {
      this.setActiveStep(1);
    },
  },
};
</script>
