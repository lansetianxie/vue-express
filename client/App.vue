<template>
  <div>
      <h1>xxxxxxxxxxxxxx</h1>
      <router-link :to="{name:'hello'}">cccccc</router-link>
      <router-view></router-view>
      <br/>
      <button @click="toggle">jiazai</button>
      <template v-if="show">
        <later></later>
        <later2></later2>
      </template>
  </div>
</template>

<script>
import Vue from 'vue';
const later = Vue.component('later', () => ({
      // 需要加载的组件 (应该是一个 `Promise` 对象)
      component: import('./components/later.vue'),
      // // 异步组件加载时使用的组件
      // loading: LoadingComponent,
      // // 加载失败时使用的组件
      // error: ErrorComponent,
      // 展示加载时组件的延时时间。默认值是 200 (毫秒)
      delay: 3000,
      // 如果提供了超时时间且组件加载也超时了，
      // 则使用加载失败时使用的组件。默认值是：`Infinity`
      timeout: 3000
    })
)


const later2 = Vue.component('later2', function(resolve){
    require(['./components/later2.vue'], resolve)
})
export default {
    data: function () {
        return {
            show: false
        };
    },
    components: {
        later,
        later2,
    },
    created: function () {

    },
    mounted: function () {
    },
    computed: {},
    methods: {
        toggle:function () {
            this.show = !this.show;
        }
    },
}
</script>


<style>
    html {
    height: 100%;
    }

    body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    }
</style>
