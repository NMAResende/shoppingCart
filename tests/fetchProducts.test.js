require('../mocks/fetchSimulator');
//const { expect } = require('chai');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Verificar se fetchProducts é uma função', async () => {
    await expect(typeof fetchProducts).toBe('function');
  })
  it('Verificar se a função fetchProducts ao receber o argumento `\computador` receba o endpoint `\https://api.mercadolibre.com/sites/MLB/search?q=computador`', async () => {
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith(url);
  })
  it('Verificar o retorno da função fetchProducts quando recebe o argumento `\computador`', async () => {
    await expect(fetchProducts('computador')).toEqual(computadorSearch);
  });
  it('Verificar se ao chamar a função fetchProducts sem argumento ela devolve uma mensagem de erro', async () => {
    try {
      await fetchProducts();
      expect(true).toBe(true);
    } catch (error) {
      expect(mensagemErro).toEqual(new Error('You must provide an url'));
    }
  });
  //fail('Teste vazio');
});
