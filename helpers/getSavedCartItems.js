// const getSavedCartItems = () => {
//   const buscandoItens = localStorage.getItem('Itens');
//   return buscandoItens;
// };

// const mantendoItem = () => {
//   const mantItem = document.querySelectorAll('.cart-item');
//   const buscandoItens = getSavedCartItems();
//   mantItem.innerHTML = buscandoItens;
// };

const getSavedCartItems = (valor) => {
  const items = localStorage.getItem(valor); 
  return items;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
