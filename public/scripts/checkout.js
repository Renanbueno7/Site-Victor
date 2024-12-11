import { loadCartItem, removeCartItem, updateTotalPrice } from "./functions.js";

// Carrega os itens do carrinho do localStorage
let cartItens = JSON.parse(localStorage.getItem("listaCompras"));

if (cartItens && cartItens.length > 0) {
    // Carrega os itens no HTML
    let cartItensHTML = document.querySelector('#checkout .grid_col_1');
    loadCartItem(cartItens, cartItensHTML);
    
    // Atualiza o preço total
    updateTotalPrice(cartItens);

    // Função para manipular o evento de finalização de compra
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();  // Impede o envio do formulário

        // Coleta os dados do formulário
        const name = document.getElementById("name").value;
        const address = document.getElementById("address").value;

        if (name && address) {
            // Cria o pedido e armazena no localStorage
            let pedido = {
                name: name,
                address: address,
                items: cartItens,
                total: cartItens.reduce((total, item) => total + item.price, 0)
            };

            // Armazena o pedido no localStorage
            let pedidos = JSON.parse(localStorage.getItem("pedidos")) || [];
            pedidos.push(pedido);
            localStorage.setItem("pedidos", JSON.stringify(pedidos));

            // Limpa o carrinho
            localStorage.removeItem("listaCompras");

            // Redireciona ou exibe uma mensagem de sucesso
            alert("Compra finalizada com sucesso!");
            window.location.href = "thankyou.html"; // Você pode redirecionar para uma página de agradecimento
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    });
} else {
    alert("Não há itens no carrinho.");
    window.location.href = "products.html"; // Redireciona de volta para a página de produtos
}
