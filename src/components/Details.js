import { useEffect, useState } from 'react';
import Loader from './Loader';
import Button from './Button';
import Counter from './Counter';
import StarRating from './StarRating';



export default function Details({ selectedId, onAddToCart }) {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const [quantity, setQuantity] = useState(0);

  useEffect(
    function () {
      async function fetchProducts() {
        try {
          setError('');
          setIsLoading(true);
          const res = await fetch(
            `https://fakestoreapi.com/products/${selectedId}`
          );

          if (!res.ok) throw new Error('Problem with fetching data !');

          const data = await res.json();

          setProduct(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }

      if (!selectedId) return;

      fetchProducts();
    },
    [selectedId]
  );

  useEffect(
    function () {
      if (!product.title) return;

      document.title = product.title;

      return function () {
        document.title = 'Shopito';
      };
    },
    [product.title]
  );

  useEffect(
    function () {
      if (!product.image) return;

      document.body.style.background = `url(${product.image})`;

      return function () {
        document.body.style.background = '';
      };
    },
    [product.image]
  );

  function handleAddToCart() {
    if (!quantity) return;

    const newproduct = {
      id: product.id,
      image: product.image,
      title: product.title,
      price: product.price,
      quantity,
    };

    onAddToCart(newproduct);
  }

  return (
    <div className="details">
      {isLoading && <Loader />}

      {!selectedId && <h2> Select a product and see more information 😍 </h2>}

      {!isLoading && !error && selectedId && (
        <>
          <Button className="btn--right">+</Button>

          <figure>
            <img src={product.image} alt={`Img for ${product.title}`} />
          </figure>

          <div className="flex">
            <div>
              <h2> {product.title} </h2>
              <h6> {product.category} </h6>
            </div>

            <div className="price">
              <h1>
                <span> $ </span>
                {product.price}
              </h1>
            </div>
          </div>

          <StarRating rating={product.rating} />

          <div className="description">
            <p>{product.description}</p>
          </div>

          <div className="action">
            <Counter quantity={quantity} onSetQuantity={setQuantity} />
            <Button onClick={handleAddToCart}>Add to cart</Button>
          </div>
        </>
      )}

      {error && <h2> ⛔ {error} ⛔ </h2>}
    </div>
  );
}
