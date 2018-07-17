<style>
.index h1 .index-logo{width:180px;height:180px;display:block;margin:0 auto}
.row-flex{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap}
.row-flex,.row-flex:after,.row-flex:before{display:-webkit-box;display:-ms-flexbox;display:flex}
</style>
<template>
    <div class="row-flex row-flex-middle row-flex-center">
        <div class="col-span-24">
            <h1><img class="index-logo" src="../img/index_logo.png"></h1>
            <h2>基于vue2.0的微信支付UI组件库</h2>
            <div class="list">
                <a href="">test</a>
                <a href="">tes1t</a>
            </div>
        </div>
    </div>
</template>

<script>
   import Vue from "vue";
   export default{
        data(){
          return {
            test:'test'
          }
        }
    }

</script>