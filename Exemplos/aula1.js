let n1 = 10; //Variavel imutavel de escopo local
let n2 = 10; //Escopo local, permite ser alterada 
var n3 = 10; // var é uma variavel global


/*"n1."*/ // Quando é digitado o ponto depois do nome da variavel automaticamente é mostrado os metodos referentes ao tipo de dado
/*Tipos de funções:
    1)
    function nomeDaFunção(parametros){
        códigos;
    }

    2)Variavel com uma função
    const nomeDafunção = function(parametros){
        código;
    }

    3)Função em uma mesma linha usando arrow
    const nomeDaFunção = ( parametros ) => num1 + num2;

*/
//const soma = (num1,num2) => num1 + num2;



/*Estrutura de decisão
if( n1 > 5 ){
    resultado = n1 + n2;
}else{
    resultado = "menor que 5";
}
*/

const $num1 = document.getElementById("Numero1");
const $num2 = document.getElementById("Numero2");
const $somar = document.getElementById("btnSomar");
const $resultado = document.getElementById("Resultado");

const soma = () => {
    $resultado.value = parseInt($num1.value)  + parseInt($num2.value);
}

$somar.addEventListener("click", soma);