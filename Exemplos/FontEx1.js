const $nome = document.getElementById("txtNomes");
const $media = document.getElementById("txtMedia");
const $situacao = document.getElementById("txtSituacao");
const $btn = document.getElementById("btnCalc");
const $caixa_principal = document.getElementById("caixa_principal");

const situ = () =>{
    if($media.value > 5){
        $situacao = "Aprovado";
    $caixa_principal.style = "background-color:green";
    }else{
        $situacao = "reprovado";
        $caixa_principal.style = "background-color:red";
    }
}

$btn.addEventListener("click",situ);
