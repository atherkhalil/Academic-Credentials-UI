import React from "react";
import { Animated } from "react-animated-css";

const Animatehoc = (WrapComponent) => {
  const componentAnimatehoc = () => {
    return (
      <Animated
        animationIn="bounceInRight"
        animationOut="bounceOutDown"
        animationInDuration={1000}
        animationOutDuration={1000}
      >
        <WrapComponent />
      </Animated>
    );
  };

  return componentAnimatehoc;
};

export default Animatehoc;