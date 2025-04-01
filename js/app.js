function adicionar() {
  const input = document.getElementById("input");
  const lista = document.getElementById("lista");
  const li = document.createElement("li");
  let text = input.value;
  li.innerHTML = text;
  lista.appendChild(li);
  input.value = "";
  input.focus();
}

function limpar() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";
}
