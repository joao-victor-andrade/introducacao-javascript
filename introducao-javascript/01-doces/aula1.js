//primeira aula de Java Script

const NomeDoce = "Maca do Amor";
const Preco = 10.0;
const disponivel = true;

console.log(NomeDoce, Preco, disponivel);

document.getElementById("resultado").textContent= `${NomeDoce} custa R$ ${Preco.toFixed(2)}- disponível: ${disponivel}`;
