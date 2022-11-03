let boton = document.getElementById("boton")
let boton2 = document.getElementById("boton2")
let contador = 0
let resultado = 0
let muestra = document.getElementById("muestra")

function caraysello(){
    let select = document.getElementById("op").value
    let input = parseInt(document.getElementById("pal").value)
    let seguir = true
    do{
        let ramdom = 1 + (parseInt(Math.random() * 2))
        if(select==ramdom){
            contador=contador+1
            resultado=resultado+input
            muestra.innerHTML=`<h1 class="ganaste">ganaste un total de: ${resultado} jugaste ${contador}</h1>`
        }
        else{
            contador=contador+1
            resultado=resultado-input
            muestra.innerHTML=`<h1 class="perdiste">perdiste un total de: ${resultado} jugaste ${contador}</h1>`
        }
        seguir=false
    }
    while(seguir!=false)
}

boton.addEventListener('click',caraysello)

function reset(){
    contador = 0
    resultado = 0
    muestra.innerHTML=``
}

boton2.addEventListener('click',reset)