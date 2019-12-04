import React, { Component } from "react";
import NewsCard from "../NewsCard";

import { InfoConsumer } from "../context";

class slobodnePozicije extends Component {
  render() {
    return (
      <InfoConsumer>
        {value => {
          return value.slobodne.map(item => {
            return <NewsCard key={item.id} item={item} />;
          });
        }}
      </InfoConsumer>
    );

    //<div>Nažalost. trenutno nema slobodnoh pozicija</div>
  }
}

export default slobodnePozicije;
