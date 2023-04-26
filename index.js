let nombre = "";

nombre = window.prompt("¿cuál es tu nombre?" );


let miEdad = 0;

miEdad = window.prompt("¿cuál es tu edad?", miEdad);

if(miEdad < 18){
    alert( nombre+ " eres menor de edad");
}
else{
    alert(`${nombre} eres mayor de edad`);
}




