const calculadora = {
    nome: 'teste',
    soma (a, b) {
      return a + b
    }
}

console.log(calculadora);
console.log('nome', calculadora.nome);
console.log('soma 1 + 2', calculadora.soma(1,2));
