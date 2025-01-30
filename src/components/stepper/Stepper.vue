<template>
  <div class="cmp-stepper">
    <v-stepper v-if="activeStep" alt-labels>
      <v-stepper-header>
        <v-stepper-step step="1">Passo 1</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="2">Passo 2</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3">Passo 3</v-stepper-step>
      </v-stepper-header>
    </v-stepper>
  </div>
</template>

<script>
import "./Stepper.scss";

export default {
  props: {
    activeStep: {
      type: Number,
    },
  },
  watch: {
    activeStep(value) {
      console.log("Active step:", value)
    }
  },
};
</script>
