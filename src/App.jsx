import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCurrentUserThunk } from "./store/authSlice";
import IndexRouter from "./router";

function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getCurrentUserThunk());
  // }, []);

  return <IndexRouter />;
}

export default App;
