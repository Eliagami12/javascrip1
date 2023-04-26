function darMensajeDeBienvenida(nombre="" , apellidoPaterno="" , apellidoMaterno="" ) {
    console.log("bienvenido " + nombre + " " + apellidoPaterno + " " + apellidoMaterno)
    
}
function mensajeDeBienvenida(){
    console.log("bienvenido")
}
function valorMaximo(a , b){
    if( a > b){
        console.log("el mayor es "+ a)
    }
    else if(a==b){
        console.log("ambos son iguales")
    }
    else{
        console.log("el mayor es " + b)
    }

}
function valorMinimo( c , d ){
    if( c < d){
        console.log("el menor es "+c)
    }
    else if (c==d){
        console.log("ambos son iguales")
    }
    else{
        console.log("el menor es "+d)
    }
}
function edad( anioDeNacimiento){
    let anioActual=2023
    let edadActual=0
    edadActual=anioActual - anioDeNacimiento
    console.log("mi edad actual es " + edadActual)
    return edadActual
}
function esMayorDeEdad(edad){
    if (edad>=18){
        console.log("es mayor de edad")
    }
    else{
        console.log("es menor de edad")
    }
}
function saberEdadYEsMayorDeEdad(anioDeNacimiento){
    let miEdadActual= edad(anioDeNacimiento);
    esMayorDeEdad(miEdadActual)
}
saberEdadYEsMayorDeEdad(2019)


/*esMayorDeEdad(edad(2015))

edad(2020)19

valorMinimo(-1.50 , -1.5 )
valorMinimo( -1.4 , -0.950)
valorMinimo(10 , -20)


valorMaximo( 15 , 12)
valorMaximo( 5 , 12)
valorMaximo( 12 , 12)

mensajeDeBienvenida()
mensajeDeBienvenida()
mensajeDeBienvenida()
mensajeDeBienvenida()
darMensajeDeBienvenida("lucia" , "vega" , "espinoza")


*/