import Logo from "../assets/icons/Logo";

function Footer() {
  return (
    <>
      <div className="conteiner">
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col">
                <h5 className="fs-5 fw-bold">Suport</h5>
                <section className="options">
                  <p>Product Suport</p>
                  <p>Contact Suport</p>
                  <p>Shipping Information</p>
                  <p>Refund Policy</p>
                  <p>HP/HYPERX Visual Content Terms of Use</p>
                </section>
              </div>
              <div className="col">
                <h5 className="fs-5 fw-bold">Company</h5>
                <section
                  //   style={{ fontFamily: "Proxima Nova" }}
                  className="options"
                >
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
              <div className="col">
                <h5 className="fs-5 fw-bold">Other Resource</h5>
                <section className="options">
                  <p>NGENUITY Software</p>
                  <p>Blog</p>
                  <p>Partner Program</p>
                  <p>Student Discount</p>
                </section>
              </div>
            </div>
          </div>

          <div className="col">
            <Logo />
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default Footer;
