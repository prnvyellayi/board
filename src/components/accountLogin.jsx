import React, { Component } from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

const clientId = "xyz";

const AccountLogin = () => {
  return (
    <>
      <GoogleOAuthProvider>
        <GoogleLogin
          shape={"pill"}
          clientId={clientId}
          buttonText="Sign in via Google"
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      </GoogleOAuthProvider>
    </>
  );
};

export default AccountLogin;
