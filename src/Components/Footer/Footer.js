import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="f-end">
        <hr />
        <div className="f-center">
          <div className="f-heading">Questions ? Call 000-585-857-6473</div>
          <div className="all-lists">
            <div className="f-font-size">
              <Link className="faq" to="/faq">
                FAQ
              </Link>
              <Link className="f-line-2 f-help" to="/">
                Help Centre
              </Link>
              <Link className=" f-left-3" to="/">
                Account
              </Link>
              <Link className=" f-line-41 mediac" to="/">
                Media Centre
              </Link>
            </div>

            <div className="f-font-size">
              <Link className="relation-f f-all2 f-weall f-left-area" to="/">
                Investor Relations
              </Link>
              <Link className="l-job f-weall" to="/">
                Jobs
              </Link>
              <Link className=" f-ways f-weall f-left-area" to="/">
                Ways to Watch
              </Link>
              <Link className="f-tou f-weall" to="/">
                Terms of Use
              </Link>
            </div>

            <div className="f-font-size f-all2">
              <Link className="f-privacy f-weall f-left-area" to="/">
                Privacy
              </Link>
              <Link className="f-line-2 f-left-side f-cookie f-weall" to="/">
                Cookie Preferences
              </Link>
              <Link className="f-ci f-weall f-left-area" to="/">
                Corporate Information
              </Link>
              <Link className="f-contact f-weall" to="/">
                Contact Us
              </Link>
            </div>

            <div className="f-font-size f-all2">
              <Link className="f-weall f-speed f-left-area" to="/">
                Speed Test
              </Link>
              <Link className="f-line-22 f-weall f-lnotice" to="/">
                Legal Notices
              </Link>
              <Link className="f-line-22 f-oon f-weall f-left-area" to="/">
                Only on Netflix
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
