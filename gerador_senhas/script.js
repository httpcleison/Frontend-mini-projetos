//Declarações das variaveis com valor de elementos HTML
let inputRangeLength = document.querySelector(".inputRangeLength");
let inputletraMin = document.querySelector(".letrasMinusculas");
let inputletraMai = document.querySelector(".letrasMaiusculas");
let inputNum = document.querySelector(".numeros");
let inputSimbols = document.querySelector(".simbolos");
let buttonGerar = document.querySelector(".gerar")

///Declarações das variaveis das opções da senha à ser gerada
let numeros = [1,2,3,4,5,6,7,8,9,0];
let simbols = ["!", "@", "#", "$", "%", "&", "*", "(", ")", "+", "-", "?", "/"];
let caracter = Array.from(Array(26)).map((_, i) => i + 97);
let lowerCaracter = caracter.map((item)=>String.fromCharCode(item));
let upperCaracter = lowerCaracter.map((item)=>item.toUpperCase());
let password;

//
document.querySelector(".infoLength").innerHTML = inputRangeLength.value;
inputRangeLength.addEventListener("click", ()=>{
    document.querySelector(".infoLength").innerHTML = inputRangeLength.value;
})

function GerarSenha(num, sim, lower, upper, length){
    const newArray = [
        ...(num ? numeros : []),
        ...(sim ? simbols : []),
        ...(lower ? lowerCaracter : []),
        ...(upper ? upperCaracter : [])
    ]

    if(newArray.length == 0){
        alert("error!")
    }

    password = "";

    for(let i = 0;i < length; i++){
        const random = Math.floor(Math.random() * newArray.length);
        password += newArray[random];
    }

    document.querySelector(".password").value = password
    document.querySelector(".password").setSelectionRange(0, 9999);
    navigator.clipboard.writeText(document.querySelector(".password").value)
    alert("senha copiada!")
}

buttonGerar.addEventListener("click", ()=>{
    GerarSenha(
        inputNum.checked,
        inputSimbols.checked,
        inputletraMin.checked,
        inputletraMai.checked,
        inputRangeLength.value
    )
})