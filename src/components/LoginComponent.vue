<template>
  <div id="loginbody">
    <div id="top">
      <img src="../assets/logo_website.png" />
      <h1 id="title">Sign In</h1>
    </div>
    <div id="loginform">
      <v-text-field
        v-model="user.login"
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
        Login
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        login: "",
        password: "",
      },
      submitted: false,
    };
  },
};
</script>

<style scoped>
#loginbody {
  height: 100vh;
  background: #212123;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
}

#loginform {
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
