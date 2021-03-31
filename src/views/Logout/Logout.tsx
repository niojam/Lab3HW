import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import { KAHOOT_TOKEN_COOKIE } from "../../common/constants/Constants";
import { useDispatch } from "react-redux";
import { setIsUserAuthenticated } from "../../store/AuthenticationSlice";

const Logout = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [cookies, setCookie, removeCookie] = useCookies();

  useEffect(() => {
    dispatch(setIsUserAuthenticated(false));
    removeCookie(KAHOOT_TOKEN_COOKIE);
    history.push("/login");
  }, []);

  return <></>;
};

export default Logout;
