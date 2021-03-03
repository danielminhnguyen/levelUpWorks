import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">
        <div>
          <h3>COMPANY</h3>
          <div>
            <a href="blank">About Us</a>
            <a href="blank">Careers</a>
            <a href="blank">Partners</a>
          </div>
        </div>
        <div>
          <h3>COURSES</h3>
          <div>
            <a href="blank">Register</a>
            <a href="blank">Login</a>
            <a href="blank">Projects</a>
            <a href="blank">Teachers</a>
            <a href="blank">Parents</a>
            <a href="blank">Resources</a>
          </div>
        </div>
        <div>
          <h3>SUPPORT</h3>
          <div>
            <a href="blank">FAQs</a>
            <a href="blank">Helpdesk</a>
            <a href="blank">Contact us</a>
          </div>
        </div>
        <div>
          <h3>LEGAL</h3>
          <div>
            <a href="blank">Terms & Coditions</a>
            <a href="blank">Privacy Policy</a>
          </div>
        </div>
        <div className="footer-intro">
          <h3>LevelUp Works</h3>
          <div>
            LevelUp Works is an Auckland-based enterprise dedicated to developing game-based
            learning software to help teachers in response to the New Zealand Digital Technologies &
            Hangarau Matihiko.
          </div>
          <div>alan@levelupworks.com</div>
          <div>(021) 668 185</div>
        </div>
      </div>
    </footer>
  );
}
