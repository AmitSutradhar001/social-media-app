import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "./components/c_index";
function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .catch((res) => console.log(res))
      .finally(() => setLoading(false));
  });
  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-['#f7f9f9']">
      <div className="w-full block">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
