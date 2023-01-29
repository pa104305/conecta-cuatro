// array de los ids del tablero
// con valor free (vacios), red or yellow
var ids = {
    "1" : "free", "2" : "free", "3" : "free", "4" : "free", "5" : "free", "6" : "free", "7" : "free",
    "8" : "free", "9" : "free", "10" : "free", "11" : "free", "12" : "free", "13" : "free", "14" : "free",
    "15": "free", "16" : "free", "17" : "free", "18" : "free", "19" : "free", "20" : "free", "21" : "free",
    "22" : "free", "23" : "free", "24" : "free", "25" : "free", "26" : "free", "27" : "free", "28" : "free",
    "29" : "free", "30" : "free", "31" : "free", "32" : "free", "33" : "free", "34" : "free", "35" : "free",
    "36" : "free", "37" : "free", "38" : "free", "39" : "free", "40" : "free", "41" : "free", "42" : "free",
}
// cantidad de puntos de cada color y la cantidad de turnos globales
var pointsRed = 0
var pointsYellow = 0
var turnsGlobal = 0
// valor constante de la longitud del array de ids
const lenOfIds = Object.keys(ids).length
// variable para definir cual es el espacio base de la seleccion del jugador
var base
// variable que define el turno actual
var turn = 0

changePoints()

// funcion para seleccionar el circulo más bajo y pintarlo del color
// indicado
function seleccionar(id){
    // seleccionar las veces que se tiene que restar 7 para llegar a la base
    var iter = Math.trunc(id/7)
    // bucle que resta 7 para llegar al espacio base que el jugador selecciono
    for(let i = 0; iter >= i; i++){base = id - (7 * i); if(base == 0){base = 7;}}
    // condicional if que indica de que color se tiene que pintar el espacio
    // segun el turno
    if(turn == 0){
        // bucle que itera sobre los espacios de las columnas
        for(i = 0; i < 6; i++){
            // si el espacio más bajo esta libre lo pinta del color indicado y rompe
            // el bucle 
            if(ids[`${base}`] == "free"){
            document.getElementById(base).style.background = "red";
            ids[`${base}`] = "red"
            turnsGlobal += 1
            break;
            }// de lo contrario suma 7 para llegar al proximo espacio de la columna
            else{
            base += 7
            }
        }
        // se suma 1 al turno para que continue el siguiente jugador 
            turn++
        }else if(turn == 1){
        // lleva acabo los mismo pasos que el color rojo, para verificar espacios
        // y cambiar el color 
        for(i = 0; i < 6; i++){
            if(ids[`${base}`] == "free"){
            document.getElementById(base).style.background = "yellow"
            ids[`${base}`] = "yellow"
            turnsGlobal += 1
            break;
            }else{
            base += 7
            }
        }
            turn--
        }
    initComprobation()
}

function initComprobation(){
    if(turnsGlobal > 6){
        console.log("Iniciando la comprobacion")
        horizontal()
        /*vertical()
        diagonalOne()
        diagonalTwo()*/
    }
}

function horizontal(){
    const initBase = [1, 8, 15, 22, 29, 36]
    const stopBase = [7, 14, 21, 28, 35, 42]//4, 11, 18, 25, 32, 39
    for(space in initBase){
        let start = initBase[space]
        let stop = stopBase[space]
        let sameColorRed = 0
        let sameColorYellow = 0
        for(count = 0; count < 7; count++){
            if(start + count <= stop && ids[start + count] != "free"){
                if(ids[start + count] == "red" && (ids[start + count + 1] == "red" || ids[start + count - 1] == "red")){
                    sameColorRed++
                    comprobarCuatro(sameColorRed, sameColorYellow)
                }else if(ids[start + count] == "yellow" && (ids[start + count + 1] == "yellow" || ids[start + count - 1] == "yellow")){
                    sameColorYellow++
                    comprobarCuatro(sameColorRed, sameColorYellow)
                }
            }else if(ids[start + count] == "free" && ((sameColorRed < 4 && sameColorRed > 0) || (sameColorYellow < 4 && sameColorYellow > 0))){
                sameColorRed = 0
                sameColorYellow = 0
            }
        }
    }
}

