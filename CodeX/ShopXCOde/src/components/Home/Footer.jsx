import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
    return (
        <nav className="footer-nav">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Customer Service</h3>
                    <ul className="footer-links">
                        <li><a aria-label="Order Status" href="https://www.nordstromrack.com/signin/order-lookup">Order Status</a></li>
                        <li><a aria-label="Guest Returns" href="https://www.nordstromrack.com/my-account/blank-return">Guest Returns</a></li>
                        <li><a aria-label="Shipping &amp; Return Policy" href="https://www.nordstromrack.com/ship-return-policy">Shipping &amp; Return Policy</a></li>
                        <li><a aria-label="Gift Cards" href="https://rack.giftcard.nordstrom.com/store/recipient?locale=en-us">Gift Cards</a></li>
                        <li><a aria-label="Product Recalls" href="https://www.nordstrom.com/browse/customer-service/product-recalls">Product Recalls</a></li>
                        <li><a aria-label="FAQ" href="https://www.nordstromrack.com/faq">FAQ</a></li>
                        <li><a aria-label="Contact Us" href="https://www.nordstromrack.com/faq#anchor-link-customer-care">Contact Us</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>About Us</h3>
                    <ul className="footer-links">
                        <li><a aria-label="About Our Brand" href="https://www.nordstromrack.com/about">About Our Brand</a></li>
                        <li><a aria-label="The Nordy Club" href="https://www.nordstromrack.com/nordyclub">The Nordy Club</a></li>
                        <li><a aria-label="Store Locator" href="https://stores.nordstromrack.com/search">Store Locator</a></li>
                        <li><a aria-label="All Brands" href="https://www.nordstromrack.com/brands">All Brands</a></li>
                        <li><a aria-label="Careers" href="https://careers.nordstrom.com/#/home/rack">Careers</a></li>
                        <li><a aria-label="Get Email Updates" href="https://www.nordstromrack.com/my-account/marketing-email-opt-in/">Get Email Updates</a></li>
                        <li><a aria-label="Nordstrom Blog" href="https://www.nordstrom.com/browse/content/style-guides?origin=footer" target="_popup">Nordstrom Blog</a></li>
                        <li><a aria-label="Nordy Podcast" href="https://www.nordstromrack.com/promo/nordy-podcast?origin=footer">Nordy Podcast</a></li>
                        <li><a aria-label="Store Openings" href="https://www.nordstromrack.com/promo/new-store-openings">Store Openings</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>  The Community</h3>
                    <ul className="footer-links">
                        <li><a aria-label="Corporate Social Responsibility" href="https://www.nordstromrack.com/promo/nordstrom-cares">Corporate Social Responsibility</a></li>
                        <li><a aria-label="Diversity, Equity, Inclusion &amp; Belonging" href="https://www.nordstromrack.com/promo/diversity-at-nordstrom">Diversity, Equity, Inclusion &amp; Belonging</a></li>
                        <li><a aria-label="Big Brothers Big Sisters" href="https://www.nordstromrack.com/bbbs">Big Brothers Big Sisters</a></li>
                        <li><a aria-label="Donate Clothes" href="https://www.nordstromrack.com/promo/donateclothes">Donate Clothes</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Nordstrom Card</h3>
                    <ul className="footer-links">
                        <li><a aria-label="Apply for a Nordstrom Card" href="https://www.nordstromrack.com/creditcard/entry?cc=RA1001">Apply for a Nord strom Card</a></li>
                        <li><a aria-label="Pay My Bill" href="https://www.nordstromcard.com/en/pay-bill/make-a-transfer/form">Pay My Bill</a></li>
                        <li><a aria-label="Manage my Nordstrom Card" href="https://www.nordstromcard.com/">Manage my Nordstrom Card</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Nordstrom, Inc.</h3>
                    <ul className="footer-links">
                        <li><a aria-label="Nordstrom" href="https://www.nordstrom.com/" target="_blank">Nordstrom</a></li>
                        <li><a aria-label="HauteLook" href="https://www.nordstromrack.com/promo/hautelook">HauteLook</a></li>
                        <li><a aria-label="Investor Relations" href="https://press.nordstrom.com/investor-relations">Investor Relations</a></li>
                        <li><a aria-label="Press Releases" href="http://press.nordstrom.com/phoenix.zhtml?c=211996&amp;p=irol-overview&amp;origin=footer">Press Releases</a></li>
                        <li><a aria-label="Nordstrom Media Network" href="https://www.nordstromrack.com/promo/nordstrom-media-network?origin=footer">Nordstrom Media Network</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-social">
                <section className="footer-apps">
                    <h3>Download Our Apps</h3>
                    <a aria-label="Download Our Apps" href="https://www.nordstromrack.com/promo/NordstromRackApp">Download Our Apps</a>
                </section>
                <section id="social-links">
                <ul className="social-icons">
                        <li><a aria-label="Facebook" href="https://www.svgrepo.com/show/303114/facebook-3-logo.svg"><img src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" alt="Facebook" /></a></li>
                        <li><a aria-label="Twitter" href="https://twitter.com/nordstromrack"><img src="https://www.svgrepo.com/show/475689/twitter-color.svg" alt="Twitter" /></a></li>
                        <li><a aria-label="Instagram" href="https://www.instagram.com/nordstromrack"><img src="https://www.svgrepo.com/show/452229/instagram-1.svg" alt="Instagram" /></a></li>
                    </ul>
                </section>
            </div>
            <div className="footer-bottom">
                <ul className="footer-bottom-links">
                    <li><a aria-label="Privacy" href="https://nordstrom.com/browse/customer-service/policy/privacy">Privacy</a></li>
                    <li><a aria-label="Your Privacy Rights" href="https://www.nordstrom.com/browse/customer-service/policy/privacy#anchor-link-your-options">Your Privacy Rights</a></li>
                    <li><a aria-label="Terms &amp; Conditions" href="https://www.nordstromrack.com/terms">Terms &amp; Conditions</a></li>
                    <li><a aria-label="California Supply Chain Act" href="https://www.nordstrom.com/browse/nordstrom-cares/strategy-governance-reporting/ctsc-disclosure">California Supply Chain Act</a></li>
                </ul>
                <p>©2024 Nordstrom Rack,(<i>Created By Prathamesh Magar #PrathameshZ900</i> )</p>
            </div>
        </nav>
    );
};

export default Footer;