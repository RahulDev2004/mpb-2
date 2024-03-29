import Link from "next/link";

const Feature = () => {
  const items = [
    "Amazing communication.",
    "Best trending designing experience.",
    "Email & Live chat.",
  ];

  return (
    <div className="fancy-feature-thirty position-relative mt-190 pb-140 lg-mt-100 lg-pb-120 md-p0">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 ms-auto">
            <div
              className="block-style-four ps-xxl-5 ms-xxl-4"
              data-aos="fade-left"
            >
              <div className="title-style-ten">
                {/* <div className="sc-title">FEATURES</div> */}
                <h2 className="main-title font-recoleta fw-normal tx-dark">
                  Connect Directly with{" "}
                  <span className="position-relative">
                    Experts
                    <img src="/images/shape/shape_122.svg" alt="shape" />
                  </span>
                </h2>
              </div>{" "}
              {/* /.title-style-ten */}
              <p className="fs-20 pt-30 pb-20 lg-pb-8 md-pt-10">
                Stuck on something? Dont sweat it. Jump on a call with the
                Founder guru on the topic and get instant answers to anything
                from How to Optimize my Facebook Spend to Give me a brutal
                review of my Pitch Deck.
              </p>
              {/* <ul className="style-none list-item">
                {items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul> */}
              <div className="d-sm-flex align-items-center platform-button-group-three mt-5 lg-mt-3">
                <a href="#" className={`d-flex align-items-center`}>
                  <div>
                    <p className="fs-50 pt-15">Get Connected</p>
                    {/* <strong>{button.platform}</strong> */}
                  </div>
                </a>
              </div>
            </div>{" "}
            {/* /.block-style-four */}
          </div>
        </div>
      </div>{" "}
      {/* /.container */}
      <div className="illustration-holder" data-aos="fade-right">
        <img
          src="/images/media/img_48.png"
          alt="media"
          className="lazy-img main-img"
        />
        <img
          src="/images/shape/shape_123.svg"
          alt="media"
          className="lazy-img shapes shape-one"
        />
      </div>
    </div>
  );
};

export default Feature;
