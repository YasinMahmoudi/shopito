import CartButton from "./CartButton";

function Header({ onOpenModal, numCart }) {
  return (
    <header className="header">
      <h3 className="logo"> Store </h3>

      <CartButton quantity={numCart} onOpenModal={onOpenModal} />
    </header>
  );
}
export default Header;
