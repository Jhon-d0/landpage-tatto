let imgSlider = document.querySelectorAll(".opacity-img .tela-da-imagem");
let btnProx = document.querySelector("#right");
let btnAnter = document.querySelector("#left");
let divOpacity = document.querySelector(".opacity-img");


let contadorImg = imgSlider.length;
let imgAtiva = 0;

btnProx.addEventListener("click", ()=>{
    imgAtiva++;
    if (imgAtiva >= contadorImg){
        imgAtiva = 0;
    }
    mostrarSlider();
})

btnAnter.addEventListener("click", ()=>{
    imgAtiva--;
    if(imgAtiva < 0){
        imgAtiva = contadorImg - 1;
    }
    
    mostrarSlider();
})

function imgFunction(valor){
    console.log(valor)
    divOpacity.classList.add("active");
    imgAtiva = valor;

    mostrarSlider()
}

function removeOpacity(){
    divOpacity.classList.remove("active")
}

function mostrarSlider(){
    let antigaImg = document.querySelector(".opacity-img .tela-da-imagem.active");

    antigaImg.classList.remove("active");

    imgSlider[imgAtiva].classList.add("active");
}
