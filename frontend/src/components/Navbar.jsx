import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <nav className={`p-4 shadow-md ${darkMode ? "bg-dark text-white" : "bg-white text-gray-800"}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          E-Shop
        </Link>

        <div className="flex gap-6">
          <Link to="/products" className="hover:text-accent">Produtos</Link>
          <button onClick={() => setDarkMode(!darkMode)} className="px-4 py-2 bg-accent text-white rounded-md">
            {darkMode ? "Modo Claro" : "Modo Escuro"}
          </button>
        </div>
      </div>
    </nav>
  );
}
