<template>
  <div class="cmp-datetime">
    <h1>Escolha a data e hora:</h1>
    <div class="date-picker-container">
      <v-date-picker
        locale="pt-br"
        v-model="date"
        :min="minDate"
        :max="maxDate"
        :allowed-dates="allowedDates"
      />
    </div>
  </div>
</template>

<script>
import "./Datetime.scss";

export default {
  data() {
    return {
      date: null,
    };
  },
  computed: {
    minDate() {
      return this.formatDate(new Date());
    },
    maxDate() {
      const futureDate = new Date();
      futureDate.setMonth(futureDate.getMonth() + 2);
      return this.formatDate(futureDate);
    },
  },
  methods: {
    formatDate(date) {
      return date.toISOString().split("T")[0];
    },
    allowedDates(date) {
      const parsedDate = new Date(date + "T00:00:00");
      return parsedDate.getDay() !== 0;
    },
  },
  watch: {
    date(value) {
      console.log(value);
    },
  },
};
</script>
