<template>
  <div>
    <h1>provide/inject</h1>
    <p @click="changeLocation">location: {{ userLocation }}</p>
    <div>
      <p>longitude: {{ userGeolocation.longitude }}</p>
      <p>latitude: {{ userGeolocation.latitude }}</p>
    </div>
  </div>
</template>
<script>
  import { inject } from 'vue'
  export default {
    setup() {
      // inject可以设置默认值
      // const userLocation = inject('location', 'The Universe')
      const userLocation = inject('location')
      const userGeolocation = inject('geolocation')
      const updateLocation = inject('updateLocation')
      return {
        userLocation,
        userGeolocation,
        updateLocation
      }
    },
    methods: {
      changeLocation() {
        this.updateLocation()
      }
    }
  }
</script>