<template>
  <div class="cmp-barber">
    <h1>Escolha o barbeiro:</h1>
    <div class="barber-container">
      <div
        @click="setSelectedBarber(barber)"
        class="card-barber"
        v-for="barber in barbers"
        :key="barber.id"
      >
        <img :src="require(`@/assets/${barber.img}`)" alt="" />
        <p>{{ barber.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import "./Barber.scss";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      barbers: [],
    };
  },
  mounted() {
    this.getBarbers();
  },
  methods: {
    ...mapMutations({
      setSchedulingInfo: "setSchedulingInfo",
      setActiveStep: "setActiveStep",
    }),

    async getBarbers() {
      try {
        const response = await axios.get("http://localhost:3000/users");
        this.barbers = response.data.filter((user) => user.isBarber === true);
      } catch (error) {
        console.error(error);
      }
    },

    setSelectedBarber(barber) {
      this.setSchedulingInfo({
        barber: {
          id: barber.id,
          name: barber.name,
        },
      });
      this.setActiveStep(2);
    },
  },
};
</script>
