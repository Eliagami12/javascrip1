let messages=[ "una mañana triste", 4 , 5 , 6, "de verano"];
console.log( messages[3]); //así se accede a las posiciones de un arreglo

//agregando valores al arreglo
messages.push("nuevo")
messages.push("hola")
//recoriendo un arreglo for
//indice o posición
for(let indice =0 ; indice< messages.length ; indice++){
    console.log("areglo posición "+ indice + " :" + messages[indice]);
}
