<template>
  <div class="cmp-home">
    <v-btn outlined @click="serviceStep">Reservar horário</v-btn>
    <v-btn outlined>Meus agendamentos</v-btn>
  </div>
</template>

<script>
import "./Home.scss";
import { mapGetters, mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations({
      setActiveStep: "setActiveStep",
      setSchedulingInfo: "setSchedulingInfo",
    }),
    serviceStep() {
      this.setActiveStep(1);
      this.setSchedulingInfo({
        client: {
          id: this.user.id,
          name: this.user.name,
        },
      });
    },
  },
  computed: {
    ...mapGetters({
      user: "user",
    }),
  },
};
</script>
