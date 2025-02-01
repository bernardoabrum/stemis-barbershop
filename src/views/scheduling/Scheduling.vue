<template>
  <div class="scheduling-page">
    <Stepper />
    <Service v-if="activeStep === 0" />
    <Barber v-if="activeStep === 1" />
    <Datetime v-if="activeStep === 2" />
    <Resume v-if="activeStep === 3" />
  </div>
</template>

<script>
import "./Scheduling.scss";
import { mapGetters } from "vuex";
import Stepper from "@/components/stepper/Stepper.vue";
import Service from "@/components/service/Service.vue";
import Barber from "@/components/barber/Barber.vue";
import Datetime from "@/components/datetime/Datetime.vue";
import Resume from "@/components/resume/Resume.vue";

export default {
  components: {
    Stepper,
    Service,
    Barber,
    Datetime,
    Resume,
  },
  computed: {
    ...mapGetters({
      activeStep: "activeStep",
    }),
  },
};
</script>
