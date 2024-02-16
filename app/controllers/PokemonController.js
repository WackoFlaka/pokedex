import { AppState } from "../AppState.js"
import { pokemonService } from "../services/PokemonService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawPokemonList() {
    const pokemons = AppState.pokemons
    let html = ''
    pokemons.forEach(pokemon => html += pokemon.ListPokemon)
    setHTML('pokemonList', html)
}

function _drawDetailedPokemon() {
    setHTML('activePokemon', AppState.activePokemon.DetailsCardHTMLTemplate)
}

export class PokemonController {
    constructor() {
        console.log('Pokemon Controller has been set.')
        this.getPokemon()
        
        AppState.on('pokemons', _drawPokemonList)
        AppState.on('activePokemon', _drawDetailedPokemon)
    }
    
    async getPokemon() {
        try {
            await pokemonService.getPokemon()
        } catch (error) {
            Pop.error(error)
            console.log(error)
        }
    }
    
    async getPokemonDetails(name) {
        try {
            console.log('Getting Pokemon details', name)
            await pokemonService.getPokemonDetails(name)
        } catch (error) {
            Pop.error(error)
            console.log(error)
        }
    }
}