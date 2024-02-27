//capturar os evebtos do formulario
const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    const inputPeso = e.target.querySelector('#peso')

    const peso = Number (inputPeso.value)
    console.log(inputPeso)
    console.log(peso)

    const inputAltura = e.target.querySelector('#altura')

    const altura = Number(inputAltura.value)
    console.log(inputAltura)
    console.log(altura)

    const imc = calcularimc(peso, altura)
    console.log(imc)
})

//função para calcular o imc e retornar o valor do imc com duas casas decimais
function calcularimc(peso, altura){
    let imc = (peso / altura **2);
    return imc.toFixed(2);

}
 