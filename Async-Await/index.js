/*
  0 Obter um usuario
  1 Obter o numero de telefone de um usuario a partir de seu ID
  2 Obter o endereco do usuario pelo ID
*/
// importamos um modulo interno do node.js
const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario() {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(function () {
      // return reject(new Error('DEU RUIM DE VERDADE!'))
      return resolve({
        id: 1,
        nome: 'Aladin',
        dataNascimento: new Date()
      })
   }, 1000)
  })
}

function obterTelefone(idUsuario) {
  return new Promise(function resolverPromise(resolve, reject){
    setTimeout (() => {
      return resolve({
        telefone: '1199002',
        ddd: 11
      })
    }, 2000);
  })
}

function obterEndereco(idUsuario, callback){
  setTimeout(() => {
    return callback(null,{
      rua: 'dos bobos',
      numero: 0
    })
  }, 2000);
}

// Primeiro passo adicionar a palavra async -> automaticamente ela retornará uma Promise
main()
async function main(){
  try {
      console.time('medida-promise')
      const usuario = await obterUsuario()
      // const telefone = await  obterTelefone(usuario.id)
      // const endereco = await obterEnderecoAsync(usuario.id)
      const resultado = await Promise.all([
        obterTelefone(usuario.id),
        obterEnderecoAsync(usuario.id)
      ])
      const endereco = resultado[1]
      const telefone = resultado[0]
      console.log(`
        Nome: ${usuario.nome},
        Telefone: (${telefone.ddd} ${telefone.telefone}),
        Endereco: ${endereco.rua}, ${endereco.numero}
      `)
      console.timeEnd('medida-promise')
  } catch (error) {
    console.log('DEU RUIM', error)
  }
}
// const usuarioPromise = obterUsuario()
// usuarioPromise
// .then(function (usuario){
//   return obterTelefone(usuario.id)
//   .then(function resolverTelefone(result){
//     return {
//       usuario: {
//           nome: usuario.nome,
//           id: usuario.id
//       },
//       telefone: result
//     }
//   })
// })

// .then(function (resultado) {
//   const endereco = obterEnderecoAsync(resultado.usuario.id)
//   return endereco.then(function resolverEndereco(result) {
//     return{
//         usuario: resultado.usuario,
//         telefone: resultado.telefone,
//         endereco: result
//     }
//   })
// })
// .then(function (resultado) {
//   console.log(`
//       Nome: ${resultado.usuario.nome}
//       Endereco: ${resultado.endereco.rua}, ${resultado.endereco.numero}
//       Telefone: (${resultado.telefone.add}) ${resultado.telefone.telefone}
//   `)
// })
// .catch(function (error){
//   console.log('DEU RUIM', error)
// })
// function resolverUsuario(erro, usuario) {
//   console.log('usuario', usuario)
// }

// obterUsuario(function resolverUsuario(error, usuario){
//   if(error) {
//     console.error('DEU RUIM em USUARIO', error)
//     return;
//   }
//   obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
//     if (error1) {
//       console.error('DEU RUIM em TELEFONE', error)
//       return;
//     }
//     obterEndereco(usuario.id, function resolverEndereco(error2, endereco){
//       if(error2) {
//         console.error('DEU RUIM em TELEFONE', error)
//         return;
//       }
//       console.log(`
//         nome: ${usuario.nome},
//         Endereco: ${endereco.rua},${endereco.numero}
//         Telefone: (${telefone.add})${telefone.telefone}
//       `)
//     })
//   })
// })

// const telefone = obterTelefone(usuario.id)

// console.log('telefone', telefone)