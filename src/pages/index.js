import React from "react";
import { PageWrapper } from "../components";

const IndexPage = () => (
  <PageWrapper>
    <div className="grid grid-cols-12 flex flex-grow">
      <div className="flex flex-col justify-center col-start-2 col-end-7">
        <h3 className="pb-4">hi, it’s nice to meet you! 👋🏻</h3>
        <h3 className="pb-4">
          my name is jamie, i am a toronto based developer who sometimes dabbles
          in <a href="/">design</a> and <a href="/">music</a>.
        </h3>
        <h3 className="pb-4">
          i currently work at <a href="/">shopify</a> as a developer.
        </h3>
        <h3 className="pb-4">
          if you’d like to connect reach out to me through{" "}
          <a href="/">github</a>, <a href="/">email</a> or{" "}
          <a href="/">linkedin</a>!
        </h3>
      </div>
      <div className="col-start-7 col-end-12 flex flex-col justify-center">
        <div className="relative h-fit">
          <img src="/green-bg.png" alt="Green blob background" />
          <div className="absolute top-0 left-0">
            <img src="/jamie-face.png" alt="Illustration of Jamie" />
          </div>
        </div>
      </div>
    </div>
  </PageWrapper>
);

export default IndexPage;
