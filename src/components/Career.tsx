import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Started Learning Web Dev</h4>
                <h5>Self-Taught</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Began learning HTML, CSS, and JavaScript from the ground up.
              Built foundational skills in web development, explored responsive
              design principles, and created my first static websites.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BCA Student & Developer</h4>
                <h5>University</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Pursuing Bachelor of Computer Applications while building
              real-world projects. Expanded into JavaScript and C++,
              solving problems through code and exploring modern web technologies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Freelance & Projects</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Actively building full-stack projects and responsive web
              applications. Continuously improving skills in web development
              and software engineering while seeking real-world opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
