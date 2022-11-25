<template>
  <div id="loginbody">
    <div id="top">
      <img src="../assets/logo_website.png" />
      <h1 id="title">Sign In</h1>
    </div>
    <div id="loginform">
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

      <p id="alertmessage">Invalid Username/Password</p>

      <v-btn
        depressed
        rounded
        x-large
        :color="btnColor"
        dark
        block
        :loading="loading"
        :disable="loading"
        @click="authenticate"
      >
        <div v-if="successResponse == 0">Login</div>
        <v-icon dark x-large v-if="successResponse == 1">
          mdi-check-circle-outline
        </v-icon>
        <v-icon dark x-large v-if="successResponse == 2">
          mdi-close-circle-outline
        </v-icon>
      </v-btn>
      <div id="auxiliaryButtons">
        <v-btn id="noAccount" depressed @click="registerPage"
          >Don't have an account?</v-btn
        >
        <v-btn id="forgotPassword" depressed>Forgot password?</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      message_visibility: "hidden",
      loader: null,
      loading: false,
      neutralColor: "#618DFF",
      btnColor: "#618DFF",
      //0 - neutro, 1 - OK, 2 - erro
      successResponse: 0,
      user: {
        email: "",
        password: "",
      },
      submitted: false,
    };
  },
  methods: {
    ...mapActions(["LogIn"]),
    async registerPage() {
      this.$router.push({ path: "/register", replace: true });
    },
    async authenticate() {
      try {
        this.loading = true;
        let response = await this.LogIn(this.user);
        this.loading = false;
        if (response == 200) {
          this.btnColor = "#00ff00";
          this.successResponse = 1;
          setTimeout(() => {
            this.$router.push({ path: "/", replace: true });
          }, 2000);
        } else {
          this.btnColor = "#ff0000";
          this.successResponse = 2;
        }
      } catch (error) {
        this.successResponse = 2;
        this.loading = false;
        this.btnColor = "#ff0000";
        document.getElementById("alertmessage").style.visibility = "visible";
      } finally {
        setTimeout(() => {
          this.btnColor = this.neutralColor;
          this.successResponse = 0;
          document.getElementById("alertmessage").style.visibility = "hidden";
        }, 3000);
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

#registerButton {
  margin-top: 20px;
}

#title {
  font-weight: bold;
  font-size: 40px;
  line-height: 60px;
  color: #618dff;
}

#auxiliaryButtons {
  margin-top: 5px;
  padding: 12px;
  text-align: center;
}

#alertmessage{
  color:#B80606;
  padding: 0px;
  visibility: hidden;
  text-align: initial;
}

#noAccount,
#forgotPassword {
  color: white;
  margin: 2px;
  background-color: transparent !important;
}
</style>
