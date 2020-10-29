// Realiza una función que dada una fecha de nacimiento te devuelva el signo zodiacal.

let signos:string[];
signos = ["Aries", "Tauro", "Géminis", "Cancer", "Leo", "Virgo", "Libra", "Escorpio", "Sagitario", "Capricornio", "Acuario", "Piscis"];
function tuSigno (dia:number,mes:number):string {

    if ((dia >= 21 && mes == 3) || (dia <= 20 && mes == 4)) {
        return signos[0];   
    } else if ((dia >= 21 && mes == 4) || (dia <= 20 && mes == 5)) {
        return signos[1];
    } else if ((dia >= 21 && mes == 5) || (dia <= 20 && mes == 6)) {
        return signos[2];
    } else if ((dia >= 21 && mes == 6) || (dia <= 20 && mes == 7)) {
        return signos[3];
    } else if ((dia >= 21 && mes == 7) || (dia <= 21 && mes == 8)) {
        return signos[4];
    } else if ((dia >= 22 && mes == 8) || (dia <= 22 && mes == 9)) {
        return signos[5];
    } else if ((dia >= 23 && mes == 9) || (dia <= 22 && mes == 10)) {
        return signos[6];
    } else if ((dia >= 23 && mes == 10) || (dia <= 22 && mes == 11)) {
        return signos[7];
    } else if ((dia >= 23 && mes == 11) || (dia <= 20 && mes == 12)) {
        return signos[8];
    } else if ((dia >= 21 && mes == 12) || (dia <= 19 && mes == 1)) {
        return signos[9];
    } else if ((dia >= 20 && mes == 1) || (dia <= 18 && mes == 2)) {
        return signos[10];
    } else if ((dia >= 19 && mes == 2) || (dia <= 20 && mes == 3)) {
        return signos[11];
    }
}
console.log(tuSigno(13,12));
console.log(tuSigno(5,4));
console.log("-----------");

// Realizar un procedimiento que dado un país te imprima en qué continente estás.

let europa:string[] = ["España", "Francia", "Alemania", "Inglaterra", "Holanda"];
let asia:string[] = ["China", "India", "Indonesia", "Tailandia", "Filipinas"];
let america:string[] = ["Canadá","Chile","EEUU", "Méjico", "Argentina"];
let africa:string[] = ["Marruecos", "Egipto", "Nigeria", "Kenia", "Ghana"];
let oceania:string[] = ["Australia", "Nueva Zelanda", "Samoa", "Fiji", "Tonga"];

function elContinente (pais:string) {
        if (pais === "España" || pais === "Francia" || pais === "Alemania" || pais === "Inglaterra" || pais === "Holanda") {
            console.log("Europa"); 
        }
        if (pais === "China" || pais === "India" || pais === "Indonesia" || pais === "Tailandia" || pais === "Filipinas") {
            console.log("Asia");
        }
        if (pais === "Canadá" || pais === "Chile" || pais === "EEUU" || pais === "Méjico" || pais === "Argentina") {
            console.log("América");
        }
        if (pais === "Marruecos" || pais === "Egipto" || pais === "Nigeria" || pais === "Kenia" || pais === "Ghana") {
            console.log("África");
        }
        if (pais === "Australia" || pais === "Nueva Zelanda" || pais === "Samoa" || pais === "Fiji" || pais === "Tonga") {
            console.log("Oceanía");
        }
    }
elContinente("España");
elContinente("Australia");
elContinente("EEUU");
elContinente("China");
elContinente("Marruecos");