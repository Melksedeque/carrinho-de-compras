let totalGeral = 0;
limpar();

function adicionar() {
  let produto = document.getElementById("produto").value;
  let nomeProduto = produto.split("-")[0];
  let valorUnitario = produto.split("R$")[1];
  let quantidade = document.getElementById("quantidade").value;
  let preco = quantidade * valorUnitario;
  let carrinho = document.getElementById("lista-produtos");
  let campoTotal = document.getElementById("valor-total");

  carrinho.innerHTML += `<section class="carrinho__produtos__produto">
  <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
  </section>`;

  totalGeral += preco;

  campoTotal.textContent = `Total: R$${totalGeral}`;

  document.getElementById("quantidade").value = 0;
}

function limpar() {
  totalGeral = 0;
  document.getElementById("lista-produtos").innerHTML = "";
  document.getElementById("valor-total").textContent = "Total: R$0";
}