function vertical(){
    const initBase = [1, 2, 3, 4, 5, 6, 7]
    const stopBase = [36, 37, 38, 39, 40, 41, 42]
    for(space in initBase){
        let start = initBase[space]
        let stop = stopBase[space]
        let sameColorRed = 0
        let sameColorYellow = 0
        for(count = 0, i = 0; i < 6; count = count + 7, i++){
            if(start + count <= stop && ids[start + count] != "free"){
                if(ids[start + count] == "red" && (ids[start + count + 7] == "red" || ids[start + count - 7] == "red")){
                    sameColorRed++
                    comprobarCuatro(sameColorRed, sameColorYellow)
                }else if(ids[start + count] == "yellow" && (ids[start + count + 7] == "yellow" || ids[start + count - 7] == "yellow")){
                    sameColorYellow++
                    comprobarCuatro(sameColorRed, sameColorYellow)
                }
            }else if(ids[start + count] == "free" && ((sameColorRed < 4 && sameColorRed > 0) || (sameColorYellow < 4 && sameColorYellow > 0))){
                sameColorRed = 0
                sameColorYellow = 0
            }
        }
    }
}

function diagonalOne(){
    const initBase = [1, 2, 3, 4, 5, 6, 7]
    const stopBase = [36, 37, 38, 39, 40, 41, 42]
    for(space in initBase){
        let start = initBase[space]
        let stop = stopBase[space]
        let sameColorRed = 0
        let sameColorYellow = 0
        for(count = 0, i = 0; i < 6; count = count + 8, i++){
            if(start + count <= stop && ids[start + count] != "free"){
                if(ids[start + count] == "red" && (ids[start + count + 8] == "red" || ids[start + count - 8] == "red")){
                    sameColorRed++
                    comprobarCuatro(sameColorRed, sameColorYellow)
                }else if(ids[start + count] == "yellow" && (ids[start + count + 8] == "yellow" || ids[start + count - 8] == "yellow")){
                    sameColorYellow++
                    comprobarCuatro(sameColorRed, sameColorYellow)
                }
            }else if(ids[start + count] == "free" && ((sameColorRed < 4 && sameColorRed > 0) || (sameColorYellow < 4 && sameColorYellow > 0))){
                sameColorRed = 0
                sameColorYellow = 0
            }
        }
    }
}

function diagonalTwo(){
    const initBase = [1, 2, 3, 4, 5, 6, 7]
    const stopBase = [36, 37, 38, 39, 40, 41, 42]
    for(space in initBase){
        let start = initBase[space]
        let stop = stopBase[space]
        let sameColorRed = 0
        let sameColorYellow = 0
        for(count = 0, i = 0; i < 6; count = count + 6, i++){
            if(start + count <= stop && ids[start + count] != "free"){
                if(ids[start + count] == "red" && (ids[start + count + 6] == "red" || ids[start + count - 6] == "red")){
                    sameColorRed++
                    comprobarCuatro(sameColorRed, sameColorYellow)
                }else if(ids[start + count] == "yellow" && (ids[start + count + 6] == "yellow" || ids[start + count - 6] == "yellow")){
                    sameColorYellow++
                    comprobarCuatro(sameColorRed, sameColorYellow)
                }
            }else if(ids[start + count] == "free" && ((sameColorRed < 4 && sameColorRed > 0) || (sameColorYellow < 4 && sameColorYellow > 0))){
                sameColorRed = 0
                sameColorYellow = 0
            }
        }
    }
}

function comprobarCuatro(reds, yellows){
    if(reds == 4){
        alert("jugador rojo gana")
        pointsRed++
        setTimeout(() => {clearBoard()}, 250)
    }else if(yellows == 4){
        alert("jugador amarillo gana")
        pointsYellow++
        setTimeout(() => {clearBoard()}, 250)
    }
}

function clearBoard(){
    for(id in ids){
        document.getElementById(id).style.background = "white";
        ids[id] = "free"
    }
    turnsGlobal = 0
    turn = 0
    changePoints()
}

function changePoints(){
    document.getElementById("punt1").innerText = pointsRed;
    document.getElementById("punt2").innerText = pointsYellow;
}

function resetGame(){
    pointsRed = 0
    pointsYellow = 0
    changePoints()
    clearBoard()
}