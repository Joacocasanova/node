const empleados = [
    {
        id: 1,
        nombre:'Juan'
    },
    {
        id: 2,
        nombre:'Karen'
    },
    {
        id: 3,
        nombre:'Jose'

    }
];

const salarios = [
    {
        id: 1,
        salario: 2000
    },
    {
        id:2,
        salario: 1500
    },
    // {
    //     id:3,
    //     salario: 4000
    // }
];


const getEmpleado = (id, callback) => {
    const empleado = empleados.find( e => e.id === id ).nombre

    return  new Promise( ( resolve, reject ) => {
        (empleado) 
            ? resolve( empleado )
            : reject(`No existe empleado con id ${ id }`)
        

    });

}

const getSalario = (id, callback) => {
  const salario = salarios.find( s => s.id === id ).salario

  return  new Promise( ( resolve, reject ) => {
      (salario) 
          ? resolve( salario )
          : reject(`No existe salario con id ${ id }`)
      

  });

}

const id = 1;

// getEmpleado(id)
//   .then( empleado => console.log( empleado ))
//   .catch( err => console.log(err))

// getSalario(id)
//   .then( salario => console.log( salario ))
//   .catch( err => console.log(err))

// getEmpleado(id)
// .then( empleado => { 
//   getSalario( id )
//     .then( salario => {

//       console.log(`El empleado:`, empleado, 'tiene un salario de ', salario)
//     })
//     .catch( err => console.log(err))
// })
// .catch(err => console.log(err))

let nombre;

getEmpleado(id)
  .then( empleado => {
    nombre = empleado
    return getSalario(id)})
  .then( salario => console.log (`El empleado:`, nombre, 'tiene un salario de ', salario))
  .catch( err => console.log(err))