<template>
  <div class="scheduling-page">
    <div class="stepper-container">
      <Stepper v-if="activeStep" />
    </div>
    <div v-if="!activeStep" class="button-container">
      <v-btn outlined @click="serviceStep">Reservar horário</v-btn>
      <v-btn outlined>Meus agendamentos</v-btn>
    </div>
    <div>
      <Service v-if="activeStep === 1" />
    </div>
    <div>
      <Barber v-if="activeStep === 2" />
    </div>
  </div>
</template>

<script>
import "./Scheduling.scss";
import { mapGetters, mapMutations } from "vuex";
import Stepper from "@/components/stepper/Stepper.vue";
import Service from "@/components/service/Service.vue";
import Barber from "@/components/barber/Barber.vue";

export default {
  computed: {
    ...mapGetters({
      activeStep: "activeStep",
    }),
  },
  components: {
    Stepper,
    Service,
    Barber,
  },
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
