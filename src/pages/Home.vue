<template lang="pug">

.notes
    Storage
    Form.notes__form
    Tags.notes__tags(:items="noteTags" itemsGroup="notesTags"  @onItemChecked="handleTagChecked")
    List

</template>

<script>
import Form from '@/components/Notes/Form.vue';
import List from '@/components/Notes/List.vue'
import Tags from '@/components/UI/Tags.vue'
import Storage from '@/utiles/Storage.vue'
import { noteTags } from '@/_config.js'

// import { reactive } from '@vue/reactivity';
export default {
    components: {
        Form,
        List,
        Tags,
        Storage
    },
    data() {
        return {
            noteTags: [ 'all', ...noteTags],
        }
    },
    methods: {
        handleTagChecked(tag) {
            this.$store.dispatch('setTag', tag)
        }
    },
}
</script>

<style lang="sass">
    .notes
        &__form
            margin-top: 50px
            margin-bottom: 70px
        &__tags
            justify-content: flex-end
            font-size: 12px</style>