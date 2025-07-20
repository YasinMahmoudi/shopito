export default function ProductList({ products, selectedId, onSelectProduct }) {
  return (
    <ul className="list">
      {products?.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          selectedId={selectedId}
          onSelectProduct={onSelectProduct}
        />
      ))}
    </ul>
  );
}

function ProductItem({ product, selectedId, onSelectProduct }) {
  return (
    <li
      className={selectedId === product.id ? 'active' : ''}
      onClick={() => onSelectProduct(product.id)}>
      <figure>
        <img src={product.image} alt={`Img for ${product.title}`} />
      </figure>

      <div>
        <h3> {product.title} </h3>
        <h6> {product.category}</h6>
      </div>

      <strong>
        $<span> {product.price} </span>
      </strong>
    </li>
  );
}
