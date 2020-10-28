// Función que te devuelva si existe algún número par en el array
// de números que introduces como parámetro de entrada.

function numPar (k:number[]):string {
    let bool:boolean = false;
    let i:number = 0;
    let mensaje:string = "No hay ningún número par";
    while (i < k.length && bool == false) {
        if(k[i]%2 == 0){
        bool = true;
        mensaje = "Hay un número par en la posición " + i;
        }
        i++
    }
    return mensaje;
}
console.log(numPar([3, 5, 7, 8, 10]));
console.log(numPar([3, 5, 7, 9]));
console.log("-----------");

// Procedimiento que reciba un array de nombres y te devuelva verdadero si y solo si
// todos los nombres empiezan por M.

function nombreM (k:string[]):string {
    let bool:boolean = false;
    let i:number = 0;
    let texto:string = "Todos los nombres empiezan por la letra M";
    while (i < k.length && bool == false) {
        if(k[i][0] != "M"){
        bool = true;
        texto = "En la posición " + i + " hay un nombre que no empieza por la letra M";
        }
        i++
    }
    return texto;
}
console.log(nombreM(["María", "Maluma", "Miriam"]));
console.log(nombreM(["Marisa", "Pepa", "Manuela"]));


