import React from "react";

import { images } from "../constants";

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: "1rem" }}>
    <div>
      {" "}
      <p className="p__cormorant">{title}</p>
      <div
        className="app__menuitem-dash"
        style={{ marginBottom: "1rem", width: "100%" }}
      />
    </div>
  </div>
);

export default SubHeading;
