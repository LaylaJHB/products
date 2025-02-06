import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Erro ao buscar produtos:", error));
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Nossos Produtos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link key={product.id} to={`/products/${product.id}`} className="bg-white shadow-md rounded-lg p-4">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
            <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">R$ {product.price.toFixed(2)}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
