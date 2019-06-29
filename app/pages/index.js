import React from "react";
import {withLoginGate} from "../hocs/LoginGate";

import LayoutDesign from "../layouts/layoutDesign";
import Project from "../components/Project";

const PageIndex = () => (
  <LayoutDesign>
    <Project />
  </LayoutDesign>
);

export default withLoginGate(PageIndex);
