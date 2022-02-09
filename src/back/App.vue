<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <AdminMenu></AdminMenu>
    <router-view  />
  </div>
</template>
<script>
import AdminMenu from "../back/components/AdminMenu.vue"
//import "../../../public/dist/js/adminlte.min.js" // 滑動旁邊menu的標誌

export default {
  name:"back",
  components:{
    AdminMenu
  },
  mounted(){

  },
  methods:{

  }
}
</script>
<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
