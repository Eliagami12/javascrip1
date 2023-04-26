//dibujar un arbol dependiendo de la cantidad de piso  que te diga

let pisos = 0;
pisos= window.prompt("¿cuántos pisos quieres que tenga el arbol");
let base="";
for(let indice= 0 ; indice < pisos ; indice++){

    base= base + "*";
    
    console.log(base);

}
 //PRIMERA EJECUCION-indice es igual a 0 y es menor a 4 
 //* 
 //ahora el indice vale 1

 //SEGUNDA EJECUCION- indice es igual a 1 y es menor 4 
 //**
 //ahora el indice vale 2

 //tercera ejcucion -indice es igual a 2 y menor a 4
 //***
 //ahora el indice vale 3

 //cuarta ejecucion- el indice vale 3 y es menor a 4 
 //****
//ahora el indice vale 4
