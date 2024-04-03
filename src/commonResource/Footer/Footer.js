import React from "react";

import icons from "../images/icons/16.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="footer-wrapper">
        <div className="container">
          <div className="upper-text-container">
            <p>
              1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro
              promotional pricing is after trade‑in of iPhone 8 Plus and iPhone
              X in good condition. Additional trade‑in values require purchase
              of a new iPhone, subject to availability and limits. Must be at
              least 18. Apple or its trade-in partners reserve the right to
              refuse or limit any Trade In transaction for any reason. In‑store
              trade‑in requires presentation of a valid, government-issued photo
              ID (local law may require saving this information). Sales tax may
              be assessed on full value of new iPhone. Additional terms from
              Apple or Apple’s trade-in partners may apply. Monthly pricing:
              Available to qualified customers and requires 0% APR, 24-month
              installment loan with Citizens One or Apple Card Monthly
              Installments and iPhone activation with AT&T, Sprint, T-Mobile, or
              Verizon. Taxes and shipping not included. Additional Apple Card
              Monthly Installments terms are in the
              <a
                href="https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Customer Agreement
              </a>
              . Additional iPhone Payments terms are
              <a
                href="https://www.apple.com/legal/sales-support/iphoneinstallments_us/"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
            </p>
            <p>
              2. Subscription required.
              <br />
              <br />
              Magic Keyboard sold separately.
              <br />
              <br />
              Apple TV+ is $4.99/month after free trial. One subscription per
              Family Sharing group. Offer good for 3 months after eligible
              device activation. Plan automatically renews until cancelled.
              Restrictions and other
              <a href="https://www.apple.com/promo/">terms </a> apply.
            </p>
          </div>
          <div className="footer-links-wrapper row">
            <div className="links-wrapper-1 col-sm-12 col-md">
              <h3>Shop and Learn</h3>
              <ul>
                <li>
                  <Link to="/mac">Mac</Link>
                </li>
                <li>
                  <Link to="/ipad">iPad</Link>
                </li>
                <li>
                  <Link to="/iphone">iPhone</Link>
                </li>
                <li>
                  <Link to="/watch">Watch</Link>
                </li>
                <li>
                  <Link to="/tv">TV</Link>
                </li>
                <li>
                  <Link to="/music">Music</Link>
                </li>
                <li>
                  <Link to="/airpods">AirPods</Link>
                </li>
                <li>
                  <Link to="/homepod">HomePod</Link>
                </li>
                <li>
                  <Link to="/ipod-touch">iPod touch</Link>
                </li>
                <li>
                  <Link to="/accessories">Accessories</Link>
                </li>
                <li>
                  <Link to="/gift-cards">Gift Cards</Link>
                </li>
              </ul>
            </div>
            <div className="links-wrapper-2 col-sm-12 col-md">
              <h3>Services</h3>
              <ul>
                <li>
                  <Link to="/apple-music">Apple Music</Link>
                </li>
                <li>
                  <Link to="/apple-news">Apple News+</Link>
                </li>
                <li>
                  <Link to="/apple-tv">Apple TV+</Link>
                </li>
                <li>
                  <Link to="/apple-arcade">Apple Arcade</Link>
                </li>
                <li>
                  <Link to="/apple-card">Apple Card</Link>
                </li>
                <li>
                  <Link to="/icloud">iCloud</Link>
                </li>
              </ul>
              <h3>Account</h3>
              <ul>
                <li>
                  <Link to="/manage-apple-id">Manage Your Apple ID</Link>
                </li>
                <li>
                  <Link to="/apple-store-account">Apple Store Account</Link>
                </li>
                <li>
                  <Link to="/icloud-com">iCloud.com</Link>
                </li>
              </ul>
            </div>
            <div className="links-wrapper-3 col-sm-12 col-md">
              <h3>Apple Store</h3>
              <ul>
                <li>
                  <Link to="/find-store">Find a Store</Link>
                </li>
                <li>
                  <Link to="/genius-bar">Genius Bar</Link>
                </li>
                <li>
                  <Link to="/today-at-apple">Today at Apple</Link>
                </li>
                <li>
                  <Link to="/apple-camp">Apple Camp</Link>
                </li>
                <li>
                  <Link to="/field-trip">Field Trip</Link>
                </li>
                <li>
                  <Link to="/apple-store-app">Apple Store App</Link>
                </li>
                <li>
                  <Link to="/refurbished-clearance">
                    Refurbished and Clearance
                  </Link>
                </li>
                <li>
                  <Link to="/financing">Financing</Link>
                </li>
                <li>
                  <Link to="/apple-trade-in">Apple Trade In</Link>
                </li>
                <li>
                  <Link to="/order-status">Order Status</Link>
                </li>
                <li>
                  <Link to="/shopping-help">Shopping Help</Link>
                </li>
              </ul>
            </div>
            <div className="links-wrapper-4 col-sm-12 col-md">
              <h3>For Business</h3>
              <ul>
                <li>
                  <Link to="/apple-business">Apple and Business</Link>
                </li>
                <li>
                  <Link to="/shop-business">Shop for Business</Link>
                </li>
              </ul>
              <h3>For Education</h3>
              <ul>
                <li>
                  <Link to="/apple-education">Apple and Education</Link>
                </li>
                <li>
                  <Link to="/shop-college">Shop for College</Link>
                </li>
              </ul>
              <h3>For Healthcare</h3>
              <ul>
                <li>
                  <Link to="/manage-apple-id">Manage Your Apple ID</Link>
                </li>
                <li>
                  <Link to="/apple-store-account">Apple Store Account</Link>
                </li>
                <li>
                  <Link to="/icloud-com">iCloud.com</Link>
                </li>
              </ul>
              <h3>For Government</h3>
              <ul>
                <li>
                  <Link to="/apple-education">Apple and Education</Link>
                </li>
                <li>
                  <Link to="/shop-college">Shop for College</Link>
                </li>
              </ul>
            </div>
            <div className="links-wrapper-5 col-sm-12 col-md">
              <h3>Apple Values</h3>
              <ul>
                <li>
                  <Link to="/find-store">Find a Store</Link>
                </li>
                <li>
                  <Link to="/genius-bar">Genius Bar</Link>
                </li>
                <li>
                  <Link to="/today-at-apple">Today at Apple</Link>
                </li>
                <li>
                  <Link to="/apple-camp">Apple Camp</Link>
                </li>
                <li>
                  <Link to="/field-trip">Field Trip</Link>
                </li>
                <li>
                  <Link to="/apple-store-app">Apple Store App</Link>
                </li>
              </ul>
              <h3>About Apple</h3>
              <ul>
                <li>
                  <Link to="/find-store">Find a Store</Link>
                </li>
                <li>
                  <Link to="/genius-bar">Genius Bar</Link>
                </li>
                <li>
                  <Link to="/today-at-apple">Today at Apple</Link>
                </li>
                <li>
                  <Link to="/apple-camp">Apple Camp</Link>
                </li>
                <li>
                  <Link to="/field-trip">Field Trip</Link>
                </li>
                <li>
                  <Link to="/apple-store-app">Apple Store App</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="my-apple-wrapper">
            More ways to shop:{" "}
            <Link to="/find-apple-store">Find an Apple Store</Link> or{" "}
            <Link to="/other-retailer">other retailer</Link> near you. Or call
            1-800-MY-APPLE.
          </div>
          <div className="copyright-wrapper row">
            <div className="copyright col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1">
              Copyright &copy; 2020 Apple Inc. All rights reserved.
            </div>
            <div className="footer-links-terms  col-sm-12 order-3 col-lg-6 order-lg-2">
              <ul>
                <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms-of-use">Terms of Use</Link>
                </li>
                <li>
                  <Link to="/sales-and-refunds">Sales and Refunds</Link>
                </li>
                <li>
                  <Link to="/legal">Legal</Link>
                </li>
                <li>
                  <Link to="/site-map">Site Map</Link>
                </li>
              </ul>
            </div>
            <div className="footer-country  col-sm-12 order-1 col-md-4 order-md-2 text-md-right col-lg-2 order-lg-3">
              <div className="flag-wrapper">
                <img src={icons} alt="" />
              </div>
              <div className="footer-country-name">United States</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
