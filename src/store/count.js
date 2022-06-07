import { defineStore } from "pinia";
import { ref } from "vue";

const useCounterStore = defineStore('count', {
    id: 'count', 
    state: () => {
        return {
            count: 1
        }
    },
    actions: {
        add() {
            this.count++
        }
    }
})


const useCounterStore2 =defineStore('count2', () => {
    const count = ref(0)
    function add() {
        count.value++
    }

    return {count, add}
})

export {useCounterStore, useCounterStore2}
