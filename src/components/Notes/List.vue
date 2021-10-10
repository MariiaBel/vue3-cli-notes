<template lang="pug">

ol.note__list
  li.note__item(v-for="(note, index) in getNotes" :key="index")
      form.form.note__form(v-if="choosenNote.id == index" @submit.prevent="onSubmit")
          span.form__error {{ error }}
          textarea.form__area(type="text" v-model.trim="note.value" required)
          Tags.form__tags(:items="noteTags"  :itemChecked="note.tag" itemsGroup="listName"  @onItemChecked="handleTagChecked")
          button.form__btn.btn Save
      .note__item-text(v-else)
          p.note__item-value(@click="changeNote(index)" ) {{ note.value }}
          span.note__item-tag {{ note.tag }}
          span.note__item-close.material-icons(tabindex="1"  @click="removeNote(index)") close

</template>

<script>
import Tags from "@/components/UI/Tags.vue";
import { noteTags } from "@/_config.js";
export default {
  components: {
    Tags,
  },
  data() {
    return {
      choosenNote: {
        id: -1
      },
      error: "",
      noteTags: noteTags,
    };
  },
  computed: {
    getNotes() {
        return this.$store.getters.getNotesByTag
    },
  },
  methods: {
    onSubmit(event) {
      const note = {
        value: event.target[0].value,
        tag: this.choosenNote.tag,
      };
      this.$store.dispatch('setNoteById', {id: this.choosenNote.id, note: note})
        .then(() => {
            console.log('success')
            this.resetNote();
        })
        .catch(()=> {
            console.log('fail')
            this.showError(note.value)
        })
    },
    getNote() {
        return this.$store.getters.getNotesById(this.choosenNote.id)
    },
    removeNote(index) {
      this.$store.dispatch('deleteNoteById', index)
    },
    changeNote(index) {
      this.hideError();
      this.choosenNote.id = index;
      let note = this.getNote()
      this.choosenNote.value = note.value;
      this.choosenNote.tag = note.tag;
    },
    handleTagChecked(tag) {
      this.choosenNote.tag = tag;
    },
    showError(value) {
      this.error = `The value "${value}" is not correct!`;
    },
    hideError() {
      this.error = "";
    },
    resetNote() {
      this.choosenNote = {
        id: -1
      };
    },
  },
};
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
          background-color: var(--c-text)
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
      align-items: flex-end
          
            
            </style>