import React, { Component } from "react";
import NewsCard from "../NewsCard";
import { InfoConsumer } from "../context";
import Title from "./Title";

class News extends Component {
  render() {
    return (
      <div className="container">
        <Title prvo="reklame -" drugo="Vrste" />

        <InfoConsumer>
          {value => {
            return value.news.map(item => {
              return <NewsCard key={item.id} item={item} />;
            });
          }}
        </InfoConsumer>
      </div>
    );
  }
}

export default News;
