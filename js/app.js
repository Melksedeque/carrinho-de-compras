function adicionar() {
  let produto = document.getElementById("produto").value;
  let nomeProduto = produto.split("-")[0];
  let valorUnitario = produto.split("R$")[1];
  let quantidade = document.getElementById("quantidade").value;
  let preco = quantidade * valorUnitario;

  alert("Produto: " + nomeProduto);
  alert("Valor Unitário: " + valorUnitario);
  alert("Quantidade: " + quantidade);
  alert("Preço: " + preco);
}

function limpar() {}
