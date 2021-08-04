<template lang="pug">

ol.note__list
    li.note__item(v-for="(value, index) in notes" :key="index")
        form(v-if="changing == index" @submit.prevent="event => onChange(event.target[0].value, index)")
            input(type="text" :value="value")
            span {{ error }}
        p.note__item-text(v-else)
            span.note__item-value(@click="changeNote(index)") {{ value }}
            span.note__item-close.material-icons(tabindex="1"  @click="removeNote(index)") close

</template>

<script>
import { isValidValue } from  '@/assets/js/validation.js'
export default {
    props: {
        notes: {
            type: Array,
            requred: true
        }
    },
    data() {
        return {
            changing: -1,
            error: '',
            isValid: isValidValue
        }
    },
    methods: {
        onChange(value, index) {
            if(this.isValid(value, this.notes)) {
                this.changing = -1
                this.$emit('changeNoteByIndex', { index, value })
            } else {
                this.showError(value)
            }
        },
        removeNote(index) {
            this.$emit('removeNoteByIndex', index)
        },
        changeNote(index) {
            this.hideError()
            this.changing = index;
        },
        showError(value) {
            this.error = `The value "${value}" is not correct!`
        },
        hideError() {
            this.error = ''
        }
    },
}
</script>

<style lang="sass">
    .note
        &__item
            &-text
                display: flex
                flex-direction: row
                justify-content: space-between
                align-items: center
            &-value
                // font-family: 'Marck Script', cursive
                // font-size: 20px
                
            &-close
                cursor: pointer
                
                </style>