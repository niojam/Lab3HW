import React from "react";
import styled from "@emotion/styled";
import MicrosoftLogin from "react-microsoft-login";

const LoginPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CLIENT_ID = "47de0de6-509f-424d-a0f9-de8ecb6df0a5";
const TENANT_ID = "f8cdef31-a31e-4b4a-93e4-5f571e91255a";

const Login = () => {
  const authHandler = (err: any, data: any) => {
    console.log(err, data);
  };

  const msRedirect = () => {
    // const loginUrl = `https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=http://localhost:3000/login&&response_mode=form-post&scope=openid%20offline_access&state=12345`;
    const loginUrl = `https://login.microsoftonline.com/f8cdef31-a31e-4b4a-93e4-5f571e91255a/oauth2/v2.0/authorize?client_id=47de0de6-509f-424d-a0f9-de8ecb6df0a5&response_type=code&redirect_uri=http://localhost:3000/login&&response_mode=form-post&scope=openid%20offline_access&state=12345`;
    window.location.href = loginUrl;
  };

  return (
    <div>
      <LoginPanel>
        {/* <MicrosoftLogin
          clientId={CLIENT_ID}
          redirectUri={"http://localhost:3000/home"}
          authCallback={authHandler}
          prompt={"login"}
          debug={true}
        /> */}
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => msRedirect()}
        >
          Login
        </button>
      </LoginPanel>
    </div>
  );
};

export default Login;
