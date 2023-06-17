
const MIN_POWER = 10;
const MAX_POWER = 30;


let golesBoca = 100;
let golesRiver = 100;

let round = 0;

function calcularGoles(){
    return Math.ceil(Math.random()*(MAX_POWER - MIN_POWER) + MIN_POWER); 
}

function partido (){
    return golesBoca>0 && golesRiver>0 
}


function ganaBoca (){
    return golesBoca > 0;
}


while(partido()){
    round ++ 

    

    let golBoca = calcularGoles()

    let golRiver = calcularGoles()


if(golBoca == golRiver){
    golesRiver -= golesBoca
    golesBoca -= golesRiver;
}else if(golBoca>golRiver){
    golesRiver -= golesBoca
}else {
    golesBoca -= golRiver;
}



console.log("------------------------")
console.log("Partido " + round + " ")




console.log("Goles de Boca " + golesBoca)
console.log("Goles de River " + golesRiver)

console.log("------------------------")


}

if(ganaBoca()){
    console.log("GANADOR BOCA")

}else { 
    console.log("GANADOR RIVER")
}