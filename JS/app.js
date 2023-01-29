console.log("Tienes que colocar 4 colores en linea o vertical")
// variable que define el turno mediante 1 y 0
var turn = 1

// matriz de cordenadas
let fila_1 = ["1_1", "2_1", "3_1", "4_1", "5_1", "6_1", "7_1"]
let fila_2 = ["1_2", "2_2", "3_2", "4_2", "5_2", "6_2", "7_2"]
let fila_3 = ["1_3", "2_3", "3_3", "4_3", "5_3", "6_3", "7_3"]
let fila_4 = ["1_4", "2_4", "3_4", "4_4", "5_4", "6_4", "7_4"]
let fila_5 = ["1_5", "2_5", "3_5", "4_5", "5_5", "6_5", "7_5"]
let fila_6 = ["1_6", "2_6", "3_6", "4_6", "5_6", "6_6", "7_6"]
let filas = [fila_6, fila_5, fila_4, fila_3, fila_2, fila_1]
// lista de puntos ocupados por cada color
let amarillos = []
let rojos = []
var c = 0
var f = 0
var color = "red"

// funcion para seleccionar posiciones en el tablero
function seleccionar(id){
    if(turn == 0){
        console.log("yellow")
        color = "yellow"
        turn += 1
    }else if(turn == 1){
        console.log("red")
        color = "red"
        turn -= 1
    }
    c = id[0]
    f = id[2]
    comprobation(id)
}

//file = files[1]
//console.log(file[1])

function comprobation(id){
    var select_id = "0"
    var select_file = "1"
    for(file = 0; file < filas.length; file++){
        fila = filas[file]
        item = fila[c - 1]
        if(item[2] == 6 && item[0] == c){
            console.log(item)
            select_id = item
            select_file = filas[file]
            break;
        }else if(item[2] == 5 && item[0] == c){
            console.log(item)
            select_id = item
            select_file = filas[file]
            break;
        }else if(item[2] == 4 && item[0] == c){
            console.log(item)
            select_id = item
            select_file = filas[file]
            break;
        }else if(item[2] == 3 && item[0] == c){
            console.log(item)
            select_id = item
            select_file = filas[file]
            break;
        }else if(item[2] == 2 && item[0] == c){
            console.log(item)
            select_id = item
            select_file = filas[file]
            break;
        }else if(item[2] == 1 && item[0] == c){
            console.log(item)
            select_id = item
            select_file = filas[file]
            break;
        }
    }
    console.log(select_id, select_id[2])
    switch(select_id[2]){
        case "6":
            document.getElementById(select_id).style.background = color;
            break;
        case "5":
            document.getElementById(select_id).style.background = color;
            break;
        case "4":
            document.getElementById(select_id).style.background = color;
            break;
        case "3":
            document.getElementById(select_id).style.background = color;
            break;
        case "2":
            document.getElementById(select_id).style.background = color;
            break;
        case "1":
            document.getElementById(select_id).style.background = color;
            break;
    }
}
