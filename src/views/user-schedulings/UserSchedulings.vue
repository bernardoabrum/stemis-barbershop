<template>
  <div class="user-schedulings-page">
    <div class="button-container">
      <button @click="goBack">Voltar</button>
    </div>
    <h1>Meus agendamentos</h1>
    <div v-if="schedulings.length" class="table-container">
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
            <td class="btn">
              <v-btn outlined @click="deleteScheduling(scheduling.id)"
                >Excluir</v-btn
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p v-else>Você não tem agendamentos!</p>
  </div>
</template>

<script>
import "./UserSchedulings.scss";
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
    this.getUserSchedulings();
  },
  methods: {
    async getUserSchedulings() {
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
    async deleteScheduling(schedulingId) {
      try {
        await axios.delete(`http://localhost:3000/schedulings/${schedulingId}`);
        this.schedulings = this.schedulings.filter(
          (scheduling) => scheduling.id !== schedulingId
        );
      } catch (error) {
        console.error(error);
      }
    },
    goBack() {
      this.$router.push("/home");
    },
  },
};
</script>
