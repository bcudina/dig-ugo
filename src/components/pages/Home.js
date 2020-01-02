import React, { Component } from "react";
import { InfoConsumer } from "../context";
import Info from "../Info";
import Title from "./Title";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Title prvo="prisutan 24/7" drugo="uočljiv" trece="utjecajan" />
          <div className="row mt-5">
            <InfoConsumer>
              {value => {
                return value.info.map(item => {
                  return <Info key={item.id} item={item} />;
                });
              }}
            </InfoConsumer>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
