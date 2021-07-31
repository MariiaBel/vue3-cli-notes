<template>
  <footer class="footer">
    <div class="wrapper">
      <Nav class="footer__nav"/>
    </div>
  </footer>
</template>

<script>
  import Nav from './Nav.vue'
  export default {
    components: {
      Nav
    }
  }
</script>

<style lang="sass">
  .footer
    &__nav
      justify-content: center
</style>