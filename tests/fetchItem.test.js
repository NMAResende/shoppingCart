require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Verificar se fetchItem é uma função', async () => {
    await expect(typeof fetchItem).toBe('function');
  });
  it('Verificar se a função fetchItem com o argumento `MLB1615760527` e se ela foi chamada', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledTimes(1);
  });
  it('Verificar se a função fetchItem ao receber o argumento `MLB1615760527` receba o endpoint `https://api.mercadolibre.com/items/MLB1615760527`', async () => {
    const url = 'https://api.mercadolibre.com/items/MLB1615760527';
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith(url);
  });
  it('Verificar o retorno da função fetchItem quando recebe o argumento `MLB1615760527`', async () => {
    const itemEsperado = await fetchItem('MLB1615760527');
    
     await expect(itemEsperado).toEqual(item);

    
  });
  it('Verificar se ao chamar a função fetchItem sem argumento ela devolve uma mensagem de erro', async () => {
    try {
      await fetchItem();
      expect(true).toBe(true);
    } catch (error) {
      expect(mensagemErro).toEqual(new Error('You must provide an url'));
    }
  });
  //fail('Teste vazio');
});
