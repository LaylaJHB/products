import { Link } from "react-router-dom";

export default function Home() {
  return (
     <index>
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-gray-800">Bem-vindo ao E-commerce</h1>
      <p className="text-lg text-gray-600 mt-4">Encontre os melhores produtos!</p>
      <Link to="/products" className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg">
        Ver Produtos
      </Link>
    </div>
    </index>
  );
}
