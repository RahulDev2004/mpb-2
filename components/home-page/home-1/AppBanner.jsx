const AppBanner = () => {
  const features = [
    "Compare different insurance Item",
    "Buy, store and share all your policies online",
    "Email & Live chat.",
  ];

  const buttons = [
    {
      platform: "Google play",
      icon: "images/icon/playstore.svg",
      className: "windows-button",
    },
  ];

  return (
    <div className="row align-items-center">
      <div className="col-lg-6">
        <div className="block-style-seven" data-aos="fade-right">
          <div className="title-style-one">
            {/* <div className="sc-title text-uppercase">MOBILE APP</div> */}
            <h2 className="main-title fw-500 tx-dark m0">
              Build your startup with a Dedictaed Advisor.
            </h2>
          </div>
          <p className="fs-20 pt-30 pb-5 lg-pb-5">
            You are not alone anymore. Team up with a dedicated, experienced Startup Advisor who knows exactly where to find the help you need to scale.
          </p>
          {/* <ul className="style-none list-item">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul> */}
          {/* End list */}
          <br/><br/>
          <div className="d-sm-flex align-items-center platform-button-group-three mt-5 lg-mt-3">
              <a
                href="#"
                className={`d-flex align-items-center`}
              >
              <div>
                <p className="fs-50 pt-15">Get Connected</p>
                {/* <strong>{button.platform}</strong> */}
              </div>
              </a>
          </div>
          {/* /.platform-button-group-three */}
        </div>
        {/* /.block-style-seven */}
      </div>
      {/* End col-6 */}

      <div className="col-lg-6" data-aos="fade-left">
        <div className="illustration-holder position-relative pt-50 pb-50 pe-md-5 lg-mt-80">
          <img
            src="images/media/img_57.png"
            alt=""
            className="lazy-img main-img ms-auto"
          />
          <img
            src="images/media/img_56.png"
            alt=""
            className="lazy-img screen-two"
          />
          <img
            src="images/shape/shape_139.svg"
            alt=""
            className="lazy-img shapes shape-one"
          />
          <img
            src="images/shape/shape_140.svg"
            alt=""
            className="lazy-img shapes shape-two"
          />
        </div>{" "}
        {/* /.illustration-holder */}
      </div>
    </div>
  );
};

export default AppBanner;
