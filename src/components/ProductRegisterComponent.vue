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
            hide-details
          >
          </v-text-field>
          <v-text-field
            class="headerInput"
            v-model="registeredProduct.description"
            placeholder="Descrição"
            dark
            outlined
            rounded
            hide-details
          >
          </v-text-field>
        </div>
        <div class="registerProductCenter">
          <div class="registerProductCenterColumn">
            <v-img
              class="img_item_style"
              contain
              max-height="100%"
              max-width="100%"
              :src="require(`../assets/logo_website.png`)"
            >
            </v-img>
          </div>
          <div class="registerProductCenterColumn">
            <v-select
              v-model="registeredProduct.category"
              :items="this.$store.getters.getTypeList"
              item-text="type"
              label="Categoria"
              outlined
              rounded
              hide-details
              dark
            >
            </v-select>
            <v-text-field
              v-model="registeredProduct.quantity"
              placeholder="Disponibilidade"
              dark
              outlined
              rounded
              hide-details
              type="number"
              background-color="#618DFF"
              class="registerProductDetailButton"
            >
            </v-text-field>
            <v-text-field
              v-model="registeredProduct.value"
              placeholder="Valor"
              dark
              outlined
              rounded
              hide-details
              type="number"
              background-color="#618DFF"
              class="registerProductDetailButton"
            >
            </v-text-field>
            <v-text-field
              v-model="registeredProduct.tags"
              placeholder="Tags"
              dark
              outlined
              rounded
              hide-details
              background-color="#618DFF"
              class="registerProductDetailButton"
            >
            </v-text-field>
            <v-text-field
              v-model="registeredProduct.deadline"
              placeholder="Limite de dias"
              dark
              outlined
              rounded
              hide-details
              type="number"
              background-color="#618DFF"
              class="registerProductDetailButton"
            >
            </v-text-field>
            <v-select
              v-model="registeredProduct.isSale"
              :items="salesOptions"
              item-text="type"
              label="Venda?"
              outlined
              rounded
              hide-details
              dark
            >
            </v-select>
            <v-btn
              depressed
              rounded
              x-large
              dark
              color="#0A7A1C"
              block
              @click="publish"
              id="publishProductBtn"
            >
              Publicar
            </v-btn>
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
        category: undefined,
        quantity: undefined,
        value: undefined,
        tags: "",
        deadline: undefined,
        isSale: undefined,
      },
      salesOptions: ["Sim", "Não"],
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
  height: 79%;
}

.registerProductCenterColumn {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 5px;
}

#publishProductBtn {
  margin: 2px;
}
</style>
