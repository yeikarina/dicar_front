import NavBar from '@/components/NavBar.vue';
<template>
  <NavbarMobile v-if="mobileView" />
  <Navbar v-else />
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <router-view />
  <Footer> </Footer>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import NavbarMobile from "./components/NavbarMobile.vue";
import Footer from "./components/Footer.vue";

export default {
  data() {
    return {
      mobileView: true,
    };
  },
  methods:{
    handleView(){
      this.mobileView = window.innerWidth <=990;
    }
  },
  created(){
    this.handleView();
    window.addEventListener('resize', this.handleView)
  },
  components: {
    Navbar,
    Footer,
    NavbarMobile,
  },
};
</script>

<style lang="scss"></style>
