const About = () => {
  return (
    <section id="about" className="section gray-bg">
      <div className="container">
        <div className="row sm-m-25px-b m-35px-b">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="dark-color text-uppercase">ABOUT ME</h3>
              <p className="text-uppercase small">
                A Frontend Developer based in the UK
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-5 m-15px-tb">
            <div className="about-me-img box-shadow">
              <img src="static/img/Tammy.jpg" alt="image" />
              
              <div className="nav social-icon">
                <a href="https://tamara-s-portfolio.netlify.app/">
                  <i className="fa fa-globe" />
                </a>
                <a href="https://www.behance.net/Tamara_vuksan">
                  <i className="fab fa-behance" />
                </a>
                <a href="https://github.com/Shmatci">
                  <i className="fab fa-github" />
                </a>
                <a href="https://www.linkedin.com/in/tamara-vuksan-15119ab1/">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7 m-15px-tb">
            <div className="about-me">
              <h4>I'm Tamara Vuksan</h4>
              <h6>
                A <span className="theme-color">Frontend developer &amp; Graphic designer</span> <br />
                based in <span className="theme-color"> in the UK</span>
              </h6>
              <p>
              As a self-taught front-end engineer with a background in architecture and graphic design, 
              I bring a unique blend of creativity and technical expertise to every project. With experience 
              in HTML, CSS, React, JS, Python, Next.js, Node.js, Git, Sass, Tailwind, Bootstrap, and Jamstack, 
              I am well-versed in the latest tools and technologies.
              I am passionate about using my skills to help businesses achieve their goals, and I thrive in a 
              collaborative, team-oriented environment. As a lifelong learner, I am always eager to expand my 
              knowledge and take on new challenges.
              </p>
              <div className="row about-list">
                <div className="col-md-6">                  
                  <div className="media">
                    <label>Residence</label>
                    <p>UK (open to EEA)</p>
                  </div>
                  <div className="media">
                    <label>E-mail</label>
                    <p>vuksan.tamara8@gmail.com</p>
                  </div>
                  <div className="media">
                    <label>Phone</label>
                    <p>+44 7565 962 595</p>
                  </div>
                  
                  <div className="media">
                    <label>Freelance</label>
                    <p>Available</p>
                  </div>
                </div>
              </div>
              <div className="btn-bar">
                <a className="m-btn m-btn-theme" href="https://drive.google.com/file/d/1LaZ8C5uNqCDHus985GiAzjhNGpKvvMuX/view?usp=sharing">
                  Resume
                </a>
              </div>
            </div>
          </div>
          </div> 
        </div>
    </section>
  );
};
export default About;
