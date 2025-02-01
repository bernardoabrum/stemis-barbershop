<template>
  <div class="barber-schedulings-page">
    <h1>Meus agendamentos</h1>
    <table class="table">
      <thead>
        <tr>
          <th>Serviço</th>
          <th>Data</th>
          <th>Hora</th>
          <th>Cliente</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="scheduling in schedulings" :key="scheduling.id">
          <td>{{ scheduling.service.name }}</td>
          <td>{{ formatDate(scheduling.date) }}</td>
          <td>{{ scheduling.time }}</td>
          <td>{{ scheduling.client.name }}</td>
          <td>R${{ scheduling.service.price.toFixed(2) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import "./BarberSchedulings.scss";
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  data() {
    return {
      schedulings: [],
    };
  },
  computed: {
    ...mapGetters({
      user: "user",
    }),
  },
  mounted() {
    this.getBarberSchedulings();
  },
  methods: {
    async getBarberSchedulings() {
      try {
        const response = await axios.get("http://localhost:3000/schedulings");
        const barberID = this.user.id;
        const barberSchedulingsSchedulings = response.data.filter(
          (scheduling) => scheduling.barber.id === barberID
        );

        this.schedulings = barberSchedulingsSchedulings.sort((a, b) => {
          const dateComparison = new Date(a.date) - new Date(b.date);
          if (dateComparison !== 0) return dateComparison;

          return a.time.localeCompare(b.time);
        });
      } catch (error) {
        console.error(error);
      }
    },
    formatDate(date) {
      if (!date) return "";
      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    },
  },
};
</script>
