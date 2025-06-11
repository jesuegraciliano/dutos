function calcularDuto() {
  // Captura dos valores inseridos
  const vazao = parseFloat(document.getElementById("vazao").value.replace(",", ".")) || 0;
  const velocidade = parseFloat(document.getElementById("velocidade").value.replace(",", ".")) || 0;
  const altura = parseFloat(document.getElementById("altura").value.replace(",", ".")) || 0;
  const comprimento = parseFloat(document.getElementById("comprimento").value.replace(",", ".")) || 0;

  // Cálculo 1: Área de secção (m²)
  const areaSecao = (velocidade !== 0) ? (vazao / 3600) / velocidade : 0;

  // Cálculo 2: Medida do duto (largura) (m)
  const largura = (altura !== 0) ? (areaSecao / altura) : 0;

  // Cálculo 3: Área de chapas (m²)
  const areaChapas = (2 * (largura + altura) * comprimento) * 1.2;

  // Atualiza os resultados na interface
  document.getElementById("areaSecao").textContent = areaSecao.toFixed(3);
  document.getElementById("larguraDuto").textContent = largura.toFixed(3);
  document.getElementById("areaChapas").textContent = areaChapas.toFixed(2);
}
