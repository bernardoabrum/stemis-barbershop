<template>
  <div class="my-schedulings-page">
    <h1>Meus agendamentos</h1>
    <table class="table">
      <thead>
        <tr>
          <th>Serviço</th>
          <th>Data</th>
          <th>Hora</th>
          <th>Barbeiro</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="scheduling in schedulings" :key="scheduling.id">
          <td>{{ scheduling.service.name }}</td>
          <td>{{ formatDate(scheduling.date) }}</td>
          <td>{{ scheduling.time }}</td>
          <td>{{ scheduling.barber.name }}</td>
          <td>R${{ scheduling.service.price.toFixed(2) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import "./MySchedulings.scss";
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
    this.getMySchedulings();
  },
  methods: {
    async getMySchedulings() {
      try {
        const response = await axios.get("http://localhost:3000/schedulings");
        const userID = this.user.id;
        const userSchedulings = response.data.filter(
          (scheduling) => scheduling.client.id === userID
        );

        this.schedulings = userSchedulings.sort((a, b) => {
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
