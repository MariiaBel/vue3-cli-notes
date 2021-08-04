<template lang="pug">

span.note__error {{ form.error }}
form.form(@submit.prevent="onSubmit")
    textarea.form__area(required v-model="form.value" placeholder="Your note")
    button.form__btn(type="submit") Add new note

</template>

<script>
import { isValidValue } from  '@/assets/js/validation.js'
export default {
    props: {
        notes: {
            type: Array,
            requred: false,
            default() {
                return []
            }
        }
    },
    emits: ['onSubmit'],
    data() {
        return {
            form: {
                value: '',
                error: ''
            },
            isValid: isValidValue
        }
    },
    methods: {
        onSubmit() {
            if(this.isValid(this.form.value, this.notes)) {
                this.hideError()
                this.$emit('onSubmit', this.form.value.trim())
                this.form.value = ''
            } else {
                this.showError(this.form.value)
            }
        },
        showError(value) {
            this.form.error = `The value "${value}" is not correct!`
        },
        hideError() {
            this.form.error = ''
        }
    },
}
</script>


<style lang="sass">
    .form
        margin-top: 50px
        margin-bottom: 30px
        &__area 
            width: 100%
            border: none
            border-radius: 5px
            box-shadow: rgb(122 122 122 / 30%) 0 1px 3px
            padding: 15px
            box-sizing: border-box
            font-family: 'Open Sans', sans-serif
            &:focus
                border: none
                outline: none
        &__btn
            border: 3px solid var(--c-accent)
            border-image: linear-gradient(#fefeff, var(--c-accent)) 10
            padding: 12px 30px
            text-transform: uppercase
            background: white
            color: var(--c-accent)
            border-radius: 5px
            margin-top: 15px
            box-shadow: rgb(170 170 255 / 30%) 0 3px 3px
            cursor: pointer
            &:active
                background-color: var(--c-accent)
                color: white
</style>