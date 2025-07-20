import { useState } from 'react';

import Header from './components/Header';
import { Title, SideBar } from './components/SideBar';
import ProductList from './components/ProductList';
import CategoryList from './components/CategoryList';
import Loader from './components/Loader';
import Details from './components/Details';
import Modal from './components/Modal';
import { useLocalStorageState } from './hooks/useLocalStorageState';
import { useProductsCategory } from './hooks/useProductsCategory';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedId, setSelectedId] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [carts, setCarts] = useLocalStorageState([], 'carts');

  const { products, isLoading, error } = useProductsCategory(selectedCategory);

  function handleSelectProduct(id) {
    setSelectedId((selectedId) => (selectedId === id ? null : id));
  }

  function handleReset() {
    setSelectedId(null);
  }

  function handleAddToCart(newItem) {
    if (carts.some((cart) => cart.id === newItem.id))
      return setCarts((carts) =>
        carts.map((cart) =>
          cart.id === newItem.id
            ? { ...cart, quantity: newItem.quantity }
            : cart
        )
      );

    setCarts((carts) => [...carts, newItem]);
  }

  function handleDeleteCart(id) {
    setCarts((carts) => carts.filter((cart) => cart.id !== id));
  }

  return (
    <div className="app">
      <Header onOpenModal={setIsOpenModal} numCart={carts.length} />

      <SideBar>
        {isLoading && <Loader />}

        {!isLoading && !error && products.length > 0 && (
          <>
            <Title title={selectedCategory || 'Products'} />
            <ProductList
              products={products}
              selectedId={selectedId}
              onSelectProduct={handleSelectProduct}
            />
          </>
        )}

        {error && <h2 style={{ margin: '2rem' }}> ⛔ {error} ⛔ </h2>}
      </SideBar>

      <CategoryList
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        onReset={handleReset}
      />

      <Details
        key={selectedId}
        selectedId={selectedId}
        onAddToCart={handleAddToCart}
      />

      {isOpenModal && (
        <Modal
          onCloseModal={setIsOpenModal}
          carts={carts}
          onDeleteItem={handleDeleteCart}
        />
      )}
    </div>
  );
}
