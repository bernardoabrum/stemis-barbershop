<template>
  <div class="cmp-menu">
    <div v-if="!isBarber" class="user-menu">
      <v-btn outlined @click="scheduling">Reservar horário</v-btn>
      <v-btn outlined @click="userchedulings">Meus agendamentos</v-btn>
    </div>
    <div v-else class="barber-menu">
      <v-btn outlined @click="barberSchedulings">Ver Meus agendamentos</v-btn>
      <v-btn outlined @click="servicesList">Meu serviços</v-btn>
    </div>
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

    isBarber() {
      return this.user.isBarber;
    },
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
    userchedulings() {
      this.$router.push("/user-schedulings");
    },
    barberSchedulings() {
      this.$router.push("/barber-schedulings");
    },
    servicesList() {
      this.$router.push("/services-list");
    },
  },
};
</script>
