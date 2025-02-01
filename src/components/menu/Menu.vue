<template>
  <div class="cmp-menu">
    <v-btn outlined @click="scheduling">Reservar horário</v-btn>
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
      setSchedulingInfo: "setSchedulingInfo",
      setActiveStep: "setActiveStep",
    }),
    scheduling() {
      this.$router.push("/scheduling");
      this.setActiveStep(0);
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
