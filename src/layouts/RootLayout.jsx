import React from "react";

const RootLayout = ({ children }) => {
  return (
    <>
      <h1>Hello</h1>
      <main>{children}</main>
    </>
  );
};

export default RootLayout;
