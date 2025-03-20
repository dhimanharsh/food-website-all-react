import React from 'react'

function Footer() {
  return (
<footer className="footer">
    <div className="footer-container">
        <div className="footer-section about">
            <h2>About Us</h2>
            <p>We are passionate about food and dedicated to bringing you the best recipes, cooking tips, and culinary inspiration.</p>
        </div>
        <div className="footer-section links">
            <h2>Quick Links</h2>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#recipes">Recipes</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>
        </div>
        <div className="footer-section contact">
            <h2>Contact Us</h2>
            <p>Email: info@foodwebsite.com</p>
            <p>Phone: +1 234 567 890</p>
        </div>
    </div>
    <div className="footer-bottom">
        &copy; 2025 Food Website | All Rights Reserved
    </div>
</footer>
  )
}

export default Footer