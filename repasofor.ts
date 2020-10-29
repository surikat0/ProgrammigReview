// Función que imprima (console.log) los números impares existentes hasta el número indicado como parámetro de entrada.

function impImpares (k:number) {
    for (let i = 0; i < k; i++) {  
        if (i%2 == 1) {  
        console.log(i);  
        }  
    }
}
impImpares(10);

// Realizar una función que reciba como parámetro de entrada un array y de salida el array revertido.

let revertido:string [] = [];
function arrayInvertido (k:string[]):string[] {
    for (let i = k.length -1 ; i >= 0; i--) {  
        revertido.push(k[i]);
    }
    return revertido;
}
console.log(arrayInvertido(["Papi", "Mami", "El Father", "La Potra"]));
console.log("-----------");

// Función que reciba como parámetro un array de strings que contenga colores y te imprima si está en el arcoiris.

function jBalvin (k:string[]) { 
    for (let i = 0; i < k.length; i++) {
        if ("Rojo" == k[i] || "Naranja" == k[i] || "Amarillo" == k[i] || "Verde" == k[i] || "Azul" == k[i] || "Indigo" == k[i] || "Morado" == k[i]) {
            console.log("El color " + k[i] + " está en el arcoiris");
        } 
        else {
            console.log("El color " + k[i] + " no está en el arcoiris")
        } 
    }
}
jBalvin(["Azul", "Rojo", "Gris"]);
jBalvin(["Rojo", "Gris", "Amarillo", "Verde", "Morado", "Beige"]);
console.log("-----------");

// Función que te devuelva la suma del número de carácteres de las palabras almacenadas en un array.

function sumaChar (k:string[]):number {
    let suma:number = 0;
    for (let i = 0; i < k.length; i++) {
        suma += k[i].length
    }
    return suma;
}
console.log(sumaChar(["Holi", "Bai"]));
console.log("-----------");

// Funcion que te imprima por consola si el numero introducido como parámetro es par o es impar.

function esParoImpar(k:number) {
    if (k%2 == 0) {
        console.log("El número es par");
    } else {
        console.log("El número es impar");
    }
}       
esParoImpar(10);
console.log("-----------");

// El numero suma de caracteres del Array es par o es impar.

esParoImpar(sumaChar(["Casa", "Coche", "Ciudad", "Cesta"]));
esParoImpar(sumaChar(["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"]));
esParoImpar(sumaChar(["Venezuela", "Veneno", "Voltaje"]));