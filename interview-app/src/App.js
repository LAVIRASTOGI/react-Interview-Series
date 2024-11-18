import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, loginUser } from "./redux/actionCreator";

function App() {
  const count = useSelector((state) => state.counter.count);
  const user = useSelector((state) => state.user.user.data);

  const dispatch = useDispatch();
  return (
    <>
      <h1> COUNTER : {count}</h1>
      <h1> USER : {user?.name}</h1>

      <button onClick={() => dispatch(increment(2))}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(loginUser())}>Login</button>
    </>
  );
}

export default App;
