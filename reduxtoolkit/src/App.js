import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/counterSlice";
import { getUserDetails } from "./redux/userSlice";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  const { user, loading, error } = useSelector((state) => state.user);
  return (
    <>
      {loading ? <h1>Loading//.....</h1> : <h1>User:{user?.name}</h1>}
      {error && <h1>{error}</h1>}
      <h1>Counter App</h1>
      <h2>Count: {count}</h2>

      <button onClick={() => dispatch(increment(2))}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(getUserDetails())}>Login</button>
    </>
  );
}

export default App;
