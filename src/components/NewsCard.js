import React, { Component } from "react";
import { InfoConsumer } from "../components/context";
import { Link } from "react-router-dom";

/* class */

class NewsCard extends Component {
  render() {
    const {
      id,
      headerTitle,
      newsTitle,
      newsText,
      headerText,
      description,
      img,
      img1,
      img2,
      maps
    } = this.props.item;
    return (
      <InfoConsumer>
        {value => (
          <div className="card container mt-2 mb-3 p-5">
            <div className="card-body">
              <h5 key={id} className="card-title">
                {headerTitle}
              </h5>
              <h5 key={id} className="card-title">
                {newsTitle}
              </h5>
              <p className="card-text">{headerText}</p>
              <p className="card-text">{description}</p>
              <p className="card-text">{newsText}</p>
              {/*jedan od dva iamge je za brisanje ukoliko
              se ne postavi druga slika*/}
              <img src={img} alt={headerTitle} className="card-img-top" />
              <p></p>
              <img src={img1} alt={headerTitle} className="card-img-top" />
              <p></p>
              <img src={img2} alt={headerTitle} className="card-img-top" />

              <p className="card-text">{}</p>

              <div className="tab-pane" id="map" role="tabpanel">
                <iframe
                  src={maps}
                  style={{
                    border: "0",
                    height: "28.125rem",
                    width: "100%",
                    frameborder: "0"
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </InfoConsumer>
    );
  }
}

export default NewsCard;
