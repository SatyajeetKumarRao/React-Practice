import React from "react";
import AuthContextProvider from "./auth/AuthContextProvider";

const RootProvider = ({ children }) => {
  return (
    <AuthContextProvider>
      {children}
    </AuthContextProvider>
  );
};

export default RootProvider;
