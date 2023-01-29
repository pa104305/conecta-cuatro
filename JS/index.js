/* CASOS DE PRUEBA */
let reds = ["1_6", "1_5", "1_4", "2_6"]

/* CODIGO :) */
/* VARIABLES*/
var cord
var cordCol
var cordRow 
let col = []
let row = []

/* FUNCIONES
function init(){
    for(let index = 0; reds.length > index; index++){
        cord = reds[index]
        cordCol = cord[0]
        cordRow = cord[2]
        col[index] = cordCol
        row[index] = cordRow
    }
    comp()
}

function comp(){
    if(col[0] == col[1]){
        console.log("cuatro en raya vertical")
    }else if(row[0] == row[1]){
        console.log("cuatro en raya horizontal")
    }
}

init()*/
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
            console.log("cuatro en raya vertical para " + color)
            /*if(color == "red"){
                p_r += 1
            }else if(color == "yellow"){
                p_y += 1
            }
            reset()
        }*/
    }else if(row[0] == row[1]){
        //console.log("cuatro en raya horizontal")
        if(lista.length == 4){
            console.log("cuatro en raya horizontal para " + color )
            /*if(color == "red"){
                p_r += 1
            }else if(color == "yellow"){
                p_y += 1
            }
            reset()*/
            }
        }
    }
}
init(reds, "red")