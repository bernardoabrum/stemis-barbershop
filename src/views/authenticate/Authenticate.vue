<template>
  <div class="authenticate-page">
    <Login />
    <Register />
  </div>
</template>

<script>
import "./Authenticate.scss";
import Register from "@/components/register/Register.vue";
import Login from "@/components/login/Login.vue";

export default {
  components: {
    Register,
    Login,
  },
};
</script>
