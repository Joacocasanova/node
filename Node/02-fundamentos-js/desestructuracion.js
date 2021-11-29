const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    edad: 50,
    getNombre() {
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}

// const nombre = 'Wade',
// const apellido = 'Winston',
// const poder = 'Regeneracion',

function imprimeHeroe ( nombre, apellido, poder, edad = 0 ) {
    
    console.log(nombre, apellido, poder, edad);

}


// imprimeHeroe (deadpool);

const heroes = ['Deadpool', 'Superman', 'Batman'];

const [ , , h3] = heroes;

console.log(h3)