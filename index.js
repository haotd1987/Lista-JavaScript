/**** Escreva o código abaixo 👇******/

// Q1 – Soma
function somar(a, b) {
  return a + b;
}

// Q2 – Multiplicação
function multiplicar(a, b) {
  return a * b;
}

// Q3 – Subtração
function subtrair(a, b) {
  return a - b;
}

// Q4 – Divisão (com verificação de zero)
function dividir(a, b) {
  if (b === 0) {
    throw new Error("Erro: divisão por zero");
  }
  return a / b;
}

// Q5 – Média de 4 notas (reaproveitando dividir/somar)
function calcularMedia(nota1, nota2, nota3, nota4) {
  const total = somar(somar(nota1, nota2), somar(nota3, nota4));
  return dividir(total, 4);
}

// Q6 – Exponenciação (Math.pow)
function elevarPotencia(base, expoente) {
  return Math.pow(base, expoente);
}

// Q7 – Área do retângulo (reaproveitando multiplicar)
function calcularAreaRetangulo(largura, altura) {
  return multiplicar(largura, altura);
}

// Q8 – Par ou ímpar
function verificarParOuImpar(numero) {
  return numero % 2 === 0 ? "par" : "ímpar";
}

// Q9 – Raiz quadrada (Math.sqrt)
function calcularRaizQuadrada(numero) {
  return Math.sqrt(numero);
}

// Q10 – Hipotenusa (reaproveitando somar, elevarPotencia e calcularRaizQuadrada)
function calcularHipotenusa(cateto1, cateto2) {
  const somaDosQuadrados = somar(
    elevarPotencia(cateto1, 2),
    elevarPotencia(cateto2, 2)
  );
  return calcularRaizQuadrada(somaDosQuadrados);
}




/**** Escreva o código acima ☝️******/

//Não altere as linhas abaixo
module.exports = {
  somar,
  multiplicar,
  subtrair,
  dividir,
  calcularMedia,
  elevarPotencia,
  calcularAreaRetangulo,
  verificarParOuImpar,
  calcularRaizQuadrada,
  calcularHipotenusa,
};
