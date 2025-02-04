import { useEffect, useState } from "react";
import Paginator from "./components/Paginator";
import "./styles.css";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=200")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  return (
    <div className="App">
      <h2>Products</h2>
      <Paginator items={products} pageSize={10} />
    </div>
  );
}
