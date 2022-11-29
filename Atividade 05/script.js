
function enviarForm() {
  event.preventDefault();

  var dados = {}

  var form = document.querySelector("#formulario");

  dados.nome = form.name.value;
  dados.email = form.email.value;
  dados.msg = form.msg.value;
  dados.maiorIdade = form.maior_Idade.checked;
  dados.newsletter = form.checkbox.checked;
  dados.idade = parseInt(form.idade.value);

  console.log(dados);
}

function limparForm() {
  window.location.reload(true);
}