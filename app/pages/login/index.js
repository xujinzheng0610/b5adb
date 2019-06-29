import React from "react";

import LayoutDesign from "../../layouts/layoutDesign";
import AuthenticationForm from "../../components/AuthenticationForm";

const PageLogin = props => {
  console.log(props, props);
  return (
    <LayoutDesign>
      <div>
        <h1>Welcome to Bridge5 Asia Database Management</h1>
        <AuthenticationForm view={"login"} />
      </div>
    </LayoutDesign>
  );
};

export default PageLogin;
