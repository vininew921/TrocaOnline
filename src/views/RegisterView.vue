<template>
  <v-app>
    <RegisterUserComponent></RegisterUserComponent>
  </v-app>
</template>

<script>
import RegisterUserComponent from "@/components/RegisterUserComponent.vue";

export default {
  name: "RegisterView",
  components: {
    RegisterUserComponent,
  },
};
</script>
