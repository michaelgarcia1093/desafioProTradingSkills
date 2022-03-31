//Api
const API ='https://rickandmortyapi.com/api/character';

//Variables de ayuda
var apiSig="";
var apiAnt="";
var contador = 0
var jsonArray = []

//Obtención de información de api
const getData = (apiUrl) => {
    return fetch(apiUrl)
    .then (response => response.json())
    .then (json => {llenarInfo(json)})
    .catch(error => {console.log('Error: ',error)})
}


function llenarInfo(json){
    //Llenado de variables según su clase para ser llenados desde js al html.
    var imgCards = document.getElementsByClassName("imagenCard")
    var titulosCard = document.getElementsByClassName("tituloCard")
    var statusCard = document.getElementsByClassName("statusCard")
    var speciesCard = document.getElementsByClassName("speciesCard")
    var originNameCard = document.getElementsByClassName("originNameCard")
    var iconoStatus = document.getElementsByClassName("iconoStatus")
    for (let i = 0; i < imgCards.length; i++) {
        imgCards[i].src = json.results[contador].image
        titulosCard[i].innerHTML = json.results[contador].name
        statusCard[i].innerHTML = json.results[contador].status
        if (json.results[contador].status == "Alive"){
            iconoStatus[i].src = "img/pVerde.png"
        }else {
            if(json.results[contador].status == "Dead"){
            iconoStatus[i].src = "img/pRojo.png"
             }
             else{
            iconoStatus[i].src = "img/pBlanco.png"
            }
    }
        apiSig = json.info.next
        apiAnt = json.info.prev
        speciesCard[i].innerHTML = json.results[contador].species
        originNameCard[i].innerHTML = json.results[contador].origin.name
        contador += 1
    }
    contador=0;
}


//Función donde se captura la información necesaria para ser mostrada en el html
function agregarMas(){
    var contenedorInicial = document.getElementById("contenedor")
    
    var divThreeColumns = document.createElement("div")
    divThreeColumns.className = "three-columns"
    var divCard = document.createElement("div")
    divCard.className = "card"
    var imgCard = document.createElement("img")
    imgCard.className = "imagenCard"
    imgCard.src = "img/avatar.jpg"
    imgCard.style = "width:100%"
    var divTituloCard = document.createElement("div")
    divTituloCard.className = "tituloCard"
    var divTwoColumns = document.createElement("div")
    divTwoColumns.className = "two-columns"
    var divColumnaIzq = document.createElement("div")
    divColumnaIzq.className = "columnaIzq"
    var iconoStatus = document.createElement("img")
    iconoStatus.className = "iconoStatus"
    var divColumnaDer = document.createElement("div")
    divColumnaDer.className = "columnaDer"
}


//funcionalidad botón siguiente
function clickBoton(){
    if(apiSig == null){
        
        var but=document.getElementById('sig')
        but.disabled=true
    }else {
        getData(apiSig)
}
    
    
//funcionalidad botón anterior
}function clickBotonAnt(){
        getData(apiAnt)
    
}

getData(API)
