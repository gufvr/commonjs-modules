const { getFullName, productType } = require('./services/products')
const config = require('./services/config')
const dataBase = require('./services/database')
async function Main() {
  console.log('Carrinho compras:')

  getFullName('1', 'teclado')

  // product.getFullName('408', 'mousepad')
  // product.getFullName('508', 'mouse')
  // product.getProductLabel('mousepad')

  dataBase.connectToDatabase()
}

Main()
