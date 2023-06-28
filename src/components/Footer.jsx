import Logo from "../assets/icons/logofooter.svg";
import InstagramIcon from "../assets/icons/instagramicon";
import FacebookIcon from "../assets/icons/FacebookIcon";
import TwitterIcon from "../assets/icons/TwitterIcon";
import DiscordIcon from "../assets/icons/DiscordIcon";
import TwitchIcon from "../assets/icons/TwitchIcon";
import TikTokIcon from "../assets/icons/TikTokIcon";
import YouTubeIcon from "../assets/icons/YouTubeIcon";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div
        id="footer"
        className="pt-5 pb-4 bg-black text-white text-center footer"
      >
        <div className="container footer-container">
          <h4 className="modelSubtitle fs-4">
            Join the #HyperXFamily on social!
          </h4>
          <p className="pb-4 description">
            Get a sneak peek at our new products and deals when you sign up to
            join the HyperX Family.
          </p>
          <div className="g-3">
            <Link
              to="https://www.instagram.com/hyperx/"
              target={"_blank"}
              className="footer-icon px-2 footer-icon"
            >
              <InstagramIcon className="social-icon" />
            </Link>
            <Link
              to="https://www.facebook.com/hyperxcommunity"
              target={"_blank"}
              className="footer-icon px-2"
            >
              <FacebookIcon />
            </Link>
            <Link
              to="https://twitter.com/hyperx"
              target={"_blank"}
              className="footer-icon px-2"
            >
              <TwitterIcon />
            </Link>
            <Link
              to="https://discord.gg/hyperxgaming"
              target={"_blank"}
              className="footer-icon px-2"
            >
              <DiscordIcon />
            </Link>
            <Link
              to="https://www.tiktok.com/@hyperx?lang=en"
              target={"_blank"}
              className="footer-icon px-2"
            >
              <TikTokIcon />
            </Link>
            <Link
              to="https://www.twitch.tv/hyperx"
              target={"_blank"}
              className="footer-icon px-2"
            >
              <TwitchIcon />
            </Link>
            <Link
              to="https://www.youtube.com/c/hyperx"
              target={"_blank"}
              className="px-2"
            >
              <YouTubeIcon />
            </Link>
          </div>
        </div>
      </div>
      <div className="py-5 footer-background">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <h5 className="fs-5 fw-bold modelSubtitle mb-3">Suport</h5>
              <section className="description d-flex flex-column">
                <Link to="/about-us">
                  <p className="footer-link">Product Suport</p>
                </Link>
                <Link to="/about-us">
                  <p className="footer-link">Contact Suport</p>
                </Link>
                <Link to="/about-us">
                  <p className="footer-link">Shipping Information</p>
                </Link>
                <Link to="/about-us">
                  <p className="footer-link">Refund Policy</p>
                </Link>
                <Link to="/about-us">
                  <p className="footer-link">
                    HP/HYPERX Visual Content Terms of Use
                  </p>
                </Link>
              </section>
            </div>
            <div className="col-md-2">
              <h5 className="fs-5 fw-bold modelSubtitle mb-3">Company</h5>
              <section className="description d-flex flex-column">
                <Link to="/about-us">
                  <p className="footer-link">About HyperX</p>
                </Link>
                <Link to="/about-us">
                  <p className="footer-link">About HP</p>
                </Link>
                <Link to="/about-us">
                  <p className="footer-link">Privacy</p>
                </Link>
                <Link to="/about-us">
                  <p className="footer-link">Terms of Use</p>
                </Link>
                <Link to="/about-us">
                  <p className="footer-link">Limited Warranty Statement</p>
                </Link>
                <Link to="/about-us">
                  <p className="footer-link">Accessibility</p>
                </Link>
                <Link to="/about-us">
                  <p className="footer-link">Use of Cookies</p>
                </Link>
                <Link to="/about-us">
                  <p className="footer-link">Terms of Service</p>
                </Link>
              </section>
            </div>
            <div className="col-md-2">
              <h5 className="fs-5 mb-3 fw-bold modelSubtitle">
                Other Resource
              </h5>
              <section className="description d-flex flex-column">
                <Link to="/about-us">
                  <p className="footer-link">NGENUITY Software</p>
                </Link>
                <Link to="/about-us">
                  <p className="footer-link">Blog</p>
                </Link>
                <Link to="/about-us">
                  <p className="footer-link">Partner Program</p>
                </Link>
                <Link to="/about-us">
                  <p className="footer-link">Student Discount</p>
                </Link>
              </section>
            </div>
            <div className="col-md-6">
              <div className="d-flex justify-content-end">
                <div className="footer-logo">
                  <img width={210} src={Logo} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
