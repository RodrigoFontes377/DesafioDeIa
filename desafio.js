const materiais = [
  { nome: "Garrafa de Água", peso: 0.5, valor: 20, quantidadeMaxima: 2 },
  { nome: "Teclado", peso: 0.8, valor: 10, quantidadeMaxima: 1 },
  { nome: "Mouse", peso: 0.6, valor: 15, quantidadeMaxima: 1 },
  { nome: "Notebook", peso: 3, valor: 50, quantidadeMaxima: 1 },
  { nome: "Caderno", peso: 1, valor: 6, quantidadeMaxima: 3 },
  { nome: "Fone de Ouvido", peso: 0.3, valor: 20, quantidadeMaxima: 2 },
  { nome: "Suporte para Notebook", peso: 1.5, valor: 5, quantidadeMaxima: 1 },
  { nome: "Mouse Pad", peso: 0.3, valor: 5, quantidadeMaxima: 2 },
  { nome: "Carregador Portátil", peso: 0.7, valor: 25, quantidadeMaxima: 1 },
  { nome: "Livro", peso: 0.8, valor: 10, quantidadeMaxima: 2 },
  { nome: "Caneta", peso: 0.1, valor: 2, quantidadeMaxima: 5 },
  { nome: "Lápis", peso: 0.1, valor: 1, quantidadeMaxima: 5 },
  { nome: "Borracha", peso: 0.1, valor: 1, quantidadeMaxima: 5 },
  { nome: "Estojo", peso: 0.3, valor: 5, quantidadeMaxima: 2 },
  { nome: "Régua", peso: 0.2, valor: 2, quantidadeMaxima: 2 },
  { nome: "Óculos", peso: 0.2, valor: 10, quantidadeMaxima: 1 },
  { nome: "Carteira", peso: 0.2, valor: 5, quantidadeMaxima: 1 },
  { nome: "Celular", peso: 0.3, valor: 40, quantidadeMaxima: 1 },
  { nome: "Carregador de Celular", peso: 0.2, valor: 10, quantidadeMaxima: 1 },
  { nome: "Tablet", peso: 0.5, valor: 30, quantidadeMaxima: 1 },
  { nome: "Carregador de Tablet", peso: 0.3, valor: 15, quantidadeMaxima: 1 },
  { nome: "Luminária", peso: 0.5, valor: 20, quantidadeMaxima: 1 },
];

const capacidadeMochila = 4;

function problemaMochilaBuscaGulosa(materiais, capacidade) {
  const n = materiais.length;
  const valorPorPeso = materiais.map((item) => ({
    ...item,
    valorPorPeso: item.valor / item.peso,
  }));
  valorPorPeso.sort((a, b) => b.valorPorPeso - a.valorPorPeso);

  let capacidadeRestante = capacidade;
  let valorTotalMochila = 0;
  let pesoFinalMochila = 0;
  let objetosSelecionados = [];

  for (const objeto of valorPorPeso) {
    if (objeto.peso <= capacidadeRestante && objeto.quantidadeMaxima > 0) {
      capacidadeRestante -= objeto.peso;
      pesoFinalMochila += objeto.peso;
      objeto.quantidadeMaxima--;
      valorTotalMochila += objeto.valor;
      objetosSelecionados.push(objeto);
    }
  }

  return {
    valorTotal: valorTotalMochila,
    pesoFinal: capacidade - capacidadeRestante,
    objetosSelecionados: objetosSelecionados,
  };
}

const resultado = problemaMochilaBuscaGulosa(materiais, capacidadeMochila);
console.log("Valor total na mochila:", resultado.valorTotal);
console.log("Peso final da mochila:", resultado.pesoFinal);
console.log("Objetos selecionados:");
resultado.objetosSelecionados.forEach((objeto) =>
  console.log(`${objeto.nome} - Quantidade: 1`)
);
