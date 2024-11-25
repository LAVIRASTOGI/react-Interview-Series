import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, loginUser } from "./redux/actionCreator";

function App() {
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();
  return (
    <>
      <h1> COUNTER : {count}</h1>

      <button onClick={() => dispatch(increment(2))}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  );
}

export default App;
