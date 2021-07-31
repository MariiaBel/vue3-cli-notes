<template>
    <ul class="nav">
        <li class="nav__item" v-for="link in links" :key="link.alias">
            <router-link :to="{name: link.alias}">{{ link.title }}</router-link>
        </li>
    </ul>
</template>

<script>
  import {navLinks} from '@/_config'
  export default {
    data() {
      return {
        links: navLinks
      }
    }
  }
</script>


<style lang="sass">
    .nav
        display: flex
        flex-direction: row
        align-items: center
        list-style: none
        &__item
            a
              padding: 10px
              text-decoration: none
              color: inherit
              font-weight: 300
              &.router-link-exact-active
                color: var(--c-accent)
                font-weight: 400
                
              &:hover
                color: var(--c-accent)</style>