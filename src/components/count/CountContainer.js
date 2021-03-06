import { useContext, useState, useEffect } from "react";
import CartContext from "../../context/CartContext";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const CountContainer = ({ item }) => {
  const { addItem } = useContext(CartContext);

  const { stock } = item;

  console.log(stock);

  const [available, setAvailable] = useState(stock);

  useEffect(() => {
    setAvailable(stock);
  }, [stock]);

  const onAdd = (quantity) => {
    if (quantity <= available) {
      addItem(item, quantity);
      setAvailable(available - quantity);
    } else {
      alert(`No hay suficiente stock`);
    }
  };
  return (
    <div className="mt-5">
      <ItemCount initial={1} stock={available} onAdd={onAdd} />
      <Link to="/Cart">
        <button className="btn btn-primary pl-10 pr-10 mt-2 mb-5 pl-3 pr-3">
          Ir al carrito
        </button>
      </Link>
    </div>
  );
};
export default CountContainer;
