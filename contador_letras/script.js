let txt_counter = document.querySelector(".txt_counter");
let campo_txt = document.querySelector(".textEnter");

campo_txt.addEventListener("input", ()=>{
    txt_counter.innerText = "Letras: "+campo_txt.value.length;
    if(campo_txt.value.length >= 20){
        campo_txt.classList.add("large")
    }else{
        campo_txt.classList.remove("large")
    }
})