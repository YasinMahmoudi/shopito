import CloseIcon from '@mui/icons-material/Close';

export default function Modal({ onCloseModal, carts, onDeleteItem }) {
  const numCart = carts.length;

  const totalPrice = carts.reduce(
    (acc, currentCart) => (acc += currentCart.quantity * currentCart.price),
    0
  );

  function handleClose() {
    onCloseModal(false);
  }

  return (
    <>
      <div className="modal">
        <div className="modal-header">
          <button className="btn modal-close" onClick={handleClose}>
            <CloseIcon />
          </button>
        </div>

        <div className="modal-body">
          <div className="cart">
            <strong> All Items ( {numCart} ) </strong>

            <div className="cart-wrapper">
              <ul className="list">
                {carts?.map((cart) => (
                  <CartItem
                    key={cart.id}
                    cart={cart}
                    onDeleteItem={onDeleteItem}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>

        {totalPrice > 0 && (
          <div className="modal-footer">
            <div className="cart-total">
              <strong>
                <span> Total price : </span>
                <span className="price"> $ {totalPrice} </span>
              </strong>
            </div>
          </div>
        )}
      </div>
      <div className="overlay" onClick={handleClose}></div>
    </>
  );
}

function CartItem({ cart, onDeleteItem }) {
  return (
    <li>
      <figure>
        <img src={cart.image} alt={cart.title} />
      </figure>

      <div>
        <h3> {cart.title} </h3>
      </div>

      <strong>
        X <span> {cart.quantity} </span>
      </strong>

      <strong>
        $<span> {cart.price} </span>
      </strong>

      <button className="btn btn--delete" onClick={() => onDeleteItem(cart.id)}>
        <CloseIcon />
      </button>
    </li>
  );
}
