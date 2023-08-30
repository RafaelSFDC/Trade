function validarCamposVazios(inputNames) {
  const camposVazios = {};

  inputNames.forEach(name => {
    const inputElement = document.getElementsByName(name)[0];
    const inputValue = inputElement.value.trim();

    if (inputValue === '') {
      camposVazios[name] = `${name} está vazio.`;
    }
  });

  return camposVazios;
}
const inputNames = ['nome', 'email', 'mensagem'];
const camposVazios = validarCamposVazios(inputNames);

if (Object.keys(camposVazios).length === 0) {
  console.log('Todos os campos estão preenchidos.');
} else {
  console.log('Campos vazios: ', camposVazios);
}
