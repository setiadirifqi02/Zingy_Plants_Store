import CardProducts from "./card-products";
function ProductList({ list }) {
  return (
    <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {list.map((items) => (
        <CardProducts
          key={items.id}
          id={items.id}
          image={items.cover}
          name={items.title}
          seller={items.author}
          price={items.price}
          link={items.id.toString()}
        />
      ))}
    </div>
  );
}
export default ProductList;
