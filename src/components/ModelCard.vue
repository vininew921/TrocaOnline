<template>
    <div class="product_item">
        <v-img
        class="img_item_style"
        height="300px"
        :src="require(`../assets/test/${prod.image}`)">
        </v-img>
        <v-row class="price_row">
        <button>
            <div class="price_style">
                <p class="texto">R$ {{prod.value}},00</p>
            </div>
        </button>
        </v-row>
    </div>
</template>

<script>
export default {
  props: ["prod"]
};
</script>

<style>
.texto{
    display: flex;
    vertical-align: middle;
    color: #FFFFFF;
    padding: 5px;
}
.price_style{
    display: flex;
    justify-content: center;
    align-content: center;
    border-radius: 10px;
    background-color: #2D2D2E;
    width: 100px;
    height: 35px;
    margin-top:15px;
    margin-bottom:5px;
    margin-right: 20px;
}

.img_item_style{
    border-radius: 10px;
}
.product_item{
    border-radius: 10px;
    background-color: #FFFFFF;
}
.price_row{
    display:flex;
    justify-content: flex-end;
}

button:hover>.price_style{
    background-color: #618DFF;
}
</style>