import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUserThunk } from "../../store/authSlice";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      dispatch(getCurrentUserThunk());
    }
  }, [dispatch, user]);

  if (isLoading) return <div>Loading...</div>;

  return user ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
