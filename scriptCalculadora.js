// Retorno ao usuário escolher a opção Soma
const botaoSoma = document.querySelector('#soma');

botaoSoma.addEventListener("click" , () => {
    let valor01 = document.querySelector('#valor1').value;
    let valor02 = document.querySelector('#valor2').value;

    var valorSoma = (parseFloat(valor01) + parseFloat(valor02));

    document.getElementById('caixa-resultado').innerHTML = valorSoma;
});

// Retorno ao usuário escolher a opção Subtração
const botaoSubtracao = document.querySelector('#subtracao');

botaoSubtracao.addEventListener("click" , () => {
    let valor01 = document.querySelector('#valor1').value;
    let valor02 = document.querySelector('#valor2').value;

    var valorSubtracao = (parseFloat(valor01) - parseFloat(valor02));

    document.getElementById('caixa-resultado').innerHTML = valorSubtracao;
});

// Retorno ao usuário escolher a opção Divisao
const botaoDivisao = document.querySelector('#divisao');

botaoDivisao.addEventListener("click" , () => {
    let valor01 = document.querySelector('#valor1').value;
    let valor02 = document.querySelector('#valor2').value;

    var valorDivisao = (parseFloat(valor01) / parseFloat(valor02));

    document.getElementById('caixa-resultado').innerHTML = valorDivisao;
});

// Retorno ao usuário escolher a opção Multiplicacao
const botaoMultiplicacao = document.querySelector('#multiplicacao');

botaoMultiplicacao.addEventListener("click" , () => {
    let valor01 = document.querySelector('#valor1').value;
    let valor02 = document.querySelector('#valor2').value;

    var valorMultiplicacao = (parseFloat(valor01) * parseFloat(valor02));

    document.getElementById('caixa-resultado').innerHTML = valorMultiplicacao;
});
