const imagem = document.querySelector("#imagem")
console.log(imagem)

const url = 'https://rickandmortyapi.com/api/character';
function RickAndMorty(){
    fetch(url,{
        method: 'GET',
    })

    .then((resposta) => resposta.json())
    .then((dados) =>{
        console.log(dados)
    })
    .catch(erro => alert(erro))

}
function imprimirDados(dados){
    dados.results.forEach(element =>{
        imagem.innerHTML= '<img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg ${element.id}.jpeg">'

    });

}

RickAndMorty()