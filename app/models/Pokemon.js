export class Pokemon {
    constructor(data) {
        this.name = data.name
        this.url = data.url
    }
    
    get ListPokemon() {
        return /*html*/ `<p class="pokemonClick" onclick="app.PokemonController.getPokemonDetails('${this.name}')"><span class="mdi mdi-pokeball pe-4 fs-4"></span>${this.name}</p>`
    }
}