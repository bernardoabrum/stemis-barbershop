<template>
  <div class="cmp-resume">
    <div class="resume-container" v-if="schedulingInfo">
      <p>Cliente: {{ schedulingInfo.client.name }}</p>
      <p>Barbeiro: {{ schedulingInfo.barber.name }}</p>
      <p>Data: {{ formatDate(schedulingInfo.date) }}</p>
      <p>Horário: {{ schedulingInfo.time }}</p>
      <p>Serviço: {{ schedulingInfo.service.name }}</p>
      <p>Preço: R${{ schedulingInfo.service.price.toFixed(2) }}</p>
    </div>
    <v-btn outlined @click="sendScheduling">Confirmar agendamento</v-btn>
  </div>
</template>

<script>
import "./Resume.scss";
import axios from "axios";
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters({
      schedulingInfo: "schedulingInfo",
    }),
  },
  methods: {
    ...mapMutations({
      setActiveStep: "setActiveStep",
      clearSchedulingInfo: "clearSchedulingInfo",
    }),
    formatDate(date) {
      if (!date) return "";
      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    },
    async sendScheduling() {
      try {
        await axios.post(
          "http://localhost:3000/schedulings",
          this.schedulingInfo
        );
        alert("Agendado com sucesso!");
        this.clearSchedulingInfo();
        this.setActiveStep(0);
        this.$router.push("/home");
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
