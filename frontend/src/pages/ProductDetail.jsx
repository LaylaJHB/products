// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// export default function ProductDetail() {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     axios.get(`http://localhost:5000/api/products/${id}`)
//       .then((response) => setProduct(response.data))
//       .catch((error) => console.error("Erro ao buscar produto:", error));
//   }, [id]);

//   if (!product) return <p>Carregando...</p>;

//   return (
//     <div className="container mx-auto py-10">
//       <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl mx-auto">
//         <img src={product.image} alt={product.name} className="w-full h-96 object-cover rounded-md" />
//         <h1 className="text-3xl font-bold mt-4">{product.name}</h1>
//         <p className="text-lg text-gray-600 mt-2">Categoria: {product.category}</p>
//         <p className="text-xl text-blue-600 mt-4 font-semibold">R$ {product.price.toFixed(2)}</p>
//       </div>
//     </div>
//   );
// }

import { useParams } from "react-router-dom";
import mockProducts from "../data/mockProducts";

export default function ProductDetail() {
  const { id } = useParams();
  const product = mockProducts.find((p) => p.id === Number(id));

  if (!product) return <p className="text-center text-lg mt-10">Produto não encontrado...</p>;

  return (
    <div className="container mx-auto py-10 flex flex-col md:flex-row items-center">
      <img src={product.image} alt={product.name} className="w-full md:w-1/2 rounded-lg shadow-lg" />
      <div className="md:ml-10 mt-6 md:mt-0">
        <h1 className="text-4xl font-bold text-primary">{product.name}</h1>
        <p className="text-lg text-secondary mt-2">Categoria: {product.category}</p>
        <p className="text-3xl text-accent mt-4 font-semibold">R$ {product.price.toFixed(2)}</p>
        <button className="mt-6 px-6 py-3 bg-primary text-white rounded-lg text-lg font-semibold hover:bg-accent transition">
          Comprar Agora
        </button>
      </div>
    </div>
  );
}

