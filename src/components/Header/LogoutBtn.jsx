import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

export default function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => dispatch(logout()));
  };
  return (
    <button
      onClick={logoutHandler}
      className="rounded-lg inline-block m-3 w-24 pt-2 pb-2 duration-200 bg-yellow-300 hover:bg-orange-400"
    >
      Logout
    </button>
  );
}
