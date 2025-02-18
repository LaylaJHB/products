// import { useContext } from "react";
// import styled from "styled-components";
// import { CartContext } from "../context/CartContext";

// const CartContainer = styled.section`
//   padding: 2rem;
// `;

// const CartItem = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 1rem;
//   border-bottom: 1px solid #ccc;
//   padding-bottom: 1rem;
// `;

// const Cart = () => {
//   const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

//   const handleQuantityChange = (id, e) => {
//     const quantity = parseInt(e.target.value);
//     updateQuantity(id, quantity);
//   };

//   const totalPrice = cart.reduce((acc, item) => acc + item.quantity * parseFloat(item.price), 0);

//   return (
//     <CartContainer>
//       <h2>Seu Carrinho</h2>
//       {cart.length === 0 ? (
//         <p>Seu carrinho está vazio.</p>
//       ) : (
//         cart.map(item => (
//           <CartItem key={item.id}>
//             <div>
//               <h3>{item.name}</h3>
//               <p>Preço: R$ {item.price}</p>
//             </div>
//             <div>
//               <input 
//                 type="number" 
//                 value={item.quantity} 
//                 onChange={(e) => handleQuantityChange(item.id, e)}
//                 min="1"
//                 style={{ width: "50px", marginRight: "10px" }}
//               />
//               <button onClick={() => removeFromCart(item.id)}>Remover</button>
//             </div>
//           </CartItem>
//         ))
//       )}
//       {cart.length > 0 && <h3>Total: R$ {totalPrice.toFixed(2)}</h3>}
//     </CartContainer>
//   );
// };

// export default Cart;

// import styled from "styled-components";
// import { useContext } from "react";
// import { CartContext } from "../context/CartContext";

// const CartContainer = styled.div`
//   padding: 2rem;
//   text-align: center;
// `;

// const CartItem = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   border-bottom: 1px solid #ddd;
//   padding: 1rem 0;

//   img {
//     width: 60px;
//     border-radius: 10px;
//   }

//   button {
//     padding: 5px 10px;
//     background: ${({ theme }) => theme.primary};
//     color: white;
//     border: none;
//     border-radius: 5px;
//     cursor: pointer;
//     margin-left: 10px;

//     &:hover {
//       opacity: 0.8;
//     }
//   }
// `;

// const Cart = () => {
//   const { cart, removeFromCart, clearCart } = useContext(CartContext);

//   return (
//     <CartContainer>
//       <h2>Seu Carrinho</h2>
//       {cart.length === 0 ? (
//         <p>Seu carrinho está vazio.</p>
//       ) : (
//         <>
//           {cart.map((item) => (
//             <CartItem key={item.id}>
//               <img src={item.image} alt={item.name} />
//               <span>{item.name}</span>
//               <span>R$ {item.price.toLocaleString()} x {item.quantity}</span>
//               <button onClick={() => removeFromCart(item.id)}>Remover</button>
//             </CartItem>
//           ))}
//           <button onClick={clearCart} style={{ marginTop: "20px", padding: "10px" }}>
//             Limpar Carrinho
//           </button>
//         </>
//       )}
//     </CartContainer>
//   );
// };

// export default Cart;

import styled from "styled-components";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 1rem 0;

  img {
    width: 60px;
    border-radius: 10px;
  }

  button {
    padding: 5px 10px;
    background: ${({ theme }) => theme.primary};
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 10px;

    &:hover {
      opacity: 0.8;
    }
  }
`;

const TotalContainer = styled.div`
  margin-top: 20px;
  font-size: 1.2rem;
  font-weight: bold;
`;

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  // Calcula o valor total da compra
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <CartContainer>
      <h2>Seu Carrinho</h2>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem key={item.id}>
              <img src={item.image} alt={item.name} />
              <span>{item.name}</span>
              <span>
                R$ {item.price.toLocaleString()} x {item.quantity}
              </span>
              <button onClick={() => removeFromCart(item.id)}>Remover</button>
            </CartItem>
          ))}
          <TotalContainer>
            Total: R$ {total.toLocaleString()}
          </TotalContainer>
          <button
            onClick={clearCart}
            style={{ marginTop: "20px", padding: "10px" }}
          >
            Limpar Carrinho
          </button>
        </>
      )}
    </CartContainer>
  );
};

export default Cart;
