let filmeParaAssistir = [];
let filmesAssistidos = []; 


  const appDiv = document.getElementById('app');
  appDiv.innerHTML = `
  <button onclick="adicionarFilme()">Adicionar Filme</button>
  <button onclick="ordenarFilme()">Ordenar</button>
  <button onclick="pesquisarFilme()">Pesquisar</button>
  <button onclick="exibirFilme()">Exibir</button>
  <button onclick="marcarFilme()">Marcar como assistido</button>
  <button onclick="removerFilme()">Remover</button>
  <button onclick="encerrar()">Encerrar</button>
  `

function adicionarFilme(){
  let nomeFilme = prompt("Digite o nome do filme:");
  let anoFilme = prompt("Digite o ano que foi lancado o filme:");
  const filme = new Object({
    title: nomeFilme,
    year: anoFilme
  })
  filmeParaAssistir.push(filme);
}

function ordenarFilme(){
  let escolha = prompt("Escolha a ordenação:\n1 - Ordenar por título\n2 - Ordenar por ano");

  if (escolha === "1") {
    filmeParaAssistir.sort((a, b)=>{
      return a[a.title] - b[b.title]
    });
  } else if (escolha === "2") {
    filmeParaAssistir.sort((a, b) => a.year - b.year);
  }
 
}

function pesquisarFilme(){

}

function exibirFilme(){
 
}
