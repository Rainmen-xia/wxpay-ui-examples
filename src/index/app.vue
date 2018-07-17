<template>
    <div class="ui-wrapper">
        <headerEl />
        <containerEl />
        <footerEl />
 
    </div>
</template>
<style>
    
</style>
<script>
    import headerEl from './header.vue';
    import containerEl from './container.vue';
    import footerEl from './footer.vue';
    import index from './index/index.vue';
    import Guide from './guide/guide.vue';
    import GuideSide from './guide/guideSide.vue';
    import Tab from './guide/tab.vue';



    export default{
        name:'app',
        data(){
            return {

            }
        },
        components:{
           headerEl,
           containerEl,
           footerEl,
       //    GuideMD
        }

    }
</script>