import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

function CartButton({ quantity, onOpenModal }) {
  return (
    <button className="btn" onClick={() => onOpenModal(true)}>
      <span>{quantity} items</span>

      <span className="icon">
        <ShoppingBagIcon />
      </span>
    </button>
  );
}

export default CartButton;
