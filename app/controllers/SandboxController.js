import { AppState } from "../AppState.js"
import { sandboxService } from "../services/SandboxService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawMyPokemon() {
    console.log('Drawing pokemon..')
    const myPokemon = AppState.myPokemon
    let html = ''
    myPokemon.forEach(pokemon => html += pokemon.ListMyPokemon)
    setHTML('myPokemon', html)
}

export class SandboxController {
    constructor() {
        console.log('Sandbox Controller is set..')
        AppState.on('account', this.myPokemon)
        AppState.on('myPokemon', _drawMyPokemon)
    }
    
    async catchPokemon() {
        try {
            console.log('Catching Pokemon!')
            await sandboxService.catchPokemon()
            Pop.success(`You have caught ${AppState.activePokemon.name}`)
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }
    
    async myPokemon() {
        try {
            await sandboxService.myPokemon()
        } catch (error) {
            console.error()
            Pop.error(error)
        }
    }
}