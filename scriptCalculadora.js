let valor01 = document.getElementById('caixa-valor1').value;
let valor02 = document.getElementById('caixa-valor2').value;

const botaoSoma = document.querySelector('#soma')


// Calculo da soma dos números
botaoSoma.addEventListener('click', () => {
    let resultadoSoma = valor01 + valor02;
    alert(resultadoSoma)
});

