import React from 'react';
import './PortfolioFooter.css';

const PortfolioFooter = () => {
  return (
    <footer className="portfolio-footer">
      <div className="footer-content">
        <div className="footer-about">
          <h2>Abhisek Keshari</h2>
          <p>Data Scientist | ML & AI Enthusiast | Always building & learning.</p>
        </div>
        <div className="footer-contact">
          <p>Email: <a href="mailto:keshariabhisek6@example.com">keshariabhisek6@example.com</a></p>
          <p>Location: Bengaluru, India</p>
        </div>

      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} Abhisek Keshari. All rights reserved.
      </div>
    </footer>
  );
};

export default PortfolioFooter;
