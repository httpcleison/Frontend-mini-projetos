let musicas = [
    {
        "autora": "Lana Del Ray",
        "foto_album": "./musicas/LDR/album_foto.jpg",
        "musicas": [
            {
                "titulo": "Born to die",
                "caminho": "./musicas/LDR/Born To Die.mp3" 
            },
            {
                "titulo": "Hollywood Bowl",
                "caminho": "Hollywood Bowl.mp3" 
            },
            {
                "titulo": "Sweet",
                "caminho": "Sweet.mp3" 
            },
            {
                "titulo": "Summertime Sadness",
                "caminho": "Summertime Sadness.mp3" 
            },
            {
                "titulo": "The Grants",
                "caminho": "The Grants.mp3" 
            },
            {
                "titulo": "West Coast",
                "caminho": "West Coast.mp3" 
            }
        ]
    }
]
//elementos
let div_musics = document.querySelector(".musics");
let btn_play = document.querySelector(".btn_play");
let li_music = document.querySelectorAll("li");
let btn_next = document.querySelector(".btn_next");
let btn_back = document.querySelector(".btn_back");
//controles
let play = false;
let album = 0;
let music = 0;
let audio;
let netxMusic = 0;
let backMusic;
let limit_Music;
let music_atual;
let pos_atual;

function NextMusic(li){
    audio.pause();
    musicas[album].musicas.forEach((tittle)=>{
        if(tittle.titulo == li){
            pos_atual = musicas[album].musicas.indexOf(tittle)
            if(pos_atual >= 0 &&  pos_atual <= limit_Music){
                pos_atual += 1
                netxMusic = pos_atual;
                audio = new Audio("./musicas/LDR/"+musicas[album].musicas[netxMusic].titulo+".mp3")
                audio.play();
                music_atual = musicas[album].musicas[netxMusic].titulo;
                document.querySelector(".titulo").innerText = musicas[album].musicas[netxMusic].titulo+" - "+musicas[album].autora;
            }
        }
    })
}

function BackMusic(li){
    audio.pause();
    musicas[album].musicas.forEach((tittle)=>{
        if(tittle.titulo == li){
            pos_atual = musicas[album].musicas.indexOf(tittle)
            if(pos_atual >= 0 &&  pos_atual <= limit_Music){
                pos_atual -= 1;
                netxMusic = pos_atual;
                audio = new Audio("./musicas/LDR/"+musicas[album].musicas[netxMusic].titulo+".mp3")
                audio.play();
                music_atual = musicas[album].musicas[netxMusic].titulo;
                document.querySelector(".titulo").innerText = musicas[album].musicas[netxMusic].titulo+" - "+musicas[album].autora;
            }
        }
    })
}

function playAudio(li){
    audio = new Audio("./musicas/LDR/"+li.innerText+".mp3");
    audio.play();
    play = false;
    btn_play.innerHTML = '<a class="btn_play"><ion-icon name="pause-circle"></ion-icon></a>'
}

function pauseAudio(){
    audio.pause();
    btn_play.innerHTML = '<a class="btn_play"><ion-icon name="play-circle"></ion-icon></a>'
}

function updateButton(){
    if(play){
        btn_play.innerHTML = '<a class="btn_play"><ion-icon name="pause-circle"></ion-icon></a>'
        play = false;
        audio.play();
    } else{
        btn_play.innerHTML = '<a class="btn_play"><ion-icon name="play-circle"></ion-icon></a>'
        play = true;
        pauseAudio();
    }
}

function update(){
    document.querySelector(".foto").src = musicas[album].foto_album;
    limit_Music = musicas[album].musicas.length
    musicas[album].musicas.forEach((musicaa)=>{
        // $
        div_musics.innerHTML += `<li>${musicaa.titulo}</li>`;
        document.querySelectorAll("li").forEach((li)=>{
            li.addEventListener("click", ()=>{
                playAudio(li);
                music_atual = li.innerText;
                document.querySelector(".titulo").innerText = li.innerText+" - "+musicas[album].autora;
            })
        })
    })
    
}

update();
btn_play.addEventListener("click", updateButton);
btn_next.addEventListener("click", ()=>{
    NextMusic(music_atual);
})
btn_back.addEventListener("click", ()=>{
    BackMusic(music_atual);
})