import React, { useState, useEffect } from "react";
import './UseEffect.scss'

const UseEffect = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [buttonType, setButtonType] = useState();
  

  useEffect(() => {
    window.addEventListener('resize', ()=> {
      setWindowHeight(window.outerHeight)
      setWindowWidth(window.outerWidth)
    })
  }, [buttonType]);

  return (
    <div className="hook-use-effect">
        <div className="hook-use-effect__uses">
          <h1>Uses Of UseEffect</h1>
          <ul>
            <li>we want to run some code after the DOM has been updated. It can be anything, showing pop-ups, sending API requests, logging users’ information etc. and such functions don’t require cleanup to be performed. They are just hit-once functions and then we forget about them</li>
            <li></li>
          </ul>
        </div>
        <h2>Window Width: {windowWidth}</h2>
        <h2> Window Height: {windowHeight}</h2>
    </div>

    // </>
  );
};

export default UseEffect;
