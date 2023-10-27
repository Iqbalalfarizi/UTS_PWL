import Product from "./components/product";
import dataProduct from "./dataProduct";

function App() {
  return (
    <div className="grid grid-cols-4 p-10">
      {dataProduct.map((data) => (
        <Product
          key={data.id}
          img={data.img}
          name={data.name}
          price={data.price}
          category={data.category}
        />
      ))}
    </div>
  );
}

export default App;
