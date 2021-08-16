<template lang="pug">

form.form(@submit.prevent="onSubmit")
    span.form__error {{ error }}
    textarea.form__area(required v-model.trim="form.value" placeholder="Your note")
    Tags(:items="noteTags" :itemChecked="form.tag" itemsGroup="formTags" @onItemChecked="handleTagChecked" class="form__tags")
    button.btn.form__btn(type="submit") Add new note

</template>

<script>
import { isValidValue } from  '@/assets/js/validation.js'
import Tags from '@/components/UI/Tags.vue'
import { noteTags } from '@/_config.js'
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
    components: {
        Tags
    },
    data() {
        return {
            form: {
                value: '',
                tag: noteTags[0]
            },
            error: '',
            noteTags:noteTags,
            isValid: isValidValue,

        }
    },
    methods: {
        onSubmit() {
            this.form.value = this.form.value.trim()
            if(this.isValid(this.form.value, this.notes)) {
                this.hideError()
                this.$emit('onSubmit', this.form)
                this.form.value = ''
                this.form.tag = this.noteTags[0]
            } else {
                this.showError(this.form.value)
            }
        },
        handleTagChecked(tag) {
            this.form.tag = tag
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
</style>