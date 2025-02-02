<template>
  <div class="services-list-page">
    <div class="button-container">
      <button @click="goBack">Voltar</button>
    </div>
    <div class="add-service">
      <v-text-field v-model="name" outlined placeholder="Nome" />
      <v-text-field
        v-model="price"
        v-mask="'####'"
        outlined
        placeholder="Preço"
      />
      <v-text-field
        v-model="duration"
        v-mask="'##:##'"
        outlined
        placeholder="Duração"
      />
      <v-btn @click="addService" class="button" outlined
        >Adicionar serviço</v-btn
      >
    </div>
    <div class="services-container">
      <div class="card" v-for="service in services" :key="service.id">
        <div>
          <p class="name">{{ service.name }}</p>
          <p>R${{ service.price.toFixed(2) }}</p>
          <p>Duração: {{ service.duration }}</p>
        </div>
        <button @click="removeCard(service.id)">Remover</button>
      </div>
    </div>
  </div>
</template>

<script>
import "./ServicesList.scss";
import axios from "axios";

export default {
  data() {
    return {
      services: [],
      name: "",
      price: "",
      duration: "",
    };
  },
  mounted() {
    this.getServices();
  },
  methods: {
    async getServices() {
      const response = await axios.get("http://localhost:3000/services");
      this.services = response.data;
    },
    async removeCard(card) {
      try {
        await axios.delete(`http://localhost:3000/services/${card}`);

        this.services = this.services.filter((service) => service.id !== card);
      } catch (error) {
        console.error(error);
      }
    },
    async addService() {
      if (!this.name || !this.price || !this.duration) {
        alert("Preencha todos os campos!");
      } else {
        try {
          const service = {
            name: this.name,
            price: Number(this.price),
            duration: this.duration,
          };

          await axios.post("http://localhost:3000/services", service);
          alert("Serviço adicionado!");

          this.name = "";
          this.price = "";
          this.duration = "";

          this.getServices();
        } catch (error) {
          console.error("Erro ao adicionar serviço:", error);
        }
      }
    },
    goBack() {
      this.$router.push("/home");
    },
  },
};
</script>
