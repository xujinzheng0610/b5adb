import React from "react";
import { connect } from "react-redux";

import withLoginGate from "../../hocs/LoginGate";
import LayoutDesign from "../../layouts/layoutDesign";
import Project from "../../components/Project";

const PageProject = () => (
  <LayoutDesign>
    <h3>Project</h3>
    <Project />
  </LayoutDesign>
);

export default withLoginGate(connect()(PageProject));
