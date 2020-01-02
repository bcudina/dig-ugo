import React, { Component } from "react";
import FaqCard from "../faqCard";

import { InfoConsumer } from "../context";

class Faq extends Component {
  render() {
    return (
      <InfoConsumer>
        {value => {
          return value.cestapitanja.map(item => {
            return <FaqCard key={item.id} item={item} />;
          });
        }}
      </InfoConsumer>
    );
  }
}

export default Faq;
