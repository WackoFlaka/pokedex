import { AppState } from "../AppState.js"
import { DetailedPokemon } from "../models/DetailedPokemon.js"
import { api } from "./AxiosService.js"

class SandboxService {
    
    async myPokemon() {
        const response = await api.get('api/pokemon')
        console.log('Getting my pokemon', response.data)
        const newPokemon = response.data.map(array => new DetailedPokemon(array))
        console.log('hmmm', newPokemon)
        AppState.myPokemon = newPokemon
    }
    
    
    async catchPokemon() {
        const activePokemon = AppState.activePokemon
        const response = await api.post('api/pokemon', activePokemon)
        console.log('You caught the pokemon!', response.data)
    }
}

export const sandboxService = new SandboxService()