// arrays por columnas guardando las coordenadas de su columna correspondiente
let columna_1 = ["1_1", "1_2", "1_3", "1_4", "1_5", "1_6"]
let columna_2 = ["2_1", "2_2", "2_3", "2_4", "2_5", "2_6"]
let columna_3 = ["3_1", "3_2", "3_3", "3_4", "3_5", "3_6"]
let columna_4 = ["4_1", "4_2", "4_3", "4_4", "4_5", "4_6"]
let columna_5 = ["5_1", "5_2", "5_3", "5_4", "5_5", "5_6"]
let columna_6 = ["6_1", "6_2", "6_3", "6_4", "6_5", "6_6"]
let columna_7 = ["7_1", "7_2", "7_3", "7_4", "7_5", "7_6"]
// copia de lista de arrys
let copia_columna_1 = ["1_1", "1_2", "1_3", "1_4", "1_5", "1_6"]
let copia_columna_2 = ["2_1", "2_2", "2_3", "2_4", "2_5", "2_6"]
let copia_columna_3 = ["3_1", "3_2", "3_3", "3_4", "3_5", "3_6"]
let copia_columna_4 = ["4_1", "4_2", "4_3", "4_4", "4_5", "4_6"]
let copia_columna_5 = ["5_1", "5_2", "5_3", "5_4", "5_5", "5_6"]
let copia_columna_6 = ["6_1", "6_2", "6_3", "6_4", "6_5", "6_6"]
let copia_columna_7 = ["7_1", "7_2", "7_3", "7_4", "7_5", "7_6"]
// array de fichas de cada color
let reds = []
let yellows = []
// variables a utilizar, turn define el turno mediante 1 y 0
var turn = 1
// c y f definen la fila y columna seleccionadas
var c = 0
var f = 0
// color define el color que toca emplear para el turno correpondiente
var color = "red"
// puntuacion
var p_r = 0
var p_y = 0
document.getElementById("punt1").innerText = p_r;
document.getElementById("punt2").innerText = p_y;

/* SELECCION Y COLOREADO DEL ESPACIO */

// funcion seleccionar, esta funcion es llamada cuando se da click a algun circulo del tablero
// recibiendo como argumento el id de dichoa argumento
function seleccionar(id){
    // condicional if que define el turno y color para despues cambiar los valores para preparar el
    // siguiente turno
    if(turn == 0){
        //console.log("yellow")
        color = "yellow"
        turn += 1
    }else if(turn == 1){
        //console.log("red")
        color = "red"
        turn -= 1
    }
    // se asignan los valores correpondientes de columna y fila
    c = id[0]
    f = id[2]
    // se llama a la funcion comprobation para llevar acabo el siguiente paso
    comprobation()
}

function comprobation(){
    // sentencia switch para llevar acabo el coloreado de cada espacio por columna 
    switch(c){
        case "7":
            temp = columna_7.length - 1
            document.getElementById(columna_7[temp]).style.background = color;
            add(temp, columna_7);
            columna_7.splice(temp, 1)
            console.log(temp)
            break;
        case "6":
            temp = columna_6.length - 1
            document.getElementById(columna_6[temp]).style.background = color;
            add(temp, columna_6);
            columna_6.splice(temp, 1)
            console.log(temp)
            break;
        case "5":
            temp = columna_5.length - 1
            document.getElementById(columna_5[temp]).style.background = color;
            add(temp, columna_5);
            columna_5.splice(temp, 1)
            console.log(temp)
            break;
        case "4":
            temp = columna_4.length - 1
            document.getElementById(columna_4[temp]).style.background = color;
            add(temp, columna_4);
            columna_4.splice(temp, 1)
            console.log(temp)
            break;
        case "3":
            temp = columna_3.length - 1
            document.getElementById(columna_3[temp]).style.background = color;
            add(temp, columna_3);
            columna_3.splice(temp, 1)
            console.log(temp)
            break;
        case "2":
            temp = columna_2.length - 1
            document.getElementById(columna_2[temp]).style.background = color;
            add(temp, columna_2);
            columna_2.splice(temp, 1)
            console.log(temp)
            break;
        case "1":
            temp = columna_1.length - 1
            document.getElementById(columna_1[temp]).style.background = color;
            add(temp, columna_1);
            columna_1.splice(temp, 1)
            console.log(temp)
            break;
    }
}

/* FUNCION DE BOTONES Y CONTADOR DE PUNTOS */
// Botton reset
// cuando se hace click en reset se llama a la funcion recet
function reset(){
    console.log("reset")
    turn = 1
    reds = []
    yellows = []    
    // bucles for que iteran sobre los elementos de las copias de las columnas para colorearlas en blanco
    for(let i = 0; i < copia_columna_1.length; i++){document.getElementById(copia_columna_1[i]).style.background = "white"; }
    for(let i = 0; i < copia_columna_2.length; i++){document.getElementById(copia_columna_2[i]).style.background = "white"; }
    for(let i = 0; i < copia_columna_3.length; i++){document.getElementById(copia_columna_3[i]).style.background = "white"; }
    for(let i = 0; i < copia_columna_4.length; i++){document.getElementById(copia_columna_4[i]).style.background = "white"; }
    for(let i = 0; i < copia_columna_5.length; i++){document.getElementById(copia_columna_5[i]).style.background = "white"; }
    for(let i = 0; i < copia_columna_6.length; i++){document.getElementById(copia_columna_6[i]).style.background = "white"; }
    for(let i = 0; i < copia_columna_7.length; i++){document.getElementById(copia_columna_7[i]).style.background = "white"; }
    // bucle for que agrega las coordenadas eliminadas iterando sobre las copias de columnas y agregandolas al array original
    for(let i = columna_1.length; copia_columna_1.length > i; i++){columna_1[i] = copia_columna_1[i]}
    for(let i = columna_2.length; copia_columna_2.length > i; i++){columna_2[i] = copia_columna_2[i]}
    for(let i = columna_3.length; copia_columna_3.length > i; i++){columna_3[i] = copia_columna_3[i]}
    for(let i = columna_4.length; copia_columna_4.length > i; i++){columna_4[i] = copia_columna_4[i]}
    for(let i = columna_5.length; copia_columna_5.length > i; i++){columna_5[i] = copia_columna_5[i]}
    for(let i = columna_6.length; copia_columna_6.length > i; i++){columna_6[i] = copia_columna_6[i]}
    for(let i = columna_7.length; copia_columna_7.length > i; i++){columna_7[i] = copia_columna_7[i]}
    // actualizar el contador
    document.getElementById("punt1").innerText = p_r;
    document.getElementById("punt2").innerText = p_y;
    console.clear()
}
// Boton replay
// Cuando se hace click en el boton replay se ejecuta esta funcion replay()
function replay(){
    console.log("replay")
    // se reinicia el contador a 0
    p_r = 0
    p_y = 0
    // se actualiza el contador
    document.getElementById("punt1").innerText = p_r;
    document.getElementById("punt2").innerText = p_y;
    // se llama a la funcion reset para dejar el tablero en blanco
    reset()
}

// Función add
// Agregar las coordenadas seleccionadas por cada color para después agregarlas a una lista segun el turno
function add(temp, columna){
    // If que pondra la coordenada en la lista del color indicada, si turno es 1 se agrega a lista de rojos
    // si turno es igual a 0 se agrega a lista de amarillos
    if(turn == 0){
        // index determina en que posicion se situara el nuevo elemento en la lista correspondiente
        index = reds.length
        reds[index] = columna[temp]
        console.log("rojo " + reds)
        init(reds, "red")
    }else if(turn == 1){
        index = yellows.length
        yellows[index] = columna[temp]
        console.log("amarrillos " + yellows)
        init(yellows, "yellow")
    }
}

/* Algoritmo incertado */
var cord
var cordCol
var cordRow 
var count = 0
let col = []
let row = []

/* FUNCIONES */
function init(lista, color){
    for(let index = 0; lista.length > index; index++){
        cord = lista[index]
        cordCol = cord[0]
        cordRow = cord[2]
        col[index] = cordCol
        row[index] = cordRow
    }
    comp(lista, color)
}

function comp(lista, color){
    if(col[0] == col[1]){
        //console.log("cuatro en raya vertical")
        if(lista.length == 4){
            alert("cuatro en raya vertical para " + color)
            if(color == "red"){
                p_r += 1
            }else if(color == "yellow"){
                p_y += 1
            }
            reset()
        }
    }else if(row[0] == row[1]){
        //console.log("cuatro en raya horizontal")
        if(lista.length == 4){
            alert("cuatro en raya horizontal para " + color )
            if(color == "red"){
                p_r += 1
            }else if(color == "yellow"){
                p_y += 1
            }
            reset()
        }
    }
}

/* Cambiar que solicite la lista para que despues haga uso de la lista indicada */