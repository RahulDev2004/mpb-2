const coursesData = [
  {
    id: 1,
    tag: "FREE",
    title: "Grants.",
    level: "Begainner",
    numClasses: 18,
    tag2: "FEATURED",
  },
  {
    id: 2,
    tag: "PRO",
    title: "Venture Capital.",
    level: "Mid",
    numClasses: 32,
    tag2: "POPULER",
  },
  {
    id: 3,
    tag: "PRO",
    title: "Angel Investors.",
    level: "Pro",
    numClasses: 20,
    tag2: "TRENDING",
  },
  {
    id: 4,
    tag: "FREE",
    title: "Debt Funding",
    level: "Mid",
    numClasses: 13,
    tag2: "FEATURED",
  },
];

const CourseFeatured = () => {
  return (
    <>
      {coursesData.map((course) => (
        <div className="col-sm-6 d-flex flex-column space-fix" key={course.id}>
          <a
            href="#"
            className="card-style-nineteen position-relative d-flex flex-column tran3s mb-40 xs-mb-20"
          >
            <span className="tag fw-500 text-white text-uppercase">
              {course.tag}
            </span>
            <h4 className="mb-0 mt-25">{course.title}</h4>
            <ul className="style-none pb-0 lg-pb-0 d-flex justify-content-between">
              <li>{course.level}</li>
              <li>{course.numClasses} Classes</li>
            </ul>
            {/* <span className="tag2 fw-bold tx-dark text-uppercase mt-auto">
              {course.tag2}
            </span> */}
          </a>
          {/* /.card-style-nineteen */}
        </div>
      ))}
    </>
  );
};

export default CourseFeatured;
