import React, { useContext, useEffect } from "react";
import { StateContext } from '../context/index';
import { Slider } from '../sliders/Slider.jsx';

export const IntroContainer = () => {
  const {state, dispatch } = useContext(StateContext);
  const x = 100;
  const y = 100;
  let styles = { 
      transform: `translate(${x}px, ${y}px) rotate(${state.slider}deg)`
  };

  useEffect(() => {
    styles = { 
      transform: `translate(${x}px, ${y}px) rotate(${state.slider}deg)`
  };
  },
  [state.slider],
  );

  return (
    <div className='intro-component-wrapper' style={styles}>
      <Slider />
    </div>
  );
};
