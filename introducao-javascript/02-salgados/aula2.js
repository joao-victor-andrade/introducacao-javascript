//Operadores aritméticos
//Usamos * para multiplicação

const salgado = "coxinha";
const preco = 5;
const disponivel = 10;
const total = preco * disponivel;

console.log(`total: R$ ${total}`);

document.getElementById("resultado").textContent= `${quantidade} x ${salgado} = R$ ${total.toFixed(2)}`;