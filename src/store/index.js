import { isValidValue } from  '@/assets/js/validation.js'
import { createStore } from 'vuex';
export const store = createStore({
    state: {
        notes: [], //{value, tag}
        tag: 'all'
    },
    mutations: {
        setNotes(state, notes) {
            state.notes = notes
        },
        setNote(state, {value, tag}) {
            state.notes.push({
                value,
                tag
            })
        },
        setNoteById(state, {id, note}) {
            state.notes[id] = note;
        },
        setTag(state, tag) {
            state.tag = tag
        },
        deleteNoteById(state, id) {
            state.notes.splice(id, 1)
        }
    },
    actions: {
        setNotes({commit}, notes) {
            commit('setNotes', notes)
        },
        setNote({commit, state}, {value, tag}) {
            return new Promise((resolve, reject) => {
                if(isValidValue(value, state.notes)) {
                    commit('setNote', {value, tag})
                    resolve(true)
                } else {
                    reject(false)
                }
            })
        },
        setNoteById({commit, state}, {id, note}) {
            return new Promise((resolve, reject) => {
                if(isValidValue(note.value, state.notes, id)) {
                    commit('setNoteById', {id, note})
                    resolve(true)
                } else {
                    reject(false)
                }
            })
        },
        deleteNoteById({commit}, id) {
            commit('deleteNoteById', id)
        },
        setTag({commit}, tag) {
            commit('setTag', tag)
        }
    },
    getters: {
        getNotes: state => state.notes,
        getNotesById: state => (id) => state.notes[id],
        getNotesByTag: (state, getters) =>  {
            if(state.tag === 'all') return getters.getNotes
            return state.notes.filter(item => item.tag == state.tag)
        },
        getTag: state => state.tag
    }

})