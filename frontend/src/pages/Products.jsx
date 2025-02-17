// import styled from "styled-components";
// import { Link } from "react-router-dom";
 import produto1 from '../assets/IPhone15Pro.jpeg';
// import produto2 from '../assets/6c92c563-6982-4744-bbc1-e38e39cab7f1.jpeg';
 import produto3 from '../assets/Watch .jpeg';

// // Dados estáticos de exemplo (integrar com API)
// const products = [
//   {
//     id: 1,
//     name: "iPhone 15 Pro",
//     description: "O smartphone mais avançado da Apple.",
//     image: produto1,
//     price: "9999.00",
//   },
//   {
//     id: 2,
//     name: "MacBook Air M2",
//     description: "O equilíbrio perfeito entre potência e portabilidade.",
//     image: produto2,
//     price: "12999.00",
//   },
//   {
//     id: 3,
//     name: "Apple Watch Ultra",
//     description: "A revolução no monitoramento da saúde.",
//     image: produto3,
//     price: "2999.00",
//   },
// ];

// const ProductsContainer = styled.section`
//   padding: 2rem;
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//   gap: 2rem;
// `;

// const ProductCard = styled.div`
//   background: ${({ theme }) => theme.background};
//   color: ${({ theme }) => theme.text};
//   padding: 1rem;
//   border-radius: 10px;
//   box-shadow: 0 4px 8px rgba(0,0,0,0.1);
//   text-align: center;
// `;

// const ProductImage = styled.img`
//   width: 100%;
//   border-radius: 10px;
// `;

// const ProductName = styled.h3`
//   margin: 1rem 0;
// `;

// const ProductPrice = styled.p`
//   font-weight: bold;
//   font-size: 1.2rem;
// `;

// const ProductButton = styled.button`
//   margin-top: 1rem;
//   padding: 10px 15px;
//   background: ${({ theme }) => theme.primary};
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   &:hover {
//     opacity: 0.8;
//   }
// `;

// const Products = () => {
//   return (
//     <ProductsContainer>
//       {products.map(product => (
//         <ProductCard key={product.id}>
//           <ProductImage src={product.image} alt={product.name} />
//           <ProductName>{product.name}</ProductName>
//           <ProductPrice>R$ {product.price}</ProductPrice>
//           <Link to={`/produto/${product.id}`}>
//             <ProductButton>Ver Detalhes</ProductButton>
//           </Link>
//         </ProductCard>
//       ))}
//     </ProductsContainer>
//   );
// };

// export default Products;

import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ProductsPage = () => {
  // Dados de exemplo - normalmente virão de uma API
  const allProducts = [
    { id: 1, name: "Smartphone", price: 2999.99, image: produto1, category: "electronics" },
    { id: 2, name: "Camiseta", price: 79.99, image: "https://via.placeholder.com/300", category: "clothing" },
    { id: 3, name: "Notebook", price: 4999.99, image: "https://via.placeholder.com/300", category: "electronics" },
    { id: 4, name: "Livro de React", price: 59.99, image: "https://via.placeholder.com/300", category: "books" },
    { id: 5, name: "Calça Jeans", price: 129.99, image: "https://via.placeholder.com/300", category: "clothing" },
    { id: 6, name: "Fone de Ouvido", price: 299.99, image: "https://via.placeholder.com/300", category: "electronics" },
    { id: 7, name: "Watch", price: 299.99, image: produto3, category: "electronics" },
    // adicione mais produtos conforme necessário
  ];

  const [products, setProducts] = useState(allProducts);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortOption, setSortOption] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  // Filtrar produtos por categoria
  const filteredProducts = products.filter((product) =>
    categoryFilter === "all" ? true : product.category === categoryFilter
  );

  // Ordenar produtos conforme a opção selecionada
  let sortedProducts = [...filteredProducts];
  if (sortOption === "priceAsc")
    sortedProducts.sort((a, b) => a.price - b.price);
  if (sortOption === "priceDesc")
    sortedProducts.sort((a, b) => b.price - a.price);
  if (sortOption === "alphaAsc")
    sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
  if (sortOption === "alphaDesc")
    sortedProducts.sort((a, b) => b.name.localeCompare(a.name));

  // Paginação
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = sortedProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Sempre que o filtro ou a quantidade por página mudar, volta para a primeira página
  useEffect(() => {
    setCurrentPage(1);
  }, [categoryFilter, itemsPerPage, sortOption]);

  return (
    <Container>
      <h2>Produtos</h2>
      <FilterControls>
        <div>
          <label>Categoria:</label>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="all">Todos</option>
            <option value="electronics">Eletrônicos</option>
            <option value="clothing">Roupas</option>
            <option value="books">Livros</option>
          </select>
        </div>
        <div>
          <label>Ordenar por:</label>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="">Nenhum</option>
            <option value="priceAsc">Preço: Menor para Maior</option>
            <option value="priceDesc">Preço: Maior para Menor</option>
            <option value="alphaAsc">Alfabética: A-Z</option>
            <option value="alphaDesc">Alfabética: Z-A</option>
          </select>
        </div>
        <div>
          <label>Itens por página:</label>
          <select
            value={itemsPerPage}
            onChange={(e) =>
              setItemsPerPage(parseInt(e.target.value, 10))
            }
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </div>
      </FilterControls>

      <ProductsContainer>
        {paginatedProducts.map((product) => (
          <ProductCard key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>R$ {product.price.toFixed(2)}</p>
          </ProductCard>
        ))}
      </ProductsContainer>

      <Pagination>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.max(prev - 1, 1))
          }
          disabled={currentPage === 1}
        >
          &laquo; Anterior
        </button>
        <span>
          Página {currentPage} de {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) =>
              Math.min(prev + 1, totalPages)
            )
          }
          disabled={currentPage === totalPages}
        >
          Próxima &raquo;
        </button>
      </Pagination>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`;

const FilterControls = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;

  div {
    display: flex;
    align-items: center;
    gap: 8px;

    label {
      font-weight: 500;
    }

    select {
      padding: 5px 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      background: #f9f9f9;
    }
  }
`;

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

const ProductCard = styled.div`
  background: #f9f9f9;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 18px;
    margin: 10px 0;
    color: #333;
  }

  p {
    font-size: 16px;
    color: #555;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 30px;

  button {
    padding: 10px 15px;
    border: none;
    background: #0071e3;
    color: #fff;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: #005bb5;
    }

    &:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
  }

  span {
    font-size: 16px;
    color: #333;
  }
`;

export default ProductsPage;
