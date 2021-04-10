import React from "react";

import VerticalNav from "../components/vertical-navs/VerticalNav";
import Header from "../components/headers/Header";

export default function Index() {
  return (
    <React.Fragment>
      <VerticalNav
        content={{
          brand: {
            text: "Dhanai Fruits",
            image: "mui-assets/img/logo-pied-piper-white.png",
            width: "120"
          },
          "brand-small": {
            text: "Dhanai Fruits",
            image: "mui-assets/img/logo-pied-piper-white-icon.png",
            width: "32"
          },
          link1: "Dashboard",
          link2: "Product",
          link4: "Contact"
        }}
        bucketMain={[<Header content={null} />]}
      />
    </React.Fragment>
  );
}
