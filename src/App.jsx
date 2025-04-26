
import './App.css'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import Header from './components/Header'
import LivroList from './components/LivrosList'
import ProductList from './components/ProductList'

function App() {
  

  return (
    <>
      <Header />
      <Carousel/>
      <div className="ml-[10%] mr-[10%]">
      <div className=" bg-sky-500 m-20px flex flex-col ">
        <h1 className="self-center ">Jogos</h1>
       <ProductList/>
      </div>
      <div className="bg-yellow-500 flex flex-col">
        <h1 className='self-center'>Livros</h1>
      <LivroList/>
      </div>
      </div>
      <Footer/>
    </>
  )
}

export default App
