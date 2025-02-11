// import { Link } from "react-router-dom";

// export default function Home() {
//   return (
//      <index>
//     <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
//       <h1 className="text-4xl font-bold text-gray-800">Bem-vindo ao E-commerce</h1>
//       <p className="text-lg text-gray-600 mt-4">Encontre os melhores produtos!</p>
//       <Link to="/products" className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg">
//         Ver Produtos
//       </Link>
//     </div>
//     </index>
//   );
// }

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-5xl font-bold text-primary">Bem-vindo ao E-Shop!</h1>
      <p className="text-lg text-secondary mt-4">Os melhores produtos com os melhores preços.</p>
      <Link to="/products" className="mt-6 px-6 py-3 bg-accent text-white rounded-lg text-lg font-semibold hover:bg-primary transition">
        Ver Produtos
      </Link>
    </div>
  );
}
