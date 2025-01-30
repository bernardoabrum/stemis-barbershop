<template>
  <div class="scheduling-page">
    <div>
      <Stepper v-if="activeStep" />
    </div>
    <div>
      <Home v-if="!activeStep" />
    </div>
    <div>
      <Service v-if="activeStep === 1" />
    </div>
    <div>
      <Barber v-if="activeStep === 2" />
    </div>
    <div>
      <Datetime v-if="activeStep === 3" />
    </div>
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
