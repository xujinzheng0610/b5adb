import React from "react";
import {withLoginGate} from "../hocs/LoginGate";

import LayoutDesign from "../layouts/layoutDesign";
import Project from "../components/Project";

const PageIndex = () => (
  <LayoutDesign>
    <h3>Project</h3>
    <Project />
  </LayoutDesign>
);

export default withLoginGate(PageIndex);
