
function code_gen(){
  return Math.ceil( Math.random()*10000 );
}

let produto = {
    nome: "Calça Jeans",
    preco: 130.9,
    [ "RF" + code_gen() ]: null
}

console.log(produto);
