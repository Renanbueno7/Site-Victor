import { database } from "./database.js";
import { findProduct, loadProduct } from "./functions.js"; 

// Recupera o código do produto armazenado no localStorage
let id = localStorage.getItem('prodId');

// Se não houver um id, redireciona para a página inicial ou outra página de erro
if (!id) {
    alert("Produto não encontrado. Redirecionando para a página inicial.");
    window.location.href = "./index.html"; // Redireciona caso o ID do produto não esteja presente
}

// Recupera a lista de compras do localStorage ou cria uma lista vazia
let listaCompras = JSON.parse(localStorage.getItem('listaCompras')) || [];

// Encontra o produto no banco de dados usando o codigoProduto
let produto = findProduct(database, id);

// Se o produto não for encontrado, redireciona para a página inicial ou página de erro
if (!produto) {
    alert("Produto não encontrado.");
    window.location.href = "./index.html"; // Redireciona caso o produto não seja encontrado
}

let selecaoProduto = document.querySelector(".grid_col_1");

// Carrega os dados do produto na página
loadProduct(produto, selecaoProduto);

let botaoComprar = document.querySelector(".product_price_container button");

// Evento de clique no botão de compra
botaoComprar.addEventListener('click', () => {
    // Obtém a quantidade do produto
    let quantity = parseInt(document.querySelector("#quantity").value) || 1;

    // Atualiza a quantidade no produto
    produto.quantity = quantity;

    // Adiciona o produto à lista de compras
    listaCompras.push(produto);

    // Exibe a mensagem de sucesso e salva a lista no localStorage
    alert("Produto adicionado com sucesso!");
    localStorage.setItem('listaCompras', JSON.stringify(listaCompras));

    // Redireciona para a página de checkout
    window.location.href = "./checkout.html";
});
