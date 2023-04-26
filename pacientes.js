//registrar los nombres de varios pacientes
//!= diferente
let pacientes=("");
let arregloDePacientes=[]
//uso del while
while(pacientes !="*"){
    pacientes=prompt("ingrese el nombre del paciente. si desea no seguir registrando pacientes ingrese *"); 
if(pacientes != "*"){
    arregloDePacientes.push(pacientes)
}
      
}

console.log(arregloDePacientes)

//uso del map 
arregloDePacientes.map(paciente =>{
    alert("nombre del paciente "+ paciente)
})

let indice=0;

while(indice<arregloDePacientes.length){
    console.log("impresion while: "+ arregloDePacientes[indice])
    indice++
}
//length es igaul a largo