function calcular() {
    var produto = parseFloat(document.getElementById('produto').value);
    var frete = parseFloat(document.getElementById('frete').value);
    var impostos = parseFloat(document.getElementById('impostos').value);
    var porcentagem = parseFloat(document.getElementById('porcentagem').value);

    if (isNaN(produto) || isNaN(frete) || isNaN(impostos) || isNaN(porcentagem)) {
        alert('Por favor, insira valores válidos.');
        return;
    }

    var prod_Frete = produto + frete;
    var imposAplicado = ((prod_Frete * impostos) / 100) + prod_Frete;
    var lucroAplicado = (imposAplicado * porcentagem) / 100;

    var ValFinal = imposAplicado + lucroAplicado;

    document.getElementById('lucroLiqui').innerText = `Lucro Total: R$ ${lucroAplicado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
    document.getElementById('valFinal').innerText = `Valor Final: R$ ${ValFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
}