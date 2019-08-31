$valorMinimo = document.getElementById("minimo");
$valorMaximo = document.getElementById("maximo");
$btnPar = document.getElementById("pares");
$btnFibonacci = document.getElementById("fibonacci");
$btnPrimo = document.getElementById("primo");
$btnFatorial = document.getElementById("fatorial");
$txtArea = document.getElementById("resultado");
const Array2 = [0,1];
const ArrayNew = [0,1];
const ArrayPar = [];



const Pares = () =>{
    
    var maximo = parseInt($valorMaximo.value);
    var minimo = parseInt($valorMinimo.value);
    console.log(typeof(maximo));
    
     for(let a =minimo; a<=maximo;a++){
         console.log("teste");
         if(a%2==0){
            var NovaArray = ArrayPar.push(a);
 
            
            console.log(ArrayPar);
          
         }else{
             
         }
       
       

     }
//     Array2.splice(0,$valorMinimo.value);
     $txtArea.value = (ArrayPar);
 }

 const Fibonacci = () => {
     var minimo2 = parseInt($valorMinimo.value);
     var maximo2 = parseInt($valorMaximo.value);
     for(let f=minimo2; f<=maximo2;f++){

         /*Função para somar os elementos de um vetor*/
         const somar2 = ( soma , num) => soma + num;

        
         /*Usei o push para incrementar um valor no fim do array
          e esse valor por sua ver é a soma dos dois ultimos
          usando o reduce*/
         const Fibo = ArrayNew.push(ArrayNew.reduce(somar2));
       
       
        
       /*Criei uma variavel para guardar o resltado da soma de cada
       dupla de numeros*/
         const resultado = ArrayNew[ArrayNew.length - 1];
        
        
         /*Criei um novo vetor só com os resultados */
          const NovaArray = Array2.push(resultado);
         /*Esta linha serve para cortar o vetor e deixar apenas os 2
         ultimos para serem somados */
         ArrayNew.splice(0,ArrayNew.length-2,0);
         /*Exibe na tela o array ja com a sequencia */
         
        //console.log(ArrayNew.reduce(somar2))
      
        
  
 }

    $txtArea.value = (Array2);
}




/*************************************************************************************** */
/*Fatorial pronta, só faltando adicionar os botoes para chamar as fuçoes */


 const Fatorial = () =>{
     const Array3 = [];


     const Array3N = [];
     const auxiliaNois = $valorMinimo.value;
     const auxiliaNois2 = $valorMaximo.value;
     for(let fa=1; fa<10;fa++){
    

         const fatorial = (mult, num) => mult * num;
         const NovoArray = Array3.push(fa);
         const fatorial2 = Array3.reduce(fatorial);
       
         // console.log(Array3);
         // console.log(Array3.reduce(fatorial));
         NovoArray2 = Array3N.push(Array3.reduce(fatorial));
        
    
     }
    
     Array3N.splice(0,auxiliaNois -1)
     Array3N.splice(auxiliaNois2 - auxiliaNois + 1)
     $txtArea.value = (Array3N);
 }




/********************************************************************************************** */

/*LÓGICA QUE NÃO BATEU, ESQUECE ESSA PARTE */
// const valorInicial = 10;
// const Array4 = [];
// const ArrayNew4 = [];
// for (let z =valorInicial; z >=0 ; ){
    
//         const primo = (div, num) =>div / num;
   
//         const NovoArray4 = Array4.push(z);
//         const guardaValor = Array4.reduce(primo)
        
//         const resultado = Array4[Array4.length - 1];
//         console.log(Array4 + " Primeiro aray do loop")
        
//         console.log(Array4.reduce(primo) + " Result divisao")
//         console.log(Array4[Array4.length -2] + "deve ser o primeiro" )
//         console.log(resultado + " Segundo numero");
//         if(Array4[Array4.length - 2] % resultado == 0 &&Array4.reduce(primo)<valorInicial ){
//             console.log("entrou no if")
//             console.log(Array4.reduce(primo))
//             Array4.splice(0,Array4.length - 0)
          
//             for(let n2 = 0; n2>10000;){
               
//             }
//             n2++




            
//              z = valorInicial - n2;
            
//         }

//         const ArrayPrimo = []
//         const ArrayPrimoAuxiliar = []
    
//         if(Array4[Array4.length - 2]==z && resultado == 0){
//             ArrayPrimoAuxiliar = ArrayPrimo.push(Array4[Array4.length - 2]);
//             n2++
//             z = valorInicial - n2;
//         }


    
        
//         console.log(Array4 + " Ultimo Array do loop")
//         Array4.splice(1,1);
        
//         Array4.splice(0,Array4.length-1);
        
//         z--
    
  
   
// }

/********************************************************************************************************************************************* */



/*ESTE AQUI EH O QUE DEU CERTO, NUMERO PRIMO PRONTO, SÓ FALTANDO INCREMENTAR COM O BOTAO */


/*O BUG PERCEBIDO NESTE PROBLEMA FOI QUE ARRAY QUE CAPTURAVA OS NUMEROS PRIMOS NÃO ESTAVA FAZENDO 
A TROCA DO PRIMEIRO TERMO DO ARRAY*********************************************
*/ 


const numeroPrimo =() =>{
    const valorInicial = 8
    const Array4 = [];
    const ArrayNew4 = [];
    const ArrayPrimos = [];
    var maximo1 = parseInt($valorMaximo.value);
    var minimo1 = parseInt($valorMinimo.value);
    
    for (let z =maximo1; z >minimo1; ){
            console.log("entrou");
            for(let y =z-1;y>=0;){
    
                const boleana = new Boolean(false)
                
                const primo = (div, num) =>div / num;
                const ArraySup = Array4.push(z,y)
                
                const guardaValor = Array4.reduce(primo)
                
                Array4.splice(1,Array4.length - 2);
      
//                console.log(Array4)
    
                
                
                if(z%y ==0 &&  y>1){
         
                    z--
                    Array4.splice(0,z)
      
                    break;
                    
                }else{
                    y--
                }
                if(y==0){
                    const ArrayPrimosAuxiliar = ArrayPrimos.push(z) ;
//                    console.log(ArrayPrimos)
                    z--
                    Array4.splice(0,z)
//                    console.log(z)
    
                    break;
    
    
                } 
    
                
                
            }
            
            
            // z--;
            
            
        
      
       
    }
   $txtArea.value = (ArrayPrimos);
}



$btnFatorial.addEventListener("click", Fatorial );
$btnPrimo.addEventListener("click", numeroPrimo );
$btnFibonacci.addEventListener("click", Fibonacci);
$btnPar.addEventListener("click", Pares );