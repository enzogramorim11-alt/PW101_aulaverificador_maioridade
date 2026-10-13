function verificarIdade() {
 
  const elementoInput = document.getElementById("campoIdade");
  const idadeDigitada = parseInt(elementoInput.value);
  const elementoResultado = document.getElementById("mensagemResultado");


  if (isNaN(idadeDigitada)) {
    elementoResultado.innerText =
      "Por favor, digite uma idade numérica válida.";
    elementoResultado.style.color = "#693579ff";
    return;
  }
  if (idadeDigitada < 14) {
    elementoResultado.innerText = "O usuário é uma criança.";
  } else if (idadeDigitada >= 14 && idadeDigitada <= 19) {
    elementoResultado.innerText = "O usuário é um adolescente.";
  } else if (idadeDigitada >= 20 && idadeDigitada <= 59) {
    elementoResultado.innerText = "O usuário é um adulto.";
  } else if (idadeDigitada >= 60) {
    elementoResultado.innerText =
      "O usuário pertence à terceira idade (atendimento preferencial).";
  }

  elementoResultado.style.color = "#32e0a6ff";
}