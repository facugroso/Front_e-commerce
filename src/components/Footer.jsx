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
              className="px-2"
            >
              <InstagramIcon className="social-icon" />
            </Link>
            <Link
              to="https://www.facebook.com/hyperxcommunity"
              target={"_blank"}
              className="px-2"
            >
              <FacebookIcon />
            </Link>
            <Link
              to="https://twitter.com/hyperx"
              target={"_blank"}
              className="px-2"
            >
              <TwitterIcon />
            </Link>
            <Link
              to="https://discord.gg/hyperxgaming"
              target={"_blank"}
              className="px-2"
            >
              <DiscordIcon />
            </Link>
            <Link
              to="https://www.tiktok.com/@hyperx?lang=en"
              target={"_blank"}
              className="px-2"
            >
              <TikTokIcon />
            </Link>
            <Link
              to="https://www.twitch.tv/hyperx"
              target={"_blank"}
              className="px-2"
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
      <div className="pt-5 footer-background">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <h5 className="fs-5 fw-bold modelSubtitle">Suport</h5>
              <section className="description">
                <p>Product Suport</p>
                <p>Contact Suport</p>
                <p>Shipping Information</p>
                <p>Refund Policy</p>
                <p>HP/HYPERX Visual Content Terms of Use</p>
              </section>
            </div>
            <div className="col-md-2">
              <h5 className="fs-5 fw-bold modelSubtitle">Company</h5>
              <section className="description">
                <p>About HyperX</p>
                <p>About HP</p>
                <p>Careers</p>
                <p>Press</p>
                <p>Privacy</p>
                <p>Terms of Use</p>
                <p>Limited Warranty Statement</p>
                <p>Accessibility</p>
                <p>Use of Cookies</p>
                <p>Personal Data Rights</p>
                <p>Terms of Service</p>
                <p>Refund policy</p>
              </section>
            </div>
            <div className="col-md-2">
              <h5 className="fs-5 fw-bold modelSubtitle">Other Resource</h5>
              <section className="description">
                <p>NGENUITY Software</p>
                <p>Blog</p>
                <p>Partner Program</p>
                <p>Student Discount</p>
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
