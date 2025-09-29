import { increment, decrement, reset } from "./redux/action/counterAction";
import type { RootState , AppDispatch} from "./redux/store";
import { useSelector, useDispatch } from "react-redux";
import CountView from "./CountView";

const App = () => {
  
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch: AppDispatch = useDispatch();


  const hadleIncrimant = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleSetValue = () => {
    dispatch(reset());
  };

  return (
    <div>
      <CountView/>
      <button onClick={hadleIncrimant}>+</button>
      <button onClick={handleSetValue}>reset</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
};

export default App;