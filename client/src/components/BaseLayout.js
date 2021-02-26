
import React from "react";
import Footer from "./Footing";
import Heading from "./Heading";
import { Box } from 'grommet'
//import '../styles/BaseLayout.css'

function BaseLayout(props) {
  return (
      <div className="content">
          <Heading></Heading>
          {props.children}
          <Footer></Footer>
      </div>
  );
}

export default BaseLayout;
