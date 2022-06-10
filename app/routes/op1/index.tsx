import type { LinksFunction } from "@remix-run/node";

import stylesUrl from "~/styles/op1.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function Index() {
  return (
    <div className="op-wrapper">
      <div className="op-outer-border">
        <div className="op-inner-border">
          <div className="speaker" />
          <div className="volume" />
          <div className="chatbox" />
          <div className="metronome" />
          <div className="screen" />
          <div className="knob-blue" />
          <div className="knob-green" />
          <div className="knob-white" />
          <div className="knob-orange" />
          <div className="mic" />
          <div className="com" />
          <div className="synth" />
          <div className="drum" />
          <div className="tape" />
          <div className="levels" />
          <div className="button-1" />
          <div className="button-2" />
          <div className="button-3" />
          <div className="button-4" />
          <div className="option-1" />
          <div className="option-2" />
          <div className="option-3" />
          <div className="option-4" />
          <div className="option-5" />
          <div className="option-6" />
          <div className="option-7" />
          <div className="option-8" />
          <div className="arpeggiator" />
          <div className="lift" />
          <div className="drop" />
          <div className="join" />
          <div className="record" />
          <div className="play" />
          <div className="stop" />
          <div className="left" />
          <div className="right" />
          <div className="shift" />
          <div className="keyboard">
            <div className="black-keys">
              <div className="black-right" />
              <div className="black-center" />
              <div className="black-left" />
              <div className="black-right" />
              <div className="black-left" />
              <div className="black-right" />
              <div className="black-center" />
              <div className="black-left" />
              <div className="black-right" />
              <div className="black-left" />
            </div>
            <div className="white-keys">
              <div key="f1" className="white-key" />
              <div key="g1" className="white-key" />
              <div key="a1" className="white-key" />
              <div key="b1" className="white-key" />
              <div key="c1" className="white-key" />
              <div key="d1" className="white-key" />
              <div key="e1" className="white-key" />
              <div key="f2" className="white-key" />
              <div key="g2" className="white-key" />
              <div key="a2" className="white-key" />
              <div key="b2" className="white-key" />
              <div key="c2" className="white-key" />
              <div key="d2" className="white-key" />
              <div key="e2" className="white-key" />
            </div>
          </div>
        </div>
      </div>
      <img
        className="op-reference"
        src="https://cdn.glitch.global/e8c416b0-b267-4f97-b85c-a89ab0a34377/op1.webp?v=1650494144624"
        alt="Op 1"
      />
    </div>
  );
}
