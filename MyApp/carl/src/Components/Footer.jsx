import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
    <div className='main'>
             <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify"> In Urdu, poetry or Shaayaree, essentially comprises couplet, or Sher. The plural for Sher is Ashaar. The form ghazal is a collection of mulitiple ashaar - each of which should convey a complete thought without any reference to other shayari of the same ghazal.</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul class="footer-links">
              <li><a href="/">Mirza Ghalib</a></li>
              <li><a href="">john Elia</a></li>
              <li><a href="">Ahmed Faraz</a></li>
              <li><a href="">Meer Taqi Meer</a></li>
              <li><a href="">Faiz Ahmed Faiz</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="/">About Us</a></li>
              <li><a href="">Contact Us</a></li>
              <li><a href="">Contribute</a></li>
              <li><a href="">Privacy Policy</a></li>
              <li><a href="">Sitemap</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
          </div>
        </div>
      </div>
</footer>
</div>
    );
};

export default Footer;