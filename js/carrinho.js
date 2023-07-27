// Variável para armazenar os itens do carrinho
let carrinhoItens = [];
let totalCarrinho = 0;


function atualizarCarrinho() {
    const listaCardapio = document.getElementById("cardapio__item");
    listaCardapio.innerHTML = "";
    cardapiosItens.foreach(item => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `${item.produto} - R$ ${item.preco.toFixed(2)}`
        listaCarrinho.appendChild(listItem);
    })
}

function adicionarAoCarrinho(produto, preco) {
    carrinhoItens.push({ produto, preco })
    totalCarrinho += preco;
    atualizarCarrinho();
}

const totalCarrinhoElement = document.getElementById("total-carrinho");
    totalCarrinhoElement.innerText = totalCarrinho.toFixed(2);