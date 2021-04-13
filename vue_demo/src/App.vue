<template>
  <div id="app">
    <h1>Vue3.0</h1>
    <input type="text" v-model="msg">
    <HelloWorld class="child-component" :msg="msg" @getChildMsg="getChildMsg">
      <template v-slot:box>
        <p>slot-box</p>
      </template>
    </HelloWorld>
    <Provide />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Provide from './components/provide'
import { provide, reactive, ref, readonly } from 'vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Provide
  },
  setup() {
    const getChildMsg = (des) => {
      console.log(des.value, 'from child')
    }
    // 增加provide的响应性
    const location = ref('North Pole')
    const geolocation = reactive({
      longitude: 90,
      latitude: 135
    })
    const updateLocation = () => {
      location.value = 'South Pole'
    }
    // 使用readonly包裹provide传递的数据不会被inject的组件更改
    provide('location', readonly(location))

    provide('geolocation', readonly(geolocation))

    provide('updateLocation', updateLocation)
    return {
      getChildMsg,
      location,
      updateLocation
    }
  },
  data() {
    return {
      msg: 'hello'
    }
  },
  // methods: {
  //   updateLocation() {
  //     this.location = 'South Pole'
  //   }
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
