let produtos = [
    {
        "nome": "POLTRONA",
        "desc": "Poltrona nas cores branca, azul-ciano e no tom de amarelo claro.",
        "preco": 220.00,
        "img": "./imagens/poltrona.jpg"
    },
    {
        "nome": "MESA DE SALA",
        "desc": "Mesa de sala propria para decoração.",
        "preco": 190.00,
        "img": "./imagens/mesa de sala.jpg"
    },
    {
        "nome": "BANCADA",
        "desc": "Bancada disponivel nos modelos de marmore e madeira.",
        "preco": 230.00,
        "img": "./imagens/bancada.jpg"
    }
]
let container = document.querySelector(".container");
let carrinho = [];
let produto_div;
let item;
let precos = [];
let adicionadosSoma = [];
let SomaTotal = 0

produtos.forEach((produto)=>{
    let div_create = document.createElement("div")
    div_create.setAttribute("class", "item");
    div_create.innerHTML = `<img src="${produto.img}"> <h5>${produto.nome}</h5> <p>${produto.desc}</p> <h3>$${produto.preco}</h3>`
    container.appendChild(div_create);
    produto_div = document.querySelectorAll(".item");
})

function SomaCarrinho(p){
    SomaTotal += Number(p.replace("$",""))
    document.querySelector(".total h3").innerHTML = "TOTAL: $"+SomaTotal;
}

function Carrinho(){
    carrinho.forEach((p)=>{
        let div_carrinho = document.createElement("div");
        div_carrinho.setAttribute("class", "produto");
        div_carrinho.innerHTML += `<img src="./chair.png"> <div><h5>${p.item}</h5> <h3>${p.preco}</h3></div>`
        document.querySelector(".itens").appendChild(div_carrinho);
        carrinho.pop(p);
        adicionadosSoma.push(p);
        SomaCarrinho(p.preco);
    })
}

produto_div.forEach((produto)=>{
    produto.addEventListener("click", ()=>{
        item = produto.querySelector("h5").innerText;
        produtos.forEach((produto2)=>{
            if(produto2.nome == item){
                carrinho.push({"item": item, "preco": produto.querySelector("h3").innerText})
                Carrinho();
            }
        })
    })
})