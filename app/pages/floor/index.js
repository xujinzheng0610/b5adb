import React from "react";
import { connect } from "react-redux";

import withLoginGate from "../../hocs/LoginGate";
import LayoutDesign from "../../layouts/layoutDesign";


const PageProject = () => (
  <LayoutDesign>
    <h3>Floor</h3>
    
  </LayoutDesign>
);

export default withLoginGate(connect()(PageProject));