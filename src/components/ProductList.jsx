import ProductCard from './ProductCard'

const products = [
  {
    id: 1,
    name: 'Camiseta do Goku',
    price: 59.90,
    image: '../src/assets/jogos/ds.jpg',
  },
  {
    id: 2,
    name: 'Funko Darth Vader',
    price: 89.90,
    image: '../src/assets/jogos/fc6.jpg',
  },
  {
    id: 3,
    name: 'HQ Batman - Ano Um',
    price: 34.90,
    image: '../src/assets/jogos/fzr5.jpg',
  },
  {
    id: 4,
    name: 'HQ hnena',
    price: 34.90,
    image: '../src/assets/jogos/gow.png',
  },
]

function ProductList() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10 m-[40px]">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList
