import ProductCard from './ProductCard'

const livros = [
  {
    id: 1,
    name: 'Camiseta do Goku',
    price: 59.90,
    image: '../src/assets/livros/hp (1).jpg',
  },
  {
    id: 2,
    name: 'Funko Darth Vader',
    price: 89.90,
    image: '../src/assets/livros/hp (2).jpg',
  },
  {
    id: 3,
    name: 'HQ Batman - Ano Um',
    price: 34.90,
    image: '../src/assets/livros/hp (3).jpg',
  },
  {
    id: 4,
    name: 'HQ hnena',
    price: 34.90,
    image: '../src/assets/livros/hp (4).jpg',
  },
  {
    id: 5,
    name: 'HQ hnena',
    price: 34.90,
    image: '../src/assets/livros/hp (5).jpg',
  },
  {
    id: 6,
    name: 'HQ hnena',
    price: 34.90,
    image: '../src/assets/livros/hp (6).jpg',
  },
  {
    id: 7,
    name: 'HQ hnena',
    price: 34.90,
    image: '../src/assets/livros/hp (7).jpg',
  },
]

function LivroList() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10 m-[40px]">
      {livros.map(livro => (
        <ProductCard key={livro.id} product={livro} />
      ))}
    </div>
  )
}

export default LivroList
