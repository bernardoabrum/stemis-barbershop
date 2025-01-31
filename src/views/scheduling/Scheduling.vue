<template>
  <div class="scheduling-page">
    <Stepper v-if="activeStep" />
    <Home v-if="!activeStep" />
    <Service v-if="activeStep === 1" />
    <Barber v-if="activeStep === 2" />
    <Datetime v-if="activeStep === 3" />
  </div>
</template>

<script>
import "./Scheduling.scss";
import { mapGetters } from "vuex";
import Stepper from "@/components/stepper/Stepper.vue";
import Home from "@/components/home/Home.vue";
import Service from "@/components/service/Service.vue";
import Barber from "@/components/barber/Barber.vue";
import Datetime from "@/components/datetime/Datetime.vue";

export default {
  computed: {
    ...mapGetters({
      activeStep: "activeStep",
    }),
  },
  components: {
    Stepper,
    Home,
    Service,
    Barber,
    Datetime,
  },
};
</script>
