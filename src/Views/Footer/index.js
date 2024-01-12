import "./index.css";

import { SiWhatsapp } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTiktok } from "react-icons/fa";

import { IoLogoWhatsapp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { SiGmail } from "react-icons/si";

import { CiPaperplane } from "react-icons/ci";
import { FaSquarePhone } from "react-icons/fa6";

function Footer() {
  return (
    <div className="footer">
      <div className="links">
        <div className="followUS">
          <h3>Follow us</h3>
          <div>
            <p>
              <SiWhatsapp /> - whatsapp
            </p>
          </div>
          <div>
            <p>
              <FaFacebookF /> - facebook
            </p>
          </div>
          <div>
            <p>
              <IoLogoInstagram /> - instagram
            </p>
          </div>
          <div>
            <p>
              <FaTiktok /> - tiktok
            </p>
          </div>
        </div>
        <div className="contactUs">
          <h3>contact us</h3>

          <div>
            <p>
              <IoLogoWhatsapp /> - whatsapp
            </p>
          </div>
          <div>
            <p>
              <FaPhoneAlt /> - phone
            </p>
          </div>
          <div>
            <p>
              <IoMdMail /> - mail
            </p>
          </div>
          <div>
            <p>
              <SiGmail /> - gmail
            </p>
          </div>
        </div>
        <div className="forCall">
          <h3>For order</h3>

          <div>
            <p>
              <CiPaperplane /> Olx789@Gmail.com
            </p>
          </div>
          <div>
            <p>
              <FaSquarePhone />
              025-542985
            </p>
          </div>
        </div>
        <div className="a-links">
          <h3>Links</h3>
          <a href="">www.olxweb.com</a>
          <a href="">www.youtube.com</a>
          <a href="">www.olxorder.com</a>
        </div>
      </div>

      <p className="pargraph">
        &copy; 2024
        <a href="https://yourwebsite.com" target="_blank">
          OLXWebsite.com
        </a>
        | All rights reserved
      </p>
      <img
        className="footerImg"
        src="https://consolidatedoffice.ca/wp-content/themes/options/images/skins/footers/full_width/footer-tealSkies.jpg"
        alt=""
      />
    </div>
  );
}

export default Footer;
