let moedas = 200;
let Texto_Moedas = document.querySelector(".moedas");
let lampada = document.querySelector(".lampada");
let Status;

function acenderLamp(){
    if(Status != "quebrada"){
        lampada.setAttribute('src', './img/ligada.jpg')
        document.querySelector("button").innerHTML = "DESLIGAR";
        moedas += 1;
        document.querySelector(".moedas").innerText = "MOEDAS: "+moedas;
    }
}

function desligarLamp(){
    if(Status != "quebrada"){   
        lampada.setAttribute('src', './img/desligada.jpg');
        document.querySelector("button").innerHTML = "LIGAR";
    }
}

function quebrarLamp(){
    if(Status != "quebrada"){
        lampada.setAttribute('src', './img/quebrada.jpg')
        document.querySelector("button").innerHTML = "COMPRAR OUTRO: 1000MOEDAS";
        Status = "quebrada";
    }
}

function comprarLamp(){
    if(moedas >= 1000){
        Status = "";
        lampada.setAttribute('src', './img/desligada.jpg');
        moedas -= 1000;
        document.querySelector(".moedas").innerText = "MOEDAS: "+moedas;
        document.querySelector("button").innerHTML = "LIGAR";
    }else{
        alert("Você não tem moedas suficentes!")
    }
}

function verificarMetodo(){
    if(document.querySelector("button").innerText == "LIGAR"){
        acenderLamp();
    } else if(document.querySelector("button").innerText == "DESLIGAR"){
        desligarLamp();
    } else {
        comprarLamp();
    }
}

document.querySelector("button").addEventListener("click", verificarMetodo);
lampada.addEventListener("mouseover", acenderLamp);
lampada.addEventListener("mouseout", desligarLamp);
lampada.addEventListener("click", quebrarLamp);