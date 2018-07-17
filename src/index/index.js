import Vue from 'vue'
import VueRouter from 'vue-router'
import app from './app.vue';
import './css/index.css';
import './css/_index.css';
import  './css/doc.css';
import demoBlock from './demo-block.vue';
Vue.component('demo-block', demoBlock);
//import './common.css';

const Componets = { template: '<div>组件</div>' }
const test = { template: '<div>test</div>' }
const empty = {template:''}
const routes = [
  {path:'/',
    components:{
        sidebar:empty,
        content:empty
    }
  },
  { 
    path: '/guide', 
    components:{
      sidebar:empty,
      content:empty
    }
  },
  {path:'/guide/start',
      components:{
          sidebar:empty,
          content:empty
        }
    },
    {path:'/guide/tab',
      components:{
          sidebar:empty,
          content:empty
        }
    },
  { 
    path: '/componets', 
    components:{
      sidebar:empty,
      content:empty
  } 
}
]

Vue.use(VueRouter);

const router = new VueRouter({
  routes
})

new Vue({ // eslint-disable-line
    render: h => h(app),
    router
  }).$mount('#app');
  