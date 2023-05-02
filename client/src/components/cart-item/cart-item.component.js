import { CartItemContainer, ItemDetails } from "./cart-item.styles.js";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <ItemDetails>{name}</ItemDetails>
        <span>
          {quantity} x ${price}
        </span>
      </div>
    </CartItemContainer>
  );
};

export default CartItem;
