import Link from "next/link";

const FeatureBlock2 = () => {
  return (
    <div className="fancy-feature-fortyFour position-relative pt-0 pb-100 lg-pt-0 pb-60">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-5 col-md-6" data-aos="fade-right">
            <div className="title-style-one mb-30 mt-30">
              {/* <div className="sc-title">BECOME AN ENTREPRENEUR</div> */}
              <h2 className="main-title fw-500 tx-dark m0">
                Customized Action Plan.
              </h2>
            </div>
            <p className="fs-20 tx-dark mb-50 md-mb-30">
              You tell us what you want to achieve, We&#39;ll build a kick-ass
              plan to get it done fast. We&#39;ll customize your plan to take
              advantage of the playbooks of thousands of startups before you.
            </p>
            <Link href="/contact" className="btn-one fw-500">
              Lets Build Your Plan
            </Link>
          </div>
          {/* End .col-xl-5 */}

          <div className="col-xl-6 col-md-6 ms-auto" data-aos="fade-left">
            <img
              src="/images/media/img_68.png"
              alt="media"
              className="lazy-img sm-mt-40"
            />
          </div>
          {/* End .col-xl-6 */}
        </div>
      </div>
      {/* /.container */}
    </div>
  );
};

export default FeatureBlock2;
