const getSavedCartItems = (valor) => localStorage.getItem(valor);

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
