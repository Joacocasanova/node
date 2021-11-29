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
    const empleado = empleados.find( (e) => e.id === id)

    if (empleado) {
        callback(null, empleado);
    } else {
        callback(`Empleado con id ${ id } no existe`);
    }

}

getEmpleado( 3, ( err, empleado ) => {
    if ( err ) {
        console.log('Error');
        return console.log(err);
    }
    console.log('empleado existe!')
    console.log(empleado);
}