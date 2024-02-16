export class DetailedPokemon {
    constructor(data) {
        this.name = data.name
        this.img = data.img || data.sprites.other['official-artwork'].front_default
        this.height = data.height
        this.weight = data.weight
        this.types = data.types
    }
    
    get DetailsCardHTMLTemplate() {
        return /*html*/ `
        <div class="poke-header d-flex align-items-center justify-content-center">
              <h1>${this.name}</h1>
            </div>
            <div class="poke-img">
              <img src="${this.img}" alt="" width="30%">
            </div>
            <div class="poke-body">
              <div class="row justify-content-evenly align-items-center pt-4">
                <div class="col-5"><h3>Height: ${this.height}</h3></div>
                <div class="col-5"><h3>Weight: ${this.weight}</h3></div>
                <div class="col-5 pt-4"><h3>Type: ${this.PokemonType}</h3></div>
                <div class="col-5 pt-4"><button type="button" class="btn btn-danger fs-4" onclick="app.SandboxController.catchPokemon()"><span class="mdi mdi-pokeball pe-4 fs-4"></span>Catch</button></div>
              </div>
            </div>
        `
        
    }
    
    get PokemonType() {
        let html = ''
        this.types.forEach(type => html += type.type.name)
        return html
    }
    
    get ListMyPokemon() {
        return /*html*/ `
        <div class="mb-2">
      <button onclick="app.SandboxController.setActivePokemon('')" class="btn btn-danger w-75"><span class="mdi mdi-pokeball pe-2">${this.name}</button>
    </div>
        `
    }
    
}
