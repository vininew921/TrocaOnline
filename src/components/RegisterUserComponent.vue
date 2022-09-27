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
      <v-btn
        depressed
        rounded
        x-large
        :color="btnColor"
        dark
        block
        :loading="loading"
        :disable="loading"
        @click="register"
      >
        <div v-if="successResponse == 0">Create Account</div>
        <v-icon dark x-large v-if="successResponse == 1">
          mdi-check-circle-outline
        </v-icon>
        <v-icon dark x-large v-if="successResponse == 2">
          mdi-close-circle-outline
        </v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import { registerUser } from "../services/ApiService";

export default {
  data() {
    return {
      loader: null,
      loading: false,
      neutralColor: "#618DFF",
      btnColor: "#618DFF",
      //0 - neutro, 1 - OK, 2 - erro
      successResponse: 0,
      user: {
        username: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async register() {
      try {
        this.loading = true;
        let responseCode = await registerUser(this.user);
        this.loading = false;
        if (responseCode == 201) {
          this.btnColor = "#00ff00";
          this.successResponse = 1;
          setTimeout(() => {
            this.$router.push({ path: "/login", replace: true });
          }, 2000);
        } else {
          this.btnColor = "#ff0000";
          this.successResponse = 2;
        }
        setTimeout(() => {
          this.btnColor = this.neutralColor;
          this.successResponse = 0;
        }, 3000);
      } catch (error) {
        this.successResponse = 2;
        this.loading = false;
        this.btnColor = "#ff0000";
      }
    },
  },
  watch: {
    loading(newLoading) {
      this.loader = "loading";
      const l = this.loader;
      this[l] = newLoading;
    },
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
