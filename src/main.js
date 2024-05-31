const p = require('./services/products')

async function Main() {
  console.log('Carrinho compras:')
  p.getFullName('408', 'mousepad')
  p.getFullName('508', 'mouse')
}

Main()
