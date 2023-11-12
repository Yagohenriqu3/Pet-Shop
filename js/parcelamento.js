function parcela1() {
    let valor = document.getElementById('valorProduto1').innerText;
    let valorNumerico = valor.match(/\d+/)[0];
    valorNumerico = parseInt(valorNumerico);
    let valorDesconto = valorNumerico / 5;
    document.getElementById('parcelamento1').innerHTML = 'ou 5x de R$' + valorDesconto.toFixed(2) + ' sem juros';
  }

  function parcela2() {
    let valor = document.getElementById('valorProduto2').innerText;
    let valorNumerico = valor.match(/\d+/)[0];
    valorNumerico = parseInt(valorNumerico);
    let valorDesconto = valorNumerico / 5;
    document.getElementById('parcelamento2').innerHTML = 'ou 5x de R$' + valorDesconto.toFixed(2) + ' sem juros';
  }

  function parcela3() {
    let valor = document.getElementById('valorProduto3').innerText;
    let valorNumerico = valor.match(/\d+/)[0];
    valorNumerico = parseInt(valorNumerico);
    let valorDesconto = valorNumerico / 5;
    document.getElementById('parcelamento3').innerHTML = 'ou 5x de R$' + valorDesconto.toFixed(2) + ' sem juros';
  }

  function parcela4() {
    let valor = document.getElementById('valorProduto4').innerText;
    let valorNumerico = valor.match(/\d+/)[0];
    valorNumerico = parseInt(valorNumerico);
    let valorDesconto = valorNumerico / 5;
    document.getElementById('parcelamento4').innerHTML = 'ou 5x de R$' + valorDesconto.toFixed(2) + ' sem juros';
  }
