const saveCartItems = (valor) => {
  localStorage.setItem('cartItems', valor);
};

// const itens = document.querySelectorAll('.cart-item');
// const saveCartItems = () => {
//   localStorage.setItem('cartItems', itens.innerHTML);
// };

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
