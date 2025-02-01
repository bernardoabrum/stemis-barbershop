<template>
  <div class="cmp-stepper">
    <v-stepper alt-labels>
      <v-stepper-header>
        <v-stepper-step :class="{ active: activeStep === 0 }" step="1"
          >Passo 1</v-stepper-step
        >
        <v-divider></v-divider>
        <v-stepper-step :class="{ active: activeStep === 1 }" step="2"
          >Passo 2</v-stepper-step
        >
        <v-divider></v-divider>
        <v-stepper-step :class="{ active: activeStep === 2 }" step="3"
          >Passo 3</v-stepper-step
        >
        <v-divider></v-divider>
        <v-stepper-step :class="{ active: activeStep === 3 }" step="4"
          >Passo 3</v-stepper-step
        >
      </v-stepper-header>
    </v-stepper>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import "./Stepper.scss";

export default {
  computed: {
    ...mapGetters({
      activeStep: "activeStep",
    }),
  },
  methods: {
    ...mapMutations({
      setActiveStep: "setActiveStep",
    }),
  },
};
</script>
