<template>
  <v-main style="background-color: #212123">
    <div class="registerProductBody">
      <div class="registerProductBox">
        <div class="registerProductTitle">
          <h1>Cadastro de produto</h1>
        </div>
        <div class="registerProductHeader">
          <v-text-field
            class="headerInput"
            v-model="registeredProduct.title"
            placeholder="Título"
            dark
            outlined
            rounded
          >
          </v-text-field>
          <v-text-field
            class="headerInput"
            v-model="registeredProduct.description"
            placeholder="Descrição"
            dark
            outlined
            rounded
          >
          </v-text-field>
        </div>
        <div class="registerProductCenter">
          <div class="registerProductCenterColumn">
            <v-img
              class="img_item_style"
              height="300px"
              :src="require(`../assets/logo_website.png`)"
            >
            </v-img>
          </div>
          <div class="registerProductCenterColumn">
            <v-text-field
              v-model="registeredProduct.category"
              placeholder="Categoria"
              dark
              outlined
              rounded
              dense
              hide-details
              class="registerProductDetailButton"
            >
            </v-text-field>
            <v-text-field
              v-model="registeredProduct.category"
              placeholder="Categoria"
              dark
              outlined
              rounded
              dense
              hide-details
              class="registerProductDetailButton"
            >
            </v-text-field>
            <v-text-field
              v-model="registeredProduct.category"
              placeholder="Categoria"
              dark
              outlined
              rounded
              dense
              hide-details
              class="registerProductDetailButton"
            >
            </v-text-field>
            <v-text-field
              v-model="registeredProduct.category"
              placeholder="Categoria"
              dark
              outlined
              rounded
              dense
              hide-details
              class="registerProductDetailButton"
            >
            </v-text-field>
            <v-text-field
              v-model="registeredProduct.category"
              placeholder="Categoria"
              dark
              outlined
              rounded
              dense
              hide-details
              class="registerProductDetailButton"
            >
            </v-text-field>
            <v-text-field
              v-model="registeredProduct.category"
              placeholder="Categoria"
              dark
              outlined
              rounded
              dense
              hide-details
              class="registerProductDetailButton"
            >
            </v-text-field>
            <v-text-field
              v-model="registeredProduct.category"
              placeholder="Categoria"
              dark
              outlined
              rounded
              dense
              hide-details
              class="registerProductDetailButton"
            >
            </v-text-field>
          </div>
        </div>
      </div>
    </div>
  </v-main>
</template>

<script>
export default {
  name: "MainViewComponent",

  data() {
    return {
      registeredProduct: {
        title: "",
        description: "",
        category: "",
        value: "",
        tags: "",
        limitOfDays: "",
        isSale: false,
      },
    };
  },

  methods: {
    getListofType(type) {
      var list;
      for (var element in this.$store.getters.getList) {
        if (element.type == type) {
          list.Add(element);
        }
      }
      return list;
    },
  },
};
</script>

<style scoped>
.container {
  min-height: 60px;
  margin-top: 20px;
  background-color: #191919;
}

.text_style {
  margin: 20px;
  color: #ffffff;
}

.row_style {
  margin: 25px;
}

.col_style {
  max-width: 300px;
  margin-left: 10px;
  margin-right: 10px;
}

.registerProductBody {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  vertical-align: middle;
  padding: 15px;
}

.registerProductBox {
  width: 60%;
  height: 100%;
  color: white;
  background-color: #191919;
  padding: 10px;
}

.registerProductTitle {
  margin-left: 15px;
}

.registerProductHeader {
  display: flex;
  justify-content: space-around;
}

.headerInput {
  margin: 8px;
}

.registerProductCenter {
  display: flex;
}
.registerProductCenterColumn {
  width: 50%;
}

.registerProductDetailButton {
  margin: 8px;
}
</style>
