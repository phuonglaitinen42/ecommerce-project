import React from "react";
import "../../styles/CustomButton.scss";
const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
    {...otherProps}
  >
    {children}
  </button> //modify button classname
);

export default CustomButton;
