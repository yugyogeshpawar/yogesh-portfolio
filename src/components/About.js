const About = () => {
  return (
    <section
      id="about"
      data-nav-tooltip="About"
      className="pp-section pp-scrollable section counter"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 m-15px-tb">
            <div className="about-me">
              <div className="img">
                <div className="img-in">
                  <img src="static/img/about-me.jpg" title="" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="about-info">
              <div className="title">
                <h3>About me.</h3>
              </div>
              <div className="about-text">
                <h3>
                  {`I'm`} a DevOps Engineer with over 4 years of experience.{" "}
                </h3>
                <p>
                  I am a DevOps Engineer with a passion for Kubernetes, CI/CD
                  pipelines, and automation. I have 4 years of experience in
                  this field, and I am always looking for new opportunities to
                  improve and enhance my skills.
                </p>
                <div className="row">
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <span className="count">20+</span>
                      <div className="media-body">
                        Projects <br />
                        Completed.
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <span className="count">20+</span>
                      <div className="media-body">
                        Satisfied <br />
                        Clients.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn-bar">
                  <a className="px-btn px-btn-theme" href="tel:+917000426094">
                    <span>Contact Me</span>
                  </a>
                  <a
                    className="px-btn px-btn-theme"
                    href="mailto:yugyogeshpawar@gmail.com"
                  >
                    <span>Mail</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>Education &amp; Skills</h3>
        </div>
        <div className="row">
          <div className="col-lg-4 m-15px-tb">
            <ul className="aducation-box">
              <li>
                <span>2020-2024</span>
                <h6>Bachelor in Computer Applications</h6>
                <p>Chhindwara University</p>
              </li>
              <li>
                <span>2017-2020</span>
                <h6>Diploma in Computer Applications</h6>
                <p>Chhindwara University</p>
              </li>
              <li>
                <span>2017</span>
                <h6>12th MP Board</h6>
                <p>Govt Higher Secondary School Mahalpur</p>
              </li>
              <li>
                <span>2015</span>
                <h6>10th MP Board</h6>
                <p>Govt. High School Mahalpur</p>
              </li>
            </ul>
          </div>
          <div className="col-lg-7 ml-auto m-15px-tb">
            <div className="skills-box">
              <h3>My skills</h3>
              <p>
                {`I'm`} a DevOps Engineer with over 4 years of experience. I
                have a passion for Kubernetes, CI/CD pipelines, and automation.
                I started my journey as a Blockchain Developer, but gradually
                shifted to DevOps as I was always looking for new opportunities
                to improve and enhance my skills. Currently, I am working with
                Versai Technologies.
              </p>
              <div className="skill-lt">
                <h6>Kubernetes</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "92%" }}>
                    <span data-toggle="tooltip" title="92%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>CI/CD</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "95%" }}>
                    <span data-toggle="tooltip" title="72%" />
                  </div>
                </div>
              </div>
              {/* /skill */}

              <div className="skill-lt">
                <h6>Python</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "88%" }}>
                    <span data-toggle="tooltip" title="88%" />
                  </div>
                </div>
              </div>
              <div className="skill-lt">
                <h6>Terraform</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "86%" }}>
                    <span data-toggle="tooltip" title="86%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Go Lang</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "50%" }}>
                    <span data-toggle="tooltip" title="86%" />
                  </div>
                </div>
              </div>
              <div className="skill-lt">
                <h6>Git</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "95%" }}>
                    <span data-toggle="tooltip" title="86%" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>Experience.</h3>
        </div>
        <div className="resume-box">
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/a1.png" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>DevOps Engineer ( Kubernetes, CI/CD ) </h6>
                  <label>Versai Technologies | Jan 2022 - Present</label>
                  <div className="rb-time">Full Time</div>
                  <p>
                    Lead the design and deployment of enterprise Kubernetes
                    clusters supporting production, development, and testing
                    environments, achieving 99.9% uptime. Implemented automated
                    CI/CD pipelines using GitHub Actions, and Azure DevOps to
                    streamline deployment processes, resulting in a 50%
                    reduction in deployment times. Managed container
                    orchestration using Kubernetes and Docker, enhancing
                    application portability and scaling.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/a2.png" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>DevOps Engineer ( Kubernetes, CI/CD, Terraform ) </h6>
                  <label>Gaura Web Technologies | Jan 2019 - Jan 2022</label>
                  <div className="rb-time">Full Time</div>
                  <p>
                    Leveraged Terraform to automate the provisioning and
                    management of cloud infrastructure, ensuring efficient,
                    scalable, and repeatable deployment processes. Implemented
                    automated CI/CD pipelines using GitHub Actions, and Azure
                    DevOps to streamline deployment processes, resulting in a
                    50% reduction in deployment times. Orchestrated the
                    deployment processes for blockchain-based applications using
                    Docker and Kubernetes, optimising them for high availability
                    and robustness. Implemented C I/ C D pipelines specifically
                    tailored for these applications, ensuring seamless and
                    automated updates and management.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/a3.png" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Blockchain Developer</h6>
                  <label>Gaura Web Technologies | Jan 2019 - Jan 2020</label>
                  <div className="rb-time">Full Time</div>
                  <p>
                    I have 1 years of experience in web development. which
                    includes HTML, CSS, Javascript, React, Node.js. in
                    blockchain we use web3.js, ethereum and solidity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
