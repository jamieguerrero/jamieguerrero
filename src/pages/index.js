import React from "react";
import { PageWrapper } from "../components";

const IndexPage = () => (
  <PageWrapper>
    <div>
      <h3>hi, it’s nice to meet you! 👋🏻</h3>
      <h3>
        my name is jamie, i am a toronto based developer who sometimes dabbles
        in<a href="/"> design</a> and<a href="/"> music</a>.
      </h3>
      <h3>
        i currently work at<a href="/"> shopify</a> as a developer.
      </h3>
      <h3>
        if you’d like to connect reach out to me through
        <a href="/"> github</a>,<a href="/"> email</a> or
        <a href="/"> linkedin</a>!
      </h3>
    </div>
    <div>
      <img src="/jamie-face.png" alt="Illustration of Jamie" />
      <img src="/green-bg.png" alt="Green blob background" />
    </div>
  </PageWrapper>
);

export default IndexPage;
