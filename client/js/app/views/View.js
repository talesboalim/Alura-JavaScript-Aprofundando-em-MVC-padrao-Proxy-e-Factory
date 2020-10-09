class View {
    constructor(elemento) {
        this._elemento = elemento;
    }

    _template() {
        throw new Error('O método templete deve ser implementado');
    }

    update(model) {
        //console.log('update(model) {');
        this._elemento.innerHTML = this.template(model);
        //console.log('innerHTML: ' + this._elemento.innerHTML);
    }
}