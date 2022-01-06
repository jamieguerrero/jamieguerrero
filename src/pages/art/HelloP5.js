/* eslint-disable no-param-reassign */

import React from "react";
import P5 from "../../components/P5";

function HelloP5() {
  const sketch = (p) => {
    p.setup = () => {
      p.createCanvas(400, 400);
    };

    p.draw = () => {
      if (p.mouseIsPressed) {
        p.fill(0);
      } else {
        p.fill(255);
      }
      p.ellipse(p.mouseX, p.mouseY, 80, 80);
    };
  };
  return <P5 sketch={sketch} />;
}

export default HelloP5;
