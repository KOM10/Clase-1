let usuarios=require('./usuarios');
let resultadoOne=usuarios.persona3;
let profesiones=require("./profesiones");
let clave=Object.keys(profesiones);
let resultado=Math.floor(Math.random()*(clave.length-0))



    let claves=clave[resultado];
    console.log(Object.assign(resultadoOne,profesiones[claves]));    











