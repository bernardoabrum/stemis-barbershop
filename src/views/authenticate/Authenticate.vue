<template>
  <div class="authenticate-page">
    <h1>Authenticate Page</h1>
    <div class="container-login">
      <Login />
      <Register />
    </div>
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
