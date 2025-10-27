// Máscaras simples de input
document.addEventListener('DOMContentLoaded', () => {
  const cpf = document.getElementById('cpf');
  const telefone = document.getElementById('telefone');
  const cep = document.getElementById('cep');

  const aplicarMascara = (input, mascara) => {
    input.addEventListener('input', () => {
      let valor = input.value.replace(/\D/g, '');
      let novoValor = '';
      let j = 0;
      for (let i = 0; i < mascara.length && j < valor.length; i++) {
        novoValor += mascara[i] === '9' ? valor[j++] : mascara[i];
      }
      input.value = novoValor;
    });
  };

  if (cpf) aplicarMascara(cpf, '999.999.999-99');
  if (telefone) aplicarMascara(telefone, '(99) 99999-9999');
  if (cep) aplicarMascara(cep, '99999-999');
});
