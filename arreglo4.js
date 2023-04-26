let pisos= 0;
pisos=prompt("cuántos pisos desea");

let base="";

for(let indice =pisos  ; indice>0; indice--){
    base=base + "*"
    console.log(base)
}
//lo que esta en el medio de for es la condicion para que ingrese AL FOR 
//* es el valor de base
//lo que esta al final de for lo lee al final de la ejecucion

//SEGUNDA EJECUCION-indice quedó  con el valor de 2
//** este es el nuevo valor de base

//TERCERA EJECUCIÓN-indice quedo con el valor de 1
//*** este es el nuevo valor de la base
 
//CUARTA EJECUCIÓN-ahora el indice vale 0


