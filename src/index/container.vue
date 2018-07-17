<template>
    <div class="ui-container">
    

        <!-- 侧边栏 [[ -->
        <div class="ui-sidebar" v-if="sidebarshow" >
           <router-view name="sidebar"></router-view>
        </div>
        <!-- 侧边栏 ]] -->

        <!-- 主区域 [[ -->
        <div class="ui-content">
            <div class="ui-article">
                <router-view name="content"></router-view>
            </div>
        </div>
         <!-- 主区域 ]] -->
         <!-- 主区域 ]] -->
    </div>
</template>
<style>
   .ui-container {
    padding: 24px 0;
    margin: 24px 0;
    background: #ffffff;
    display: table;
    width: 100%;
    table-layout: fixed;
    border-radius: 4px;
    -webkit-border-radius: 4px;
} 
</style>
<script>
       export default{
        data(){
            return {
                sidebarshow:true
                 }
            },
            watch:{
                '$route'(to,from){
                    if(to.fullPath=='/'){
                     this.sidebarshow = false;   
                    }else{
                     this.sidebarshow = true;    
                    }
                }
            },
            created(){
                if(this.$route.fullPath=='/'){
                        this.sidebarshow = false;     
                }
            }
       }
</script>