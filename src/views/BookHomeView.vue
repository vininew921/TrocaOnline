<template>
  <v-app>
    <AppbarComponent></AppbarComponent>
    <HeaderComponent :user="user"></HeaderComponent>
  <v-main style="background-color:#212123">
    <v-col>
      <div class="container">
        <h1 class="text_style">Livros</h1>
        <v-row class="row_style">
        <v-col class="col_style" v-for="prod in this.$store.getters.getListBooks" :key="prod.id">
            <ModelCard :prod="prod"></ModelCard>
        </v-col>
      </v-row>
      </div>
    </v-col>
  </v-main>
  </v-app>
</template>

<script>
import AppbarComponent from "@/components/AppbarComponent";
import HeaderComponent from "@/components/HeaderComponent";
import ModelCard from "@/components/ModelCard";

export default {
  name: "BookHomeView",

  components: {
    AppbarComponent,
    HeaderComponent,
    ModelCard
  },

  data() {
    return {
      user: {
        username: "",
        email: "",
        imageURL: "",
      },
    };
  },
};
</script>