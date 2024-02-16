import { DetailedPokemon } from './models/DetailedPokemon.js'
import { Pokemon } from './models/Pokemon.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null
  
  /**
   * @type {Pokemon[]}
   */
  pokemons = []
  
  /**
   * @type {activePokemon || null}
   * @type {DetailedPokemon | null}
   */
  activePokemon = null
  
  /**
   * @type {DetailedPokemon[]}
   */
  myPokemon = []
  showMyPokemon = false
}

export const AppState = createObservableProxy(new ObservableAppState())