import { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../context/CartContext";

const CartContainer = styled.section`
  padding: 2rem;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  border-bottom: 1px solid #ccc;
  padding-bottom: 1rem;
`;

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const handleQuantityChange = (id, e) => {
    const quantity = parseInt(e.target.value);
    updateQuantity(id, quantity);
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.quantity * parseFloat(item.price), 0);

  return (
    <CartContainer>
      <h2>Seu Carrinho</h2>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        cart.map(item => (
          <CartItem key={item.id}>
            <div>
              <h3>{item.name}</h3>
              <p>Preço: R$ {item.price}</p>
            </div>
            <div>
              <input 
                type="number" 
                value={item.quantity} 
                onChange={(e) => handleQuantityChange(item.id, e)}
                min="1"
                style={{ width: "50px", marginRight: "10px" }}
              />
              <button onClick={() => removeFromCart(item.id)}>Remover</button>
            </div>
          </CartItem>
        ))
      )}
      {cart.length > 0 && <h3>Total: R$ {totalPrice.toFixed(2)}</h3>}
    </CartContainer>
  );
};

export default Cart;
