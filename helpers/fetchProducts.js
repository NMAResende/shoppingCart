// const fetchProducts = async (param) => {
//   // seu código aqui
//   try {
//   const url = `https://api.mercadolibre.com/sites/MLB/search?q=${param}`;
//   const result = await fetch(url);
//   const json = result.json();
//   console.log(json);
//   } catch (error) {
//     console.log(`You must provide an url \n${error}`);
//   }
// };

// const fetch = require('node-fetch');

const fetchProducts = async (QUERY) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`;
  await fetch(url)
    .then((resposta) => resposta.json())
    .then((results) => results)
    .catch((error) => `You must provide an url \n${error}`);
};

fetchProducts('computador');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
