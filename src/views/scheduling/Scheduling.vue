<template>
  <div class="scheduling-page">
    <div class="stepper-container">
      <Stepper :activeStep="activeStep" />
    </div>
    <div v-if="!activeStep" class="button-container">
      <v-btn outlined @click="serviceStep">Reservar horário</v-btn>
      <v-btn outlined>Meus agendamentos</v-btn>
    </div>
    <div class="service-container">
      <Service v-if="activeStep === 1" />
    </div>
  </div>
</template>

<script>
import "./Scheduling.scss";
import Stepper from "@/components/stepper/Stepper.vue";
import Service from "@/components/service/Service.vue";

export default {
  data() {
    return {
      activeStep: 0,
    };
  },
  components: {
    Stepper,
    Service,
  },
  methods: {
    serviceStep() {
      this.activeStep = 1
    },
  },
};
</script>
