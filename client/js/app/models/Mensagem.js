class Mensagem {
    constructor(texto = '') {
        this._texto = texto;
        console.log(`texto 2${texto}`);
    }

    get texto() {
        console.log(`texto 1${this._texto}`);
        return this._texto;
    }

    set texto(texto) {
        console.log(`texto 3${texto}`);
        this._texto = texto;
    }
}