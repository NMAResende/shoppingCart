// const fetch = require('node-fetch');

const fetchItem = async (ItemID) => {
  const url = `https://api.mercadolibre.com/items/${ItemID}`;
  await fetch(url)
    .then((resposta) => resposta.json())
    .then((results) => results)
    .catch((error) => `You must provide an url \n${error}`);
};

fetchItem('MLB1615760527');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
