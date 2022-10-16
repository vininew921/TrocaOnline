<template>
    <v-navigation-drawer
    app
    id="appbar"
    absolute
    permanent
    left
    >
        <br>
        <v-list-item one-line>
            <img id="logo_image" :src=image>
          <v-list-item-content>
            <v-list-item-title id="app_font">Troca<br>Online</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <br>
        
        <div class="text-center">
          <v-btn
          id="caralog_button"
          rounded
          color= #618DFF>
            Catálogo
          </v-btn>
        </div>
        <br>

        <v-list-group
        :value="true">
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title style="color:#FFFFFF; font-size:21px;">Categorias</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="i in itensBarList"
            :key="i.title"
            link
          >
            <v-list-item-icon>
              <v-img
              contain
              :src="require(`../assets/icons/${i.icon}`)">
              </v-img>
            </v-list-item-icon>
            <v-list-item-title id="app_font">{{i.title}}</v-list-item-title>
          </v-list-item>
        </v-list-group>

    </v-navigation-drawer>
</template>

<script>
import image from "@/assets/logo_website.png";
export default {
  name: "Appbar",

  data: function () {
    return {
      image: image,
      itensBarList:[
        {title:"Calculadoras", icon:"calculator_icon.png"},
        {title:"Fones", icon:"headphones_icon.png"},
        {title:"Canetas", icon:"caneta_icon.png"},
        {title:"Livros", icon:"books_icon.png"},
        {title:"Teclados", icon:"keyboard_icon.png"},
        {title:"Computadores", icon:"screen_icon.png"},
        {title:"Ajuda", icon:"help_icon.png"}
      ]
    };
  }
};

</script>

<style>

#appbar{
    background-color: #191919;
}

#logo_image{
    width: 90px;
    margin-right: 10px;
    margin-left: 10px;
}

#app_font{
  font-weight: 600;
  color: #ffffff;
  font-size: 18px;
}
#caralog_button{
  font-weight: bold;
  color: #FFFFFF;
}

</style>
