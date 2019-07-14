import React from "react";

import withLoginGate from "../../hocs/LoginGate";
import LayoutDesign from "../../layouts/layoutDesign";


const PageFloor = () => (
  <LayoutDesign>
    <h3>Floor</h3>
    
  </LayoutDesign>
);

export default withLoginGate(PageFloor);