import React, { Component } from "react";
import { InfoConsumer } from "./context";

/* class */

class FaqCard extends Component {
  render() {
    const { id, pitanje, odgovor, newsTitle, newsText } = this.props.item;

    return (
      <InfoConsumer>
        {value => (
          <div className="card container mt-2 mb-3 p-5">
            <div className="card-body">
              <h5 key={id} className="card-title">
                {pitanje}
              </h5>
              <h5 key={id} className="card-title">
                {newsTitle}
              </h5>
              <p className="card-text"> {odgovor} </p>
              <p className="card-text"> {newsText} </p>
            </div>
          </div>
        )}
      </InfoConsumer>
    );
  }
}

export default FaqCard;
