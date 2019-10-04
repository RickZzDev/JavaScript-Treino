const alunos =
[ 
    {
        "nome":"carlos",
        "idade":19,
        "uf":"SP",
        "salario": 1200
    },
    {
        "nome":"igor",
        "idade":19,
        "uf":"SP",
        "salario": 1400
    },
    {
        "nome":"josé",
        "idade":18,
        "uf":"RJ",
        "salario": 1100
    },
    {
        "nome":"maria",
        "idade":18,
        "uf":"MG",
        "salario": 1150
    },
    {
        "nome":"ana",
        "idade":20,
        "uf":"RJ",
        "salario": 1150
    }
];



const $dados = document.getElementById('dados');




const mostrarDados = (json) =>{
    //    var $tamanhoArray = json.length;
    //    let valores = "";
    //     for(let i= 0;i<$tamanhoArray;i++){
    //         valores += json[i].nome + "-" +  json[i].uf + "<br>";
    //     }

    //     return valores;

    const criarHtml = (html,alunos)=> html + alunos.nome + "-"+ alunos.idade + " " + alunos.salario + "<br>";
    
    

    return json.reduce(criarHtml,"")

}

//FUNÇÕES
const alunosSP = (aluno) => aluno.uf == "SP";
const somaSalario = (acc,aluno) => acc + aluno.salario;
// const aumentaSalario = (alunos) => alunos.salario + 100;
const aumentaSalario = (alunos) => ({"nome":alunos.nome, "idade": alunos.idade,"salario": alunos.salario + 100, });
const salarioMenorQueMil = (alunos) => alunos.salario < 1000;

var alunosDeSp = alunos.filter(alunosSP);
var salariosInferiores = alunosDeSp.filter(salarioMenorQueMil);


$dados.innerHTML = mostrarDados(alunos)
$dados.innerHTML += "-------------SP-----------<br>";
$dados.innerHTML += mostrarDados(alunos.filter(alunosSP));
$dados.innerHTML += "----TOTAL SALARIOS--------------------<br>";
$dados.innerHTML += alunos.reduce(somaSalario,0);
$dados.innerHTML += "<br>----------NOVOS SALARIOS--------------<br>";

$dados.innerHTML += mostrarDados(alunos.map(aumentaSalario));

$dados.innerHTML += "<br>----------NOVOS SALARIOS DE SP--------------<br>";
$dados.innerHTML += mostrarDados(alunosDeSp.map(aumentaSalario));

$dados.innerHTML += "<br>----------INFERIORES--------------<br>";
$dados.innerHTML += mostrarDados(salariosInferiores);


