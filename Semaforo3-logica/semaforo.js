const $img = document.getElementById('img')
const $amarelo = document.getElementById('amarelo')
const $verde = document.getElementById('verde')
const $vermelho = document.getElementById('vermelho')
const $automatico = document.getElementById('automatico')
const $body = document.getElementById('body')

const ligaCor =(cor)=>{
    $img.src  = "./img/" +  cor + ".png";
}

var a =0;
var automatico = () =>{
    
    if(a==0){

        $img.src = "./img/vermelho.png"
        a=1
    }else if(a == 1){
        $img.src = "./img/verde.png"
        a=2
    }else if(a == 2){
        $img.src = "./img/amarelo.png"
        a = 0   
    }
    

}

var intervalo = 0;
var func = () =>{
    clearInterval(intervalo);
    intervalo = setInterval(automatico,1000);
}


$vermelho.addEventListener("mousemove", ()=> ligaCor("vermelho"));
$amarelo.addEventListener("mousemove",()=> ligaCor("amarelo"));
$verde.addEventListener("mousemove",()=> ligaCor("verde"));
$automatico.addEventListener("click",()=>func())



