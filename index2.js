//que fruta quieres
//cuantas unidades de fruta desea
//cuanto cuesta cada fruta
//alert tienes que pagar --

let montoAPagar = 0;


let nombreDeFruta = "";
nombreDeFruta = window.prompt("¿qué fruta quieres?" );

let unidadesDeFruta = 0;

 unidadesDeFruta= window.prompt(`¿cuántas unidades de ${nombreDeFruta} desea?` );

let precioDeFruta = 0;

precioDeFruta = window.prompt(`¿cuánto cuesta cada ${nombreDeFruta}`)

montoAPagar = unidadesDeFruta * precioDeFruta

alert(`tienes que pagar ${montoAPagar} `)

if(montoAPagar>10){
    alert("paga con yape")
}
else if(montoAPagar==0){
    alert("es gratis")
}
else{
    alert("paga con efectivo")
}


 

