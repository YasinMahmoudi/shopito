import { useEffect, useState } from 'react';

export function useCategories() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCategories() {
      setIsLoading(true);
      const res = await fetch('https://fakestoreapi.com/products/categories');

      if (!res.ok) throw new Error('Problem with fetching data !');

      const data = await res.json();

      setCategories(data);

      setIsLoading(false);
    }

    fetchCategories();
  }, []);

  return { categories, isLoading };
}
