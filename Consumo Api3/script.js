const url = `https://api.hgbrasil.com/finance/quotations?key=development`
const proxi = `https://cors-anywhere.herokuapp.com/`

const $destino = document.getElementById('select_destino');
const $botao = document.getElementById('Calcular');




let fetchOpcoes = fetch(proxi + url);

fetchOpcoes.then(url => url.json()).then(url => mostra(url));

mostra = (url)=> {
    console.log(url.results.currencies)
    
}

pegaSelect = () => {
    console.log($destino.value)
}


$botao.addEventListener("click" ,()=> pegaSelect())

