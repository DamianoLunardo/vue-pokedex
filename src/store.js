import { reactive } from "vue"

const store = reactive({
    BASE_URL: 'https://pokeapi.co/api/v2/pokemon/{id or name}/',
    pokemons: [],
    
    get url() {
        return this.BASE_URL.replace('{id or name}', this.search)
    }

})

export default store