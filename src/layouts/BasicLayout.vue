<template>
  <div>
    <Header></Header>
    <SideMenu></SideMenu>
    <router-view></router-view>
    <Footer></Footer>

  </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
import SideMenu from './SideMenu'
export default {
  components: {
    Header,
    Footer,
    SideMenu,
  },
}
</script>

<style>
</style>