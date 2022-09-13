// const fetch = require('node-fetch');

const fetchItem = async (ItemID) => {
  const url = `https://api.mercadolibre.com/items/${ItemID}`;
  try {
    const fet = await fetch(url);
    const resposta = await fet.json();
    return resposta;
  } catch (error) {
    return `You must provide an url \n${error}`;
  }
};

// fetchItem('MLB1615760527');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
