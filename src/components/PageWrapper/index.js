import React from "react";
import PropTypes from "prop-types";

import { Head } from "../Head";
import { Navigation } from "../Navigation";

export function PageWrapper({ children }) {
  return (
    <div className="bg-emerald-50 ">
      <Head />
      <div className="flex flex-col h-screen">
        <Navigation />
        {children}
      </div>
    </div>
  );
}

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
