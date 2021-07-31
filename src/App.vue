<template>
  <div class="app-content">
    <Header />
    <section class="body-content wrapper">
      <router-view />
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  }
};
</script>

<style lang="sass">
  .app-content
    display: flex
    flex-direction: column
    min-height: 100vh
  .body-content
    flex-grow: 1</style>