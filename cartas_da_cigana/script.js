let frasesCigana = [
    {
        "mensagem": "Moça(o), a vida é curta demais para sofrer, seja feliz! Mantenha por perto quem te deseja, é os incovenientes, exclua!"
    },
    {
        "mensagem": "Hoje não e appenas um novo dia, tambem chances de realizar seus sonhos!"
    },
    {
        "mensagem": "Você é uma pessoa incrível! Até mais do que as pessoas que lhe inspiram, confie mais em você!"
    },
    {
        "mensagem": "Às vezes nem tudo espiritual, pode ser tambem falta de vitamina, falta de sociabilidade e tudo que deixa voce pra baixo! Anime-se."
    }
]
let carta_escolhida;
let div_cartas = document.querySelectorAll("body div");
let mensagem;

function mensagemFunc(max, min, carta){
    mensagem = Math.floor(Math.random() * (max - min + 1)) + min;
    if(carta_escolhida != undefined){
        let carta_atras = carta.querySelector(".atras")
        let carta_frente = carta.querySelector(".frente")
        carta_atras.innerHTML = "<img src='./cigana.jpg'> <p>"+frasesCigana[mensagem].mensagem+"</p>"
        carta_frente.style.transform = "rotateY(180deg)"
        carta_atras.style.transform = "rotateY(0deg)"
    }
}

div_cartas.forEach((carta)=>{
    carta.addEventListener("click", ()=>{
        if(carta.classList == "carta1" && carta_escolhida == undefined){
            carta_escolhida = 1;
            mensagemFunc(3, 0, carta)
        }else if(carta.classList == "carta2" && carta_escolhida == undefined){
            carta_escolhida = 2;
            mensagemFunc(3, 0, carta)
        }else if(carta.classList == "carta3" && carta_escolhida == undefined){
            carta_escolhida = 3;
            mensagemFunc(3, 0, carta)
        }
    })
})