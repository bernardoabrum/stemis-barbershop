<template>
  <div class="cmp-menu">
    <v-btn outlined @click="serviceStep">Reservar horário</v-btn>
    <v-btn outlined @click="mySchedulings">Meus agendamentos</v-btn>
  </div>
</template>

<script>
import "./Menu.scss";
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters({
      user: "user",
    }),
  },
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
    mySchedulings() {
      this.$router.push("/my-schedulings");
    },
  },
};
</script>
