<template>
  <header class='header'>
    <div class='wrapper'>
      <nav>
          <Nav class="header__nav" />
      </nav>
    </div>
  </header>
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
    .header
        font-size: 1.2em
        box-shadow: var(--c-text) 0 -10px 18px
        &__nav
          padding: 0
          margin: 12px 0
          justify-content: flex-end
          text-transform: uppercase
</style>