function calcularDuto() {
  // Captura dos valores inseridos
  const vazao = parseFloat(document.getElementById("vazao").value.replace(",", ".")) || 0;
  const velocidade = parseFloat(document.getElementById("velocidade").value.replace(",", ".")) || 0;
  const altura = parseFloat(document.getElementById("altura").value.replace(",", ".")) || 0;
  const comprimento = parseFloat(document.getElementById("comprimento").value.replace(",", ".")) || 0;

  // Cálculo 1: Área de secção (m²)
  const areaSecao = (velocidade !== 0) ? (vazao / 3600) / velocidade : 0;

  // Cálculo 2: Medida do duto (largura) (m), arredondada de 5 em 5 cm
  let largura = (altura !== 0) ? (areaSecao / altura) : 0;
  largura = Math.round(largura * 20) / 20; // Arredonda para múltiplos de 0.05 m

  // Cálculo 3: Área de chapas (m²)
  const areaChapas = (2 * (largura + altura) * comprimento) * 1.2;

  // Cálculo 4: Massa de chapas (kg)
  const massaChapas = (areaChapas * 0.79 / 1000) * 7600;

  // Cálculo 5: Custo de mão de obra (R$)
  const custoMaoObra = 13 * massaChapas;

  // Cálculo 6: Custo de chapa de aço estimado (R$)
  const custoChapas = areaChapas * 75;

  // Atualiza os resultados na interface
  document.getElementById("areaSecao").textContent = areaSecao.toFixed(3);
  document.getElementById("larguraDuto").textContent = largura.toFixed(3);
  document.getElementById("areaChapas").textContent = areaChapas.toFixed(2);
  document.getElementById("massaChapas").textContent = massaChapas.toFixed(0);
  document.getElementById("custoMaoObra").textContent = custoMaoObra.toFixed(0);
  document.getElementById("custoChapas").textContent = custoChapas.toFixed(0);
}
