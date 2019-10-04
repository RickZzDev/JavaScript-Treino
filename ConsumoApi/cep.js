const $cep = document.getElementById('cep');
const $logradouro = document.getElementById('logradouro');
const $numero = document.getElementById('numero');
const $bairro = document.getElementById('bairro');
const $cidade = document.getElementById('cidade');
const $estado = document.getElementById('estado');

//USAR POSTMON

encontrarCep = () =>{
    const cep = $cep.value;
    //REQUISITANDO A URL DA API
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    
    //ESTE FETCH PEGA A URL E A CADA THEN É FEITO UM "FILTRAGEM" DO QUE É RECEBIDO,
    // NA PRIMEIRA, É FILTRADO O JSON, E NA SEGUNDA ELE É RECEBIDO E MOSTRADO NA TELA 
    //MONSTRARDADOS VEM COMO CALLBACK, POIS ESTE DEVE SER EXECUTADO NA HORA CERTA
    fetch(url).then( res => console.log(res.json())).then(dados =>mostrarDados(dados));

    //FUNÇÃO QUE IRA MOSTRAR OS DADOS NA TELA, COLOCANDO COMO VALUE O QUE VEM DO 'DADOS' DO FETCH ACIMA
    const mostrarDados= (end) =>{
//        $bairro.value = end.bairro;
//        $logradouro.value = end.logradouro;
//        $cidade.value = end.localidade;
//        $estado.value = end.uf;
//        $numero.value = end.ibge;
       
        console.log(end);
        
    }
}


$cep.addEventListener('blur', encontrarCep);

