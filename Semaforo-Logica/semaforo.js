const $img = document.getElementById('img')
const $amarelo = document.getElementById('amarelo')
const $verde = document.getElementById('verde')
const $vermelho = document.getElementById('vermelho')
const $automatico = document.getElementById('automatico')


const ligar = (cor) => {
    $img.src = "./img/" + cor + ".png";
}

$vermelho.addEventListener("click",() => ligar("vermelho"))
$verde.addEventListener("click",() => ligar("verde"))
$amarelo.addEventListener("click", () => ligar ("amarelo"))


  let i = 0;
const automatico = () => {
        if(i==0){
            ligar("vermelho")
            i=1;
        }
        else if(i==1){
            ligar("amarelo")
            i=2
        }
        else if(i==2){
            ligar("verde")
            i=0
        }
setInterval(automatico,2000);
}



$automatico.addEventListener("click", () => automatico ())