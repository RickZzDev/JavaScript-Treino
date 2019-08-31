const $img = document.getElementById('img')
const $amarelo = document.getElementById('amarelo')
const $verde = document.getElementById('verde')
const $vermelho = document.getElementById('vermelho')
const $automatico = document.getElementById('automatico')


const ligaCor = (cor) => {
    $img.src = "./img/" + cor + ".png"
}

var a=0
const automatico = () =>{
    
        if(a==0){
    
            ligaCor("vermelho")
            a=1
        }else if(a == 1){
            ligaCor("verde")
            a=2
        }else if(a == 2){
            ligaCor("amarelo")
            a = 0
             
            
        }
        
    
        
   
        
   
}



$amarelo.addEventListener("click",() => ligaCor("amarelo"))
$vermelho.addEventListener("click",() => ligaCor("vermelho"))
$verde.addEventListener("click",() => ligaCor("verde"))
$automatico.addEventListener("click",()=> setInterval(automatico,3000));

