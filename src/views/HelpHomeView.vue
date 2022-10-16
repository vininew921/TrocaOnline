<template>
  <v-app>
    <AppbarComponent></AppbarComponent>
    <HeaderComponent :user="user"></HeaderComponent>
    <v-main style="background-color:#212123">
        <div id="help_description">
            <h1 class="text_style">Ajuda</h1>
            <p class="help_description">Como posso alugar um produto?</p>
            <p class="help_description">R: Um produto pode ser alugado na seleção e agendando os dias disponíveis para aluguel</p>
            <br>
            <p class="help_description">Por quantos dias posso alugar um produto?</p>
            <p class="help_description">R: Um produto pode ser alugado pelo tempo necessário desde que esteja disponível</p>
            <br>
            <p class="help_description">Posso alugar vários produtos de uma vez?</p>
            <p class="help_description">R: É possível alugar vários produtos de uma vez havendo disponibilidade nas datas</p>
            <br>
            <p class="help_description">Existe taxa para anunciar algum produto?</p>
            <p class="help_description">R: Não existe taxa para anunciar o produto</p>
        </div>
  </v-main>
  </v-app>
</template>

<script>
import AppbarComponent from '@/components/AppbarComponent'
import HeaderComponent from '@/components/HeaderComponent'

  export default {
    name: 'HelpHomeView',

    components: {
      AppbarComponent,
      HeaderComponent
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
  }
</script>

<style>
#help_description{
    margin-left: 65px;
}
.help_description{
  margin: 10px;
  color: #FFFFFF;
  font-size: 28px;
  font-weight: bold;
}
</style>