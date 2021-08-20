import { createStore } from 'vuex';
export const store = createStore({
    state: {
        notes: [{id: 1,value: 'first value', tag:'all'}], //{id, value, tag}
        tagFilter: 'all'
    },
    mutations: {

    },
    actions: {

    },
    getters: {
        getNotes: state => state.notes,
        getNotesById: state => (id) => state.notes[id],
        getNotesByTag: (state, getters) =>  {
            if(state.tagFilter === 'all') return getters.getNotes
            return state.notes.filter(item => item.tag == state.tagFilter)
        },
        getTagFilter: state => state.tagFilter
    }

})