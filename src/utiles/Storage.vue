<template lang="pug">
    
</template>

<script>
export default {
    mounted() {
        const localNotes = localStorage.getItem('notes')
        if(localNotes)
            this.$store.dispatch('setNotes', JSON.parse(localNotes))
    },
    computed: {
        notes() {
            return this.$store.getters.getNotes;
        }
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