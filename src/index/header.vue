<template>
<div class="ui-header">
    <div class="ui-logo"><router-link to="/">wxpay-ui</router-link></div>
    <div class="ui-nav">
        <ul>
            <li><router-link to="/guide">指南</router-link></li>
            <li><router-link to="/componets">组件</router-link></li>
        </ul>
    </div>
</div>
</template>
<style>
  .ui-header {
    padding: 0 48px;
    margin: 0 -48px;
    background: #ffffff;
    overflow: hidden;
}  
.ui-header .ui-logo {
    float: left;
    width: 230px;
    padding: 22px 0;
}
.ui-header .ui-logo a {
    display: block;
    height: 36px;
    line-height: 999px;
    overflow: hidden;
    background: url(https://wx.gtimg.com/pay/img/common/logo.png?v=20160114) no-repeat;
}
.ui-header .ui-nav {
    float: right;
}
.ui-header .ui-nav li a {
    display: block;
    height: 76px;
    line-height: 76px;
    padding: 0 24px;
    color: #595959;
    font-size: 16px;
}
</style>
<script>
    export default{
        data(){
            return{

            }        
        }
    }
</script>