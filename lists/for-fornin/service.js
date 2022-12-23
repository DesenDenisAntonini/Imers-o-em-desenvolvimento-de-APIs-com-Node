const axios = require('axios')
const URL = `http://swapi.dev/`

async function obterPessoas (nome) {
  const url = `${URL}/?search=${nome}&format=json`
  const reponse = await axios.get(url)
  return response.data
}

module.exports = {
  obterPessoas
}