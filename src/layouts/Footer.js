const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 m-10px-tb">
            <div className="nav justify-content-center justify-content-md-start">
            
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
          <div className="col-md-6 m-10px-tb text-center text-md-right">
            <p>© {new Date().getFullYear()} copyright all right reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
