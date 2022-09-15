// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições! 
// Fique a vontade para modificar o código já escrito e criar suas próprias funções!

/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */

const loading = () => {
  const container = document.getElementsByClassName('container')[0];
  const criandoLoading = document.createElement('p');
  criandoLoading.className = 'loading';
  criandoLoading.innerText = 'carregando...';
  container.appendChild(criandoLoading);
};

const fimLoading = () => {
  const container = document.getElementsByClassName('container')[0];
  const chamandoLoading = document.getElementsByClassName('loading')[0];
  container.removeChild(chamandoLoading);
};

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto. 
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */
const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const produto = async () => {
  const itens = document.querySelector('.items');
  const imprimindoProduto = await fetchProducts('computador');
  imprimindoProduto.forEach((product) => {
    const pro = createProductItemElement(product);
    itens.appendChild(pro);
  });
};

/**
 * Função que recupera o ID do produto passado como parâmetro.
 * @param {Element} product - Elemento do produto.
 * @returns {string} ID do produto.
 */
// const getIdFromProductItem = (product) => product.querySelector('span.item_id').innerText;
// getIdFromProductItem();

/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 */

const preco = async () => {
  const item = document.querySelectorAll('.cart__item');
  const precoTotal = document.querySelector('.total-price');
  let total = 0;
  console.log(item);
  for (let i = 0; i < item.length; i += 1) {
    const convertendoPreco = Number(item[i].innerText.split('$')[1]);
    console.log(item[i].innerText.split('$')[1]);
    total += convertendoPreco;
  }
  precoTotal.innerText = `Total da compra: $ ${(Math.round(total * 100) / 100)}`;
  // Referência: https://stackoverflow.com/questions/67375076/javascript-built-in-alternatives-to-tofixed-rounding
};

const removerLi = (e) => {
  e.target.remove();
};

const limpaCarrinho = () => {
  const listaOrdenada = document.getElementsByClassName('cart__items')[0];
  listaOrdenada.innerHTML = null;
  preco();
  localStorage.removeItem('cartItems');
};

const emptyCart = () => {
  const carrinhoVazio = document.querySelector('.empty-cart');
  carrinhoVazio.addEventListener('click', limpaCarrinho);
};

const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  li.addEventListener('click', removerLi);
  saveCartItems(li.innerHTML);
  return li;
};

const btnItens = () => {
  const item = document.querySelectorAll('.cart__item');
  for (let i = 0; i < item.length; i += 1) {
    item[i].addEventListener('click', removerLi);
  }
};

const itens = async (e) => {
  const item = document.querySelector('.cart__items');
  // const id = document.querySelectorAll('.item_id');
  const id = e.target.parentNode.firstChild.innerText;
  const criandoItem = await fetchItem(id);
  const listaItens = createCartItemElement(criandoItem);
  item.appendChild(listaItens);
  preco();
  saveCartItems(item.innerHTML);
};

const criandoBotao = () => {
  const botao = document.querySelectorAll('.item__add');
  for (let i = 0; i < botao.length; i += 1) {
    botao[i].addEventListener('click', itens);
  }
};

const mantendoItem = (valor) => {
  const item = document.querySelector('.cart__items');
  const items = getSavedCartItems(valor);
  item.innerHTML = items;
};

window.onload = async () => {
  loading();
  await produto();
  fimLoading();
  criandoBotao();
  mantendoItem('cartItems');
  btnItens();
  emptyCart();
  preco();
};
