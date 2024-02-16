import { AppState } from "../AppState.js"
import { DetailedPokemon } from "../models/DetailedPokemon.js"
import { Pokemon } from "../models/Pokemon.js"
import { pokeApi } from "./AxiosService.js"

class PokemonService {
    async getPokemon() {
        console.log('Grabbing Pokemon from API / class being set in service.')
        const response = await pokeApi.get('')
        console.log('Got Pokemon from Pokemon API', response.data)
        const newPokemons = response.data.results.map(pokePOJO => new Pokemon(pokePOJO))
        AppState.pokemons = newPokemons
    }
    
    async getPokemonDetails(name) {
        const response = await pokeApi.get(`${name}`)
        console.log('Getting details', response.data)
        
        const newPokemonDetail = new DetailedPokemon(response.data)
        AppState.activePokemon = newPokemonDetail
    }
}

export const pokemonService = new PokemonService()