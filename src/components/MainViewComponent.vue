<template>
  <v-main style="background-color:#212123">
    <v-col>
      <div class="container">
        <h1 class="text_style">Calculadoras</h1>
        <v-row class="row_style">
        <v-col class="col_style" v-for="prod in this.$store.getters.getListCalculators" :key="prod.id">
            <ModelCard :prod="prod"></ModelCard>
        </v-col>
      </v-row>
      </div>
      <div class="container">
        <h1 class="text_style">Fones</h1>
        <v-row class="row_style">
        <v-col class="col_style" v-for="prod in this.$store.getters.getListHeadphones" :key="prod.id">
            <ModelCard :prod="prod"></ModelCard>
        </v-col>
      </v-row>
      </div>
      <div class="container">
        <h1 class="text_style">Canetas</h1>
        <v-row class="row_style">
        <v-col class="col_style" v-for="prod in this.$store.getters.getListPens" :key="prod.id">
            <ModelCard :prod="prod"></ModelCard>
        </v-col>
      </v-row>
      </div>
      <div class="container">
        <h1 class="text_style">Livros</h1>
        <v-row class="row_style">
        <v-col class="col_style" v-for="prod in this.$store.getters.getListBooks" :key="prod.id">
            <ModelCard :prod="prod"></ModelCard>
        </v-col>
      </v-row>
      </div>
      <div class="container">
        <h1 class="text_style">Teclados</h1>
        <v-row class="row_style">
        <v-col class="col_style" v-for="prod in this.$store.getters.getListKeyboard" :key="prod.id">
            <ModelCard :prod="prod"></ModelCard>
        </v-col>
      </v-row>
      </div>
      <div class="container">
        <h1 class="text_style">Computadores</h1>
        <v-row class="row_style">
        <v-col class="col_style" v-for="prod in this.$store.getters.getListMachines" :key="prod.id">
            <ModelCard :prod="prod"></ModelCard>
        </v-col>
      </v-row>
      </div>
    </v-col>
  </v-main>
</template>


<script>
import ModelCard from "@/components/ModelCard";
export default {
  name: "MainViewComponent",

  data(){
    return{
    };
  },

  components:{
    ModelCard
  },

  methods:{
    getListofType(type){
      var list;
      for(var element in this.$store.getters.getList){
        if(element.type==type){
          list.Add(element);
        }
      }
      return list;
    }
  }
};
</script>

<style>
.container{
  min-height: 60px;
  margin-top:20px;
  background-color: #191919;  
}

.text_style{
  margin: 20px;
  color: #FFFFFF;
}

.row_style{
  margin: 25px;
}

.col_style{
  max-width: 300px;
  margin-left: 10px;
  margin-right: 10px;
}
</style>