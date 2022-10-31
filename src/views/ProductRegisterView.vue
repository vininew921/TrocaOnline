<template>
  <v-app>
    <AppbarComponent></AppbarComponent>
    <HeaderComponent :user="user"></HeaderComponent>
    <ProductRegisterComponent></ProductRegisterComponent>
  </v-app>
</template>

<script>
import AppbarComponent from "@/components/AppbarComponent";
import HeaderComponent from "@/components/HeaderComponent";
import ProductRegisterComponent from "@/components/ProductRegisterComponent";

export default {
  name: "RegisterProductView",

  components: {
    AppbarComponent,
    HeaderComponent,
    ProductRegisterComponent
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
  
  created(){
    this.$store.dispatch("ReceiveProducts");
  }
};
</script>
