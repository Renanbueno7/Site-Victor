// Função para armazenar o ID do produto no localStorage
function setProductId(productId) {
    localStorage.setItem('prodId', productId);
}

// Evento de clique para salvar o ID do produto no localStorage e redirecionar para a página de detalhes
document.querySelectorAll('.product-link').forEach((link) => {
    link.addEventListener('click', (e) => {
        const productId = e.target.dataset.productId;
        setProductId(productId);
        window.location.href = 'product.html'; // Redireciona para a página de detalhes
    });
});