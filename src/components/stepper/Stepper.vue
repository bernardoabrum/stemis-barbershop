<template>
  <div class="cmp-stepper">
    <div class="button-container">
      <button @click="goBack">Voltar</button>
    </div>
    <v-stepper alt-labels>
      <v-stepper-header>
        <v-stepper-step :class="{ active: activeStep === 0 }" step="1"
          >Serviço</v-stepper-step
        >
        <v-divider></v-divider>
        <v-stepper-step :class="{ active: activeStep === 1 }" step="2"
          >Barbeiro</v-stepper-step
        >
        <v-divider></v-divider>
        <v-stepper-step :class="{ active: activeStep === 2 }" step="3"
          >Data</v-stepper-step
        >
        <v-divider></v-divider>
        <v-stepper-step :class="{ active: activeStep === 3 }" step="4"
          >Resumo</v-stepper-step
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
    goBack() {
      if (this.activeStep === 0) {
        this.$router.push("/home");
      } else {
        this.setActiveStep(this.activeStep - 1);
      }
    },
  },
};
</script>
