function ProductCard({ product }) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md ">
        <div className="flex flex-col items-center">
        <img src={product.image} alt={product.name} className="w-[150px] h-[200px] object-cover mb-4 rounded" />
        </div>
        <h3 className="text-lg font-semibold">{product.name}</h3>
        
        <p className="text-gray-600">R$ {product.price.toFixed(2)}</p>
        <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer">
          Comprar
        </button>
      </div>
    )
  }
  
  export default ProductCard
  