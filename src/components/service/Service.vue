<template>
  <div class="cmp-service">
    <h1>Escolha o serviço:</h1>
    <div class="service-container">
      <div
        @click="setSelectedService(service)"
        class="card-service"
        v-for="service in services"
        :key="service.id"
      >
        <img src="../../assets/corte.webp" />
        <p class="title">{{ service.name }}</p>
        <p class="price">{{ service.price.toFixed(2) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import "./Service.scss";
import axios from "axios";

export default {
  data() {
    return {
      services: [],
    };
  },
  mounted() {
    this.getServices();
  },
  methods: {
    ...mapMutations({
      setSchedulingInfo: "setSchedulingInfo",
      setActiveStep: "setActiveStep",
    }),
    async getServices() {
      try {
        const response = await axios.get("http://localhost:3000/services");
        this.services = response.data;
      } catch (error) {
        console.error("Erro ao buscar serviços");
      }
    },

    setSelectedService(service) {
      this.setSchedulingInfo({ service });
      this.setActiveStep(2);
    },
  },
};
</script>
