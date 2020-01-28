import React, { Component } from "react";
import NewsCard from "../NewsCard";

import { InfoConsumer } from "../context";
import Title from "./Title";

/* class */

class slobodnePozicije extends Component {
  render() {
    return (
      <div className="container">
        <Title prvo="slobodne" drugo="Pozicije" />

        <InfoConsumer>
          {value => {
            return value.slobodne.map(item => {
              return <NewsCard key={item.id} item={item} />;
            });
          }}
        </InfoConsumer>
      </div>
    );

    //<div>Nažalost. trenutno nema slobodnoh pozicija</div>
  }
}

export default slobodnePozicije;
