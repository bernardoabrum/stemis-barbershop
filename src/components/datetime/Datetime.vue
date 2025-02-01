<template>
  <div class="cmp-datetime">
    <div class="date-picker-container">
      <h1>Escolha a data:</h1>
      <v-date-picker
        locale="pt-br"
        v-model="selectedDate"
        :min="minDate"
        :max="maxDate"
        :allowed-dates="disableSunday"
      />
    </div>
    <div v-if="selectedDate" class="time-picker-container">
      <h1>Escolha o horário:</h1>
      <div class="time-list">
        <p
          v-for="time in availableTimes"
          :key="time"
          class="time-item"
          @click="setSelectedTime(time)"
          :class="{ selected: selectedTime === time }"
        >
          {{ time }}
        </p>
      </div>
    </div>
    <div class="button-container" v-if="selectedTime">
      <v-btn @click="nextStep">Continuar</v-btn>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import "./Datetime.scss";
import axios from "axios";

export default {
  data() {
    return {
      selectedDate: null,
      selectedTime: null,
      busyTimes: [],
      availableTimes: [],
    };
  },
  watch: {
    selectedDate(date) {
      this.setSchedulingInfo({ date: date });
      this.setBusyTimes();

      setTimeout(() => {
        const timePicker = document.querySelector(".time-picker-container");
        timePicker.scrollIntoView({ behavior: "smooth" });
      }, 100);
    },
  },
  computed: {
    ...mapGetters({
      schedulingInfo: "schedulingInfo",
    }),
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
    ...mapMutations({
      setSchedulingInfo: "setSchedulingInfo",
      setActiveStep: "setActiveStep",
    }),
    formatDate(date) {
      return date.toISOString().split("T")[0];
    },
    disableSunday(date) {
      const parsedDate = new Date(date + "T00:00:00");
      return parsedDate.getDay() !== 0;
    },
    async setBusyTimes() {
      try {
        const response = await axios.get("http://localhost:3000/schedulings");
        const schedulings = response.data;

        const busyTimes = schedulings
          .filter((scheduling) => scheduling.date === this.selectedDate)
          .map((scheduling) => {
            const startMinutes = this.convertToMinutes(scheduling.time);
            const endMinutes =
              startMinutes + this.convertToMinutes(scheduling.service.duration);

            return {
              start: this.convertToHours(startMinutes),
              end: this.convertToHours(endMinutes),
            };
          });

        this.busyTimes = busyTimes;
        this.generateTimes();
      } catch (error) {
        console.error(error);
      }
    },
    convertToMinutes(time) {
      const [hours, minutes] = time.split(":").map(Number);
      return hours * 60 + minutes;
    },
    convertToHours(time) {
      const hours = Math.floor(time / 60);
      const remainingMinutes = time % 60;

      return `${String(hours).padStart(2, "0")}:${String(
        remainingMinutes
      ).padStart(2, "0")}`;
    },
    generateTimes() {
      const { duration } = this.schedulingInfo.service;
      const start = this.convertToMinutes("08:00");
      const end = this.convertToMinutes("18:00");
      const interval = this.convertToMinutes(duration);

      let times = [];
      let currentTime = start;

      while (currentTime + interval <= end) {
        const isBusy = this.busyTimes.some(
          (busyTime) =>
            (currentTime >= this.convertToMinutes(busyTime.start) &&
              currentTime < this.convertToMinutes(busyTime.end)) ||
            (currentTime + interval > this.convertToMinutes(busyTime.start) &&
              currentTime + interval <= this.convertToMinutes(busyTime.end))
        );

        if (!isBusy) {
          times.push(this.convertToHours(currentTime));
        }

        currentTime += interval;
      }

      this.availableTimes = times;
    },
    setSelectedTime(value) {
      this.selectedTime = value;
      this.setSchedulingInfo({ time: value });
      setTimeout(() => {
        const buttonContainer = document.querySelector(".button-container");
        buttonContainer.scrollIntoView({ behavior: "smooth" });
      }, 100);
    },
    nextStep() {
      this.setActiveStep(3);
    },
  },
};
</script>
