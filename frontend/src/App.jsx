// import React from 'react';

// function App() {
//   return (
//     <div className="text-center p-4">
//       <h1 className="text-2xl font-bold">Task Manager</h1>
//       <p>Bem-vindo ao seu gerenciador de tarefas!</p>
//     </div>
//   );
// }

// export default App;



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

