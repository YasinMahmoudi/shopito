import Loader from './Loader';
import { useCategories } from '../hooks/useCategories';

export default function CategoryList({
  onSelectCategory,
  selectedCategory,
  onReset,
}) {
  const { categories, isLoading } = useCategories();

  return (
    <ul className="horizontal-list">
      {isLoading && <Loader className="loader-sm" />}

      {!isLoading &&
        categories.length > 0 &&
        categories?.map((category, i) => (
          <CategoryItem
            key={i}
            category={category}
            onSelectCategory={onSelectCategory}
            selectedCategory={selectedCategory}
            onReset={onReset}
          />
        ))}
    </ul>
  );
}

function CategoryItem({
  category,
  onSelectCategory,
  selectedCategory,
  onReset,
}) {
  function handleClick() {
    onSelectCategory(category);
    onReset();
  }

  return (
    <li
      onClick={handleClick}
      className={category === selectedCategory ? 'active' : ''}>
      <span> {category} </span>
    </li>
  );
}
