<template>
  <div class="home-page">
    <Stepper v-if="activeStep" />
    <Menu v-if="!activeStep" />
    <Service v-if="activeStep === 1" />
    <Barber v-if="activeStep === 2" />
    <Datetime v-if="activeStep === 3" />
    <Resume v-if="activeStep === 4" />
  </div>
</template>

<script>
import "./Home.scss";
import { mapGetters } from "vuex";
import Stepper from "@/components/stepper/Stepper.vue";
import Menu from "@/components/menu/Menu.vue";
import Service from "@/components/service/Service.vue";
import Barber from "@/components/barber/Barber.vue";
import Datetime from "@/components/datetime/Datetime.vue";
import Resume from "@/components/resume/Resume.vue";

export default {
  computed: {
    ...mapGetters({
      activeStep: "activeStep",
    }),
  },
  components: {
    Stepper,
    Menu,
    Service,
    Barber,
    Datetime,
    Resume,
  },
};
</script>
