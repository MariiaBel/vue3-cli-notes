<template lang="pug">

ol.note__list
    li.note__item(v-for="(note, index) in notes" :key="index")
        form.form.note__form(v-if="changing == index" @submit.prevent="onSubmit")
            span.form__error {{ error }}
            textarea.form__area(type="text" :value="note.value")
            Tags.form__tags(:items="noteTags" :itemChecked="note.tag" itemsGroup="listName"  @onItemChecked="handleTagChecked")
            button.form__btn.btn Save
        .note__item-text(v-else)
            p.note__item-value(@click="changeNote(index)" ) {{ note.value }}
            span.note__item-tag {{ note.tag }}
            span.note__item-close.material-icons(tabindex="1"  @click="removeNote(index)") close

</template>

<script>
import { isValidValue } from  '@/assets/js/validation.js'
import Tags from '@/components/UI/Tags.vue'
import { noteTags } from '@/_config.js'
export default {
    props: {
        notes: {
            type: Array,
            requred: true
        },
    },
    components: {
        Tags
    },
    data() {
        return {
            changing: -1,
            choosenNote: {},
            error: '',
            isValid: isValidValue,
            noteTags: noteTags,
        }
    },
    methods: {
        onSubmit(event) {
            const note = {
                "value": event.target[0].value,
                "tag": this.choosenNote.tag
            }
            const index = this.changing
            if(this.choosenNote.value == note.value ||
                this.isValid(note.value, this.notes)) {
                    this.resetNote()
                    this.$emit('changeNoteByIndex', { index, note })
            } else {
                this.showError(note.value)
            }
        },
        removeNote(index) {
            this.$emit('removeNoteByIndex', index)
        },
        changeNote(index) {
            this.hideError()
            this.choosenNote.value = this.notes[index].value
            this.choosenNote.tag = this.notes[index].tag
            this.changing = index;
        },
        handleTagChecked(tag) {
            this.choosenNote.tag = tag
        },
        showError(value) {
            this.error = `The value "${value}" is not correct!`
        },
        hideError() {
            this.error = ''
        },
        resetNote() {
            this.choosenNote = {}
            this.changing = -1
        }
    },
}
</script>

<style lang="sass">
    .note
        &__list
            list-style: none
            padding: 0
            margin-top: 30px
        &__item
            margin-top: 10px
            box-shadow: 0px 10px 30px rgb(170 170 255 / 20%)
            padding: 1px 20px
            border-radius: 10px
            &-text
                display: flex
                flex-direction: row
                justify-content: space-between
                align-items: center
            &-tag
                font-size: 10px
                padding: 0.5em 1em
                margin-right: 10px
                border-radius: 5px
                border: 1px solid var(--c-text)
                background-color:  var(--c-text)
                color: white
                text-transform: uppercase
            &-value
                flex-grow: 1
                cursor: pointer
            &-close
                cursor: pointer
        &__form
            display: grid
            grid-template-columns: 1fr
            column-gap: 20px
            align-items: flex-end</style>