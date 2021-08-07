<template lang="pug">

ul.tags
    li.tags__item(v-for="(item, key) in items" :key="itemsGroup+key")
        input.tags__input(type="radio" :name="itemsGroup" :value="item" :id="itemsGroup + '-' + item" v-model="checked" @change="checkedItem")
        label.tags__label(:for="itemsGroup + '-' + item")  {{ item }}
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            required: true
        },
        itemsGroup: {
            type: String,
            required: true
        },
        itemChecked: {
            type: String,
            required: false
        }
    },
    data() {
        return {
            checked: this.itemChecked || this.items[0]
        }
    },
    methods: {
        checkedItem() {
            this.$emit('onItemChecked', this.checked)
        }
    }
}
</script>

<style lang="sass">
    .tags
        display: flex
        flex-direction: row
        align-items: center
        list-style: none
        padding-left: 0
        &__item
            flex:0 0 auto
        &__label
            padding: 0.5em 1em
            margin-right: 10px
            border-radius: 5px
            border: 1px solid var(--c-text)
            cursor: pointer
        &__input
            display: none
            &:checked + .tags__label
                background-color:  var(--c-text)
                color: white    </style>