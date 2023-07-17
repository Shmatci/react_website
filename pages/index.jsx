import About from "@/src/components/About";
import Contact from "@/src/components/Contact";
import Skills from "@/src/components/Skills";
import Testiminails from "@/src/components/Testiminails";
import { tony } from "@/src/layouts/utils";
import { Fragment, useEffect, useState } from "react";

import TypingAnimation from "@/src/components/TypingAnimation";
import Footer from "@/src/layouts/Footer";
import dynamic from "next/dynamic";

const Work = dynamic(() => import("@/src/components/Work"), {
  ssr: false,
});

const Index1 = () => {
  useEffect(() => {
    tony.scrollToActiveNav();
  }, []);
  const [toggle, setToggle] = useState(false);
  return (
    <Fragment>
      <div className="mob-header">
        <div className="d-flex">
          <div className="navbar-brand">
            <a className="logo-text" href="index.html">
              Tam
            </a>
          </div>
          <button className="toggler-menu" onClick={() => setToggle(!toggle)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <header
        className={`header-left ${toggle ? "menu-open menu-open-desk" : ""}`}
        id="navbar-collapse-toggle"
      >
        <div className="navbar-brand">
          <a className="logo-text" href="index.html">
            Tam
          </a>
        </div>
        <ul className="nav nav-ul">
          <li>
            <a className="nav-link" href="#home">
              <i className="fas fa-house-damage" />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="#about">
              <i className="far fa-address-card" />
              <span>About Me</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="#work">
              <i className="fas fa-briefcase" />
              <span>Portfolio</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="#contactus">
              <i className="fas fa-id-card-alt" />
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </header>

      <main className="main-left">
        {/* Home Banner */}
        <section
          id="home"
          className="home-banner-01 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(static/img/home-banner.jpg)" }}
        >
          <div className="container">
            <div className="row full-screen align-items-center p-100px-tb">
              <div className="col-md-6">
                <div className="ht-text">
                  <h6>Hello there, I am</h6>
                  <h1>Tamara Vuksan</h1>
                  <h2>
                    I Am Passionate <TypingAnimation />
                  </h2>
                  <p>
                  As a self-taught front-end engineer with a background in architecture and graphic design,
                  I bring a unique blend of creativity and technical expertise to every project. With experience
                  in HTML, CSS, React, JS, Python, Next.js, Node.js, Git, Sass, Tailwind, Bootstrap, and Jamstack,
                  I am well-versed in the latest tools and technologies.
                  </p>
                  <div className="btn-bar go-to">
                    <a className="m-btn m-btn-theme" href="#work">
                      My work
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="go-to go-to-next">
            <a href="#about">
              <span />
            </a>
          </div>
        </section>
        {/* End Home Banner */}

        {/* End Home Banner */}
        {/* about us */}
        <About />
        {/* end about us */}
        {/* fun */}
        <Skills />
        {/* End fun */}
        {/* Work */}
        <Work />
        {/* End work */}
      </main>
      <Footer />
    </Fragment>
  );
};
export default Index1;
