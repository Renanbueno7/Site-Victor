// Dados dos produtos (pode ser substituído por dados reais ou dados dinâmicos)
const produtos = [
  { id: 1, titulo: "Paris", preco: 620.00, descricao: "Pacote para Paris", imagem: "./assets/image/eiffel-tower-sunrise1.webp" },
  { id: 2, titulo: "Nova York", preco: 620.00, descricao: "Pacote para Nova York", imagem: "./assets/image/desktop-wallpaper-new-york-statue-of-liberty-1152x864-statue-of-liberty.jpg" },
  { id: 3, titulo: "Tóquio", preco: 620.00, descricao: "Pacote para Tóquio", imagem: "./assets/image/toquio-templo.webp" }
];

// Função para exportar os dados para Excel
function exportarParaExcel() {
  const wb = XLSX.utils.book_new();

  // Dados dos produtos para exportação (removendo a coluna 'imagem')
  const dados = [
      ["ID", "Título", "Preço", "Descrição"], // Cabeçalho
      ...produtos.map(p => [
          p.id, 
          p.titulo, 
          p.preco, 
          p.descricao
      ])
  ];

  const ws = XLSX.utils.aoa_to_sheet(dados);

  // Adiciona a planilha ao arquivo Excel
  XLSX.utils.book_append_sheet(wb, ws, "Produtos");

  // Gera o arquivo Excel e faz o download
  XLSX.writeFile(wb, "produtos.xlsx");
}

// Adiciona o evento de clique ao botão "Exportar para Excel"
document.getElementById("export-button").addEventListener("click", exportarParaExcel);
