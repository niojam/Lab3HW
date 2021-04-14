import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { setIsUserAuthenticated } from "../../store/AuthenticationSlice";
import { KAHOOT_TOKEN_COOKIE } from "../../constants";

const Logout = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [cookies, setCookie, removeCookie] = useCookies();

  useEffect(() => {
    dispatch(setIsUserAuthenticated(false));
    removeCookie(KAHOOT_TOKEN_COOKIE, {
      path: "/",
      domain: process.env.REACT_APP_COOKIE_DOMAIN,
    });
    history.push("/login");
  }, []);

  return <></>;
};

export default Logout;
