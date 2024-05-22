import CartItem from "../components/CartItem/CartItem";
import "../GlobalCss/Cart.css";
import Total from "../components/Total/Total";
import { useSelector } from "react-redux";
function Cart() {
  const CartItems = useSelector((state) => state.cart.cart);
  console.log(CartItems);
  return (
    <div className="cart">
      <div className="cart__left">
        <div>
          <h3>Shopping Cart</h3>
          {CartItems.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              image={item.image}
              pName={item.pName}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
        </div>
      </div>
      <div className="cart__right">
        <Total />
      </div>
    </div>
  );
}

export default Cart;
