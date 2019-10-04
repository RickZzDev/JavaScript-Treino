/*****************Exercicio 1 concluido */
let ArrayAleatorio =[]
let ArrayPar = []
let ArrayQuadrado = []
let ArrayNovo = []
$container = document.getElementById('container')

for(let i = 1;i<=30;i++)
{
    let teste = Math.floor(Math.random() * 21)
    ArrayAleatorio.push(teste)
   
}

/************************************************* */
/***********************Exercicio 2 feito */
console.log(ArrayAleatorio)
for(let a = 0;a<=30;a++)
{
    if(ArrayAleatorio[a] % 2 ==0){
        ArrayPar.push(ArrayAleatorio[a])
    }
    
}

console.log(ArrayPar)

/******************************************* */

/********************Exercicio 3 Feito */
console.log(ArrayAleatorio + " AQUI")
for(let b = 0;b<=29;b++)
{
  var quadrado = Math.pow(ArrayAleatorio[b], 2)

  ArrayQuadrado.push(quadrado)
    
}

console.log(ArrayQuadrado)

/************************************************* */



let ArrayTeste =    ArrayAleatorio;




let cont = 0;


 for(let a = 0; a<=29;){
     for(let b = 0; b<=29; b++){
        if(ArrayAleatorio[a] == ArrayTeste[b]){
            cont++
        }
    }

    if(cont<=1){
        ArrayNovo.push(ArrayTeste[a])
    }

    cont = 0;
    a++
 }

console.log(ArrayAleatorio)
 console.log(ArrayNovo)


/********************************************************************************/
/*Envia ja para o HTML um Array dividido em tr e tds*/

/*Passa como parametro necessario o header e o title*/
const exibirArray = (ArrayAleatorio, header, title="") => {
    html = `
    <div class="card bg-dark text-white">
    
    <div class="card-header"> ${header} </div>
    
    <div class="card-body">
            <h5 class="card-title"> ${title}</h5>
            <p class="card-text"> ${ArrayAleatorio.join(" ")}</p>
     </div>
    </div>`
    
    return html;
}

const numeros = ArrayAleatorio;



/*O += serve para concatenar os cards e nao sobrescrever os dados*/
$container.innerHTML = exibirArray(numeros,"Numeros Aleatorios","Aleatorio")



const epar = (num) => num%2 == 0;
const filtrarPares = (ArrayAleatorio) => ArrayAleatorio.filter(epar)


const numerosPares = filtrarPares(ArrayAleatorio);





const quadro = (num) => num * num;
const arrayQuadrado = (ArrayAleatorio) => ArrayAleatorio.map(quadro);
const arrayAoQuadrado = arrayQuadrado(ArrayAleatorio)

//const arrayUnico = eUnico(ArrayAleatorio)



const eUnico =  (ArrayAleatorio) => {

     for(let a = 0; a<=29;){
     for(let b = 0; b<=29; b++){
        if(ArrayAleatorio[a] == ArrayTeste[b]){
            cont++
        }
    }

    if(cont<=1){
        ArrayNovo.push(ArrayTeste[a])
    }

    cont = 0;
    a++
 }

console.log(ArrayAleatorio)
 console.log(ArrayNovo)
    return ArrayNovo;

}


$container.innerHTML += exibirArray(numerosPares,"Numeros Pares", "Pares")
$container.innerHTML += exibirArray(arrayAoQuadrado, "Numeros ao quadrado", "quadrado");
//$container.innerHTML += exibirArray(arrayUnico);
