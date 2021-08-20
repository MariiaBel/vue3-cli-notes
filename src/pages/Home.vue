<template>
    <div class="notes">
        <Form
            :notes="notes"
            @onSubmit="handleSubmit" class="notes__form"/>
        <Tags :items="noteTags" itemsGroup="notesTags" class="notes__tags" @onItemChecked="handleTagChecked" />
        <List
            @changeNoteByIndex="handleChangeByIndex"
            @removeNoteByIndex="handleRemoveByIndex" />
    </div>
</template>

<script>
import Form from '@/components/Notes/Form.vue';
import List from '@/components/Notes/List.vue'
import Tags from '@/components/UI/Tags.vue'
import { noteTags } from '@/_config.js'
export default {
    mounted() {
        this.getNotes();
    },
    components: {
        Form,
        List,
        Tags
    },
    data() {
        return {
            notes: [],
            noteTags: [ 'all', ...noteTags],
        }
    },
    computed: {
    },
    methods: {
        handleSubmit(note) {
            this.notes.push(
                {
                    "value": note.value,
                    "tag": note.tag
                }
            );
        },
        handleChangeByIndex({index, note}) {
            this.notes[index].value = note.value
            this.notes[index].tag = note.tag
        },
        handleRemoveByIndex(index) {
            this.notes.splice(index, 1)
        },
        handleTagChecked(tag) {
            this.filtedTag = tag
        },
        getNotes() {
            const localNotes = localStorage.getItem('notes')
            if(localNotes)
                this.notes = JSON.parse(localNotes);
        },
    },
    watch: {
        notes: {
            handler(updatedList) {
                localStorage.setItem("notes", JSON.stringify(updatedList));
            },
            deep: true
        }
    }
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