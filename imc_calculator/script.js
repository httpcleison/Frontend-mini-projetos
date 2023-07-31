let altura = document.querySelector(".altura_campo");
let peso = document.querySelector(".peso_campo");
let res_text = document.querySelector(".resultado");

function calcular(peso, altura){
    let resultado = Math.round(peso / (altura * altura));
    if(resultado < 16.9){
        res_text.innerText = "Seu IMC é: "+resultado+" -Muito abaixo do peso.";
    }else if(resultado >= 17 && resultado <= 18.4){
        res_text.innerText = "Seu IMC é: "+resultado+" -Abaixo do peso.";
    }else if(resultado >= 18.5 && resultado <= 24.9){
        res_text.innerText = "Seu IMC é: "+resultado+" -Peso normal";
    }else if(resultado >= 25 && resultado <= 29.9){
        res_text.innerText = "Seu IMC é: "+resultado+" -Acima do peso";
    }else if(resultado >= 30 && resultado <= 34.9){
        res_text.innerText = "Seu IMC é: "+resultado+" -Obesidade |";
    }else if(resultado >= 35 && resultado <= 39.9){
        res_text.innerText = "Seu IMC é: "+resultado+" -Obesidade ||";
    }else if(resultado > 40){
        res_text.innerText = "Seu IMC é: "+resultado+" -Obesidade |||";
    }
}

altura.addEventListener("keypress", ()=>{
    let inputAlturaMask = altura.value.length;
    if(inputAlturaMask === 1){
        altura.value += '.'
    }
})

document.querySelector("button").addEventListener("click", ()=>{
    if(altura.value == "" && peso.value == "" || altura.value == "" || peso.value == ""){
        alert("É necessario de todas as informações!");
    }else{
        calcular(peso.value, altura.value);
    }
});