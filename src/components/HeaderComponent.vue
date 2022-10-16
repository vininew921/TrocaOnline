<template>
  <v-app-bar color="#212123" height="120px" app dark>
    <v-flex style="search_style" sm7 md3>
      <v-text-field background-color="#A8A8A8" solo>
        <template v-slot:label>
          <v-icon style="vertical-align: middle"> mdi-magnify </v-icon>
          Pesquisa
        </template>
      </v-text-field>
    </v-flex>
    <v-spacer></v-spacer>
    <div id="profile_style">
      <p id="profile_name">{{ user.username }}</p>
      <v-img id="profile_picture" src="@/assets/logo_website.png"></v-img>
    </div>

    <div id="icons_style">
      <button id="icon_button_style">
        <v-icon> mdi-heart </v-icon>
      </button>
      <button id="icon_button_style">
        <v-icon> mdi-bell-outline </v-icon>
      </button>
      <button id="icon_button_style">
        <v-icon> mdi-cart </v-icon>
      </button>
      <button id="icon_button_style" v-on:click="logout">
        <v-icon> mdi-exit-to-app </v-icon>
      </button>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "HeaderComponent",

  data() {
    return {
      user: {
        username: "",
        email: "",
      },
    };
  },
  methods: {
    async logout() {
      await this.$store.dispatch("LogOut");
      this.$router.push("/login");
    },
  },
};
</script>

<style>
#profile_style {
  display: flex;
}
#profile_name {
  align-content: center;
  margin: 10px;
  color: #ffffff;
}
#profile_picture {
  border-radius: 50%;
  width: 50px;
  height: 50px;
}

#icons_style {
  display: flex;
}

#icon_button_style {
  margin-left: 15px;
  margin-right: 15px;
  background-color: "#212123";
}

#icon_style > v-btn > v-icon {
  margin-left: 30px;
}
</style>
