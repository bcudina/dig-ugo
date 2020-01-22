import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container ">
          <div className="row ">
            {/* Column 1 */}
            <div className="col-md-4 col-sm-6 name">
              <h4>Promo Link d.o.o.</h4>
              <ul className="list-unstyled">
                <li>Put skalica 5</li> <li>Split</li>
              </ul>
            </div>
            {/* Column 2 */}
            <div className="col-md-3 col-sm-6">
              <h5>e-mail</h5>
              <ul className="list-unstyled">
                <li>
                  <p>info@promolink.hr</p>
                </li>
              </ul>
            </div>
            {/* Column 3 */}
            <div className="col-md-3 col-sm-6">
              <h5>Kontakt</h5>{" "}
              <ul className="list-unstyled">
                <li>
                  <p>++ 385 99 45 88 007</p>
                </li>
              </ul>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <a target="_blank" href="https://bcudina.bss.design/">
              <p className="text-xs-center">
                &copy; {new Date().getFullYear()}
                Božidar Ćudina - All Rights Reserved
              </p>
            </a>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}
export default Footer;

const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainLightGrey);
  }

  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }

  h4 {
    color: var(--mainWhite);
  }

  ul li p {
    color: var(--mainWhite);
  }

  ul li a:hover {
    color: var(--mainLightGrey);
  }

  name {
    color: var(--mainWhite);
  }
`;
