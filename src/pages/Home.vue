<template>
    <div>
        <NotesForm
            :notes="notes"
            @onSubmit="handleSubmit"/>
        <NotesList
            :notes="notes"
            @changeNoteByIndex="handleChangeByIndex"
            @removeNoteByIndex="handleRemoveByIndex" />
    </div>
</template>

<script>
import NotesForm from '../components/Notes/Form.vue';
import NotesList from '../components/Notes/List.vue'
export default {
    mounted() {
        this.getNotes();
    },
    components: {
        NotesForm,
        NotesList
    },
    data() {
        return {
            notes: []
        }
    },
    methods: {
        handleSubmit(note) {
            this.notes.push(note);
        },
        handleChangeByIndex({index, value}) {
            this.notes[index] = value.trim()
        },
        handleRemoveByIndex(index) {
            this.notes.splice(index, 1)
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