<template lang="pug">

form.form(@submit.prevent="onSubmit")
    span.form__error {{ error }}
    textarea.form__area(required v-model.trim="form.value" placeholder="Your note")
    Tags(:items="noteTags" :itemChecked="form.tag" itemsGroup="formTags" @onItemChecked="handleTagChecked" class="form__tags")
    button.btn.form__btn(type="submit") Add new note

</template>

<script>
// import { isValidValue } from  '@/assets/js/validation.js'
import Tags from '@/components/UI/Tags.vue'
import { noteTags } from '@/_config.js'
export default {
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

        }
    },
    methods: {
        onSubmit() {
            this.$store.dispatch('setNote', {...this.form})
            .then(() => {
                this.hideError()
                this.form.value = ''
                // this.form.tag = this.noteTags[0]
            })
            .catch(()=> {
                this.showError(this.form.value)
            })
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