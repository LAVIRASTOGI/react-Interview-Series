import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { decrement, increment } from "./redux/actionCreator";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Counter:{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  );
}

export default App;
