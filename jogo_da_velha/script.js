let gamePositions = []
let vez = "bola";
let vez_quad;
let pos = [
    ["quad1", "quad2", "quad3"],
    ["quad4", "quad5", "quad6"],
    ["quad7", "quad8", "quad9"],
    ["quad1", "quad4", "quad7"],
    ["quad3", "quad6", "quad9"],
    ["quad1", "quad5", "quad9"],
    ["quad3", "quad5", "quad7"],
    ["quad2", "quad5", "quad8"]
]
let play = true;
let gameBola = [];
let gameQuad = [];
let pontosBola = 0;
let pontosQuad = 0;

//
let quads_game = document.querySelectorAll(".game div");

function verificarPositionsBola(){
    // let enontrar = pos1.every(pos => gameBola.includes(pos))
    pos.forEach((p)=>{
        let encontrar = p.every(pos => gameBola.includes(pos))
        if(encontrar){
            play = false;
            pontosBola += 1;
            document.querySelector(".txtBola").innerHTML = "BOLA: "+pontosBola
            setTimeout(()=>{
                quads_game.forEach((quad)=>{
                    quad.innerHTML = "";
                    play = true;
                    gamePositions = [];
                    gameBola = [];
                    gameQuad = [];
                })
            }, 500)
        } else if(gamePositions.length == 8){
            quads_game.forEach((quad)=>{
                quad.innerHTML = "";
                play = true;
                gamePositions = [];
                gameBola = [];
                gameQuad = [];
            })
        }else{}
    })
}

function verificarPositionsQuadrado(){
    pos.forEach((p)=>{
        let encontrar2 = p.every(pos => gameQuad.includes(pos))
        if(encontrar2){
            play = false;
            pontosQuad += 1;
            document.querySelector(".txtQuad").innerHTML = "QUADRADO: "+pontosQuad
            setTimeout(()=>{
                quads_game.forEach((quad)=>{
                    quad.innerHTML = "";
                    play = true;
                    gamePositions = [];
                    gameBola = [];
                    gameQuad = [];
                })
            }, 500)
        } else if(gamePositions.length == 8){
            quads_game.forEach((quad)=>{
                quad.innerHTML = "";
                play = true;
                gamePositions = [];
                gameBola = []
                gameQuad = [];
            })
        }else{}
    })
}


quads_game.forEach((quad)=>{
    quad.addEventListener("click", ()=>{
        if(vez == "bola" && play == true){
            quad.innerHTML = "<div class='bola'></div>";
            vez_quad = quad.classList[0];
            gameBola.push(vez_quad);
            vez = "quadrado";
            verificarPositionsBola()
            gamePositions.push("bola")
        }else if(vez == "quadrado" && play == true){
            quad.innerHTML = "<div class='quadrado'></div>";
            vez_quad = quad.classList[0];
            gameQuad.push(vez_quad);
            vez = "bola";
            verificarPositionsQuadrado()
            gamePositions.push("quadrado")
        }
    })
})