import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import propTypes from "prop-types";

export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.status);
  // Handle the initial render
  useEffect(() => {
    setLoader(false);
  }, []);

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }
    setLoader(false);
  }, [authStatus, navigate, authentication]);

  if (loader) {
    return <h1>Loading...</h1>;
  }

  return <>{children}</>;
}

Protected.propTypes = {
  children: propTypes.node.isRequired,
  authentication: propTypes.bool,
};
