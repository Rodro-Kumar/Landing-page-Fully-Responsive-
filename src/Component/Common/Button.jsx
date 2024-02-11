import React from "react";

const Button = ({ className, children }) => {
  return (
    <>
      <button className={className}>{children ? children : "Button"}</button>
    </>
  );
};

export default Button;
