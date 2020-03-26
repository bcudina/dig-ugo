import React, { Component } from "react";
import { InfoConsumer } from "../context";
import Title from "./Title";
import FaqCard from "../faqCard";

/* class */

class News extends Component {
  render() {
    return (
      <div className="container">
        <Title prvo="reklame -" drugo="Vrste" />

        <InfoConsumer>
          {value => {
            return value.news.map(item => {
              return <FaqCard key={item.id} item={item} />;
            });
          }}
        </InfoConsumer>
      </div>
    );
  }
}

export default News;
