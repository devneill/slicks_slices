import { useContext } from 'react';
import OrderContext from '../components/OrderContext';

export default function usePizza({ pizzas, inputs }) {
  // create state to hold order
  // We got rid of this lnie cuz we moved the usetate up to the provider
  // const [order, setOrder] = useState([]);
  // Now we have access to both our state and our updater function (setOrder) via context
  const [order, setOrder] = useContext(OrderContext);
  // make a function to add things to order
  function addToOrder(orderedPizza) {
    setOrder([...order, orderedPizza]);
  }
  // make a function to remove things from order
  function removeFromOrder(index) {
    setOrder([
      // everything before what we are removing
      ...order.slice(0, index),
      // everything after what we are removing
      ...order.slice(index + 1),
    ]);
  }
  // send this data to a serverless function when they check out
  // TODO

  return {
    order,
    addToOrder,
    removeFromOrder,
  };
}
