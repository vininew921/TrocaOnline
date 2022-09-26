<template>
  <div id="registerbody">
    <div id="top">
      <img src="../assets/logo_website.png" />
      <h1 id="title">Register</h1>
    </div>
    <div id="registerform">
      <v-text-field
        v-model="user.username"
        placeholder="Username"
        dark
        outlined
        rounded
        background-color="#6c727f"
      >
      </v-text-field>
      <v-text-field
        v-model="user.email"
        placeholder="E-mail"
        dark
        outlined
        rounded
        background-color="#6c727f"
      >
      </v-text-field>
      <v-text-field
        v-model="user.password"
        placeholder="Password"
        type="password"
        dark
        outlined
        rounded
        background-color="#6c727f"
      >
      </v-text-field>
      <v-btn depressed rounded x-large color="#618DFF" dark block>
        Create Account
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        email: "",
        password: "",
      },
      submitted: false,
    };
  },
};
</script>

<style scoped>
#registerbody {
  height: 100vh;
  background: #212123;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
}

#registerform {
  width: 40vh;
  margin: 20px;
}

#title {
  font-weight: bold;
  font-size: 40px;
  line-height: 60px;
  color: #618dff;
}
</style>
