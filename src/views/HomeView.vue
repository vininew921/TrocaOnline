<template>
  <v-app>
    <AppbarComponent></AppbarComponent>
    <HeaderComponent :user="user"></HeaderComponent>
    <MainViewComponent></MainViewComponent>
  </v-app>
</template>

<script>
import AppbarComponent from '@/components/AppbarComponent'
import HeaderComponent from '@/components/HeaderComponent'
import MainViewComponent from '@/components/MainViewComponent'

  export default {
    name: 'HomeView',

    components: {
      AppbarComponent,
      HeaderComponent,
      MainViewComponent
    },

    data() {
    return {
      user: {
        username: "",
        email: "",
      },
    };
  },
  }
</script>
