const featuresData = [
  {
    icon: "/images/mpb/karthikeyan.png",
    title: "Karthikeyan",
    subtitle: "Founder of Hion Studios",
  },
  {
    icon: "/images/mpb/abhinav.png",
    title: "Abhinav",
    subtitle: "CEO of Hion Studios",
  },
  {
    icon: "/images/mpb/arav.png",
    title: "Aravindh Ravichandran",
    subtitle: "Founder and CEO of ROOK",
  },
];

const FeatureBlock = () => {
  return (
    <>
      {featuresData.map((feature, index) => (
        <div key={index} className="col-lg-4 col-md-6">
          <div className="card-style-seventeen d-flex align-items-center mb-40">
            <div className="icon rounded-circle d-flex align-items-center justify-content-center">
              <img src={feature.icon} alt="icon" className="lazy-img" />
            </div>
            <div className="ps-4 text-wrapper">
              <h4 className="text-white m0">{feature.title}</h4>
              <div className="m0 fs-20 text-grey">{feature.subtitle}</div>
            </div>
          </div>
          {/* /.card-style-seventeen */}
        </div>
      ))}
    </>
  );
};

export default FeatureBlock;
