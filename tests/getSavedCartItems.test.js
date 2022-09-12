const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Verificar se a função getSavedCartItems quando recebe o argumento cartItem chama o localStorage', () =>{
    getSavedCartItems();
    expect(localStorage.getItem).toBeCalled();  
  });
  it('Verificar se a função getSavedCartItems quando recebe o argumento cartItems como parâmetro', () =>{
    getSavedCartItems('cartItems');
    expect(localStorage.getItem).toBeCalledWith('cartItems');  
  });
  //fail('Teste vazio');
});
