import { useEffect, useState } from 'react';

export function useProductsCategory(selectedCategory) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(
    function () {
      async function fetchProducts() {
        try {
          setError('');
          setIsLoading(true);
          const res = await fetch(
            `https://fakestoreapi.com/products${
              selectedCategory ? `/category/${selectedCategory}` : ''
            }`
          );

          if (!res.ok) throw new Error('Problem with fetching data !');

          const data = await res.json();

          setProducts(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }

      fetchProducts();
    },
    [selectedCategory]
  );

  return { products, isLoading, error };
}
