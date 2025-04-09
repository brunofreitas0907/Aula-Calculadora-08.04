// Recebe os valores que o usuário digitou
let valor01 = document.getElementById('caixa-valor1').value;
let valor02 = document.getElementById('caixa-valor2').value;

// Recebe o clique do usuário no botão
const botaoSoma = document.querySelector('#soma');
const botaoSubtracao = document.querySelector('#subtracao');
const botaoDivisao = document.querySelector('#divisao');
const botaoMultiplicacao = document.querySelector('#multiplicacao');

// Funções dos calculos por operação
function subtracao()
{
    var valorSubtracao = valor01 - valor02;
    return valorSubtracao
}

function divisao()
{
    var valorDivisao = valor01 / valor02;
    return valorDivisao
}

function multiplicacao()
{
    var valorMultiplicacao = valor01 * valor02;
    return valorMultiplicacao
}

// Retorno ao usuário escolher a opção
botaoSoma.addEventListener("click" , () => {
    let valor01 = document.getElementById('#caixa-valor1').value;
    let valor02 = document.getElementById('#caixa-valor2').value;

    var valorSoma = (valor01 + valor02);

    console.log(valorSoma);
});
