import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";

const Work = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".portfolio-content", {
        itemSelector: ".grid-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  return (
    <section id="work" className="section gray-bg">
      <div className="container">
        <div className="row sm-m-25px-b m-35px-b">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="dark-color text-uppercase">LATEST WORKS</h3>
              <p className="text-uppercase small">
                A Frontend Developer &amp; Graphic designer based in the UK
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="portfolio-content lightbox-gallery">
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-img">
                <img src="static/img/simed.png" alt="image" height={345} width={345}/>
              </div>

              {/* FIRST PROJECT */}

              <div className="portfolio-info">
                <h5 className="text-center">
                  NextJs, React website for Simed Global
                </h5>
                <span>
                  <a
                    className="link-overlay"
                    href="https://github.com/Shmatci/SimedGlobal_website"
                  />
                  GitHub code
                </span>
                <span>
                  <a
                    className="link-overlay"
                    href="https://www.simedglobal.com"
                  />
                  Live website
                </span>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          {/*END FIRST PROJECT */}
          {/* SECOND PROJECT */}
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-img">
                <img src="static/img/react.png" alt="image" height={345} width={345}/>
              </div>
              <div className="portfolio-info">
                <h5>React website</h5>
                <span>
                  <a
                    className="link-overlay"
                    href="https://github.com/Shmatci/portfolio_react"
                  />
                  GitHub code
                </span>
                <span>
                  <a
                    className="link-overlay"
                    href="https://micael-portfolio-example.netlify.app/"
                  />
                  Live website
                </span>
              </div>
              <a className="link-overlay" href="#" />
            </div>
          </div>{" "}
          {/* grid item */}
          {/* END OF SECOND PROJECT */}
          {/* THIRD PROJECT */}
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-img">
                <img src="static/img/fitness.png" alt="image" height={345} width={345} />
              </div>
              <div className="portfolio-info">
                <h5>React website for fitness</h5>
                <span>
                  <a
                    className="link-overlay"
                    href="https://github.com/Shmatci/Fitness_exerciseApp"
                  />
                  GitHub code
                </span>
                <span>
                  <a
                    className="link-overlay"
                    href="https://github.com/Shmatci/Fitness_exerciseApp"
                  />
                  Live website
                </span>
              </div>
              <a className="link-overlay" href="#" />
            </div>
          </div>{" "}
          {/* END THIRD PROJECT */}A{/* FOURTH PROJECT */}
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-img">
                <img src="static/img/earwell.png" alt="image" height={345} width={345} />
              </div>
              <div className="portfolio-info">
                <h5>Wordpress website for EarWell</h5>
                <span>
                  <a
                    className="link-overlay"
                    href="https://wwww.earwellclinics.com"
                  />
                  Live website
                </span>
              </div>
              <a className="link-overlay" href="#" />
            </div>
          </div>{" "}
          {/* grid item */}
          {/* END FOURTH PROJECT */}
          {/* FIFTH PROJECT */}
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-img">
                <img src="static/img/movieland.png" alt="image" height={345} width={345}/>
              </div>
              <div className="portfolio-info">
                <h5>React website for movies</h5> <span>
                  <a
                    className="link-overlay"
                    href="https://github.com/Shmatci/Movieland_app"
                  />
                  GitHub code
                </span>
                <span>
                  <a
                    className="link-overlay"
                    href="https://noname-app.netlify.app/"
                  />
                  Live website
                </span>
              </div>
              <a className="link-overlay" href="#" />
            </div>
          </div>{" "}
          {/* grid item */}
          {/* END FIFTH PROJECT */}
          {/* SIXTH PROJECT */}
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-img">
                <img src="static/img/gpt.png" alt="image" height={345} width={345} />
              </div>
              <div className="portfolio-info">
                <h5>UI/UX React website</h5>
                <span>
                  <a
                    className="link-overlay"
                    href="https://github.com/Shmatci/UI-UX-Website-React-JS"
                  />
                  GitHub code
                </span>
                <span>
                  <a
                    className="link-overlay"
                    href="https://ui-ux-website-react-js.netlify.app/"
                  />
                  Live website
                </span>
              </div>
              <a className="link-overlay" href="#" />
            </div>
          </div>{" "}
          {/* grid item */}
          {/* END SIXTH PROJECT */}
        </div>{" "}
        {/* portfolio-content */}
      </div>
    </section>
  );
};
export default Work;
