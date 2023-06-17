import React from "react";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";

import content from "../data/about.json";


const About = () => {
  return (
    <div>
      <Banner class="aboutBackground" />
      {content.map((item) => (
        <Collapse title={item.title} key={item.title}>
          {item.content}
        </Collapse>
      ))}
    </div>
  );
};

export default About;
