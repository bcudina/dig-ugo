//stranica porfolio firmi partnera
//stranica portfolioinfo uređuje ovu stranicu
//povlačenje podataka sa stranice data.js

import React, { Component } from "react";
import { InfoConsumer } from "../context";
import PortfolioInfo from "../portfolio-info";

class Portfolio extends Component {
  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <InfoConsumer>
            {value => {
              return value.portfolioData.map(item => {
                return <PortfolioInfo key={item.id} item={item} />;
              });
            }}
          </InfoConsumer>
        </div>
      </div>
    );
  }
}

export default Portfolio;
