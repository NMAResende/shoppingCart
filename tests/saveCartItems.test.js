const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');
//const { expect } = require('chai');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Verificar se a função saveCartItems quando recebe o argumento cartItem chama o localStorage', () =>{
    saveCartItems('Valor');
    expect(localStorage.setItem).toBeCalled();  
  });
  it('Verificar se a função saveCartItems quando recebe dois argumentos chama o localStorage', () =>{
    saveCartItems('Valor')
    expect(localStorage.setItem).toBeCalledWith('cartItems', 'Valor');  
  });
  //fail('Teste vazio');
});
