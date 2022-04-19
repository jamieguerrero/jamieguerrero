/* eslint-disable new-cap */
import React from "react";
import p5 from "p5";

export class P5 extends React.Component {
  constructor(props) {
    super(props);
    this.sketchRef = React.createRef();
    this.sketch = props.sketch;
  }

  componentDidMount() {
    this.myP5 = new p5(this.sketch, this.sketchRef.current);
  }

  render() {
    return <div ref={this.sketchRef} />;
  }
}
