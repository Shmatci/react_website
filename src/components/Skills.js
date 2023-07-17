import { useEffect } from "react";
import { tony } from "../layouts/utils";

const Skills = () => {
  useEffect(() => {
    tony.activeSkillProgress();
  }, []);
  return (
    <section className="section">
      <div className="container">
        <div className="row sm-m-25px-b m-35px-b">
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="dark-color text-uppercase">My Skills</h3>
              <p className="text-uppercase small">
                A Frontend Developer &amp; Graphic designer based in the UK
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-lg-12 m-15px-tb">
            {/* skill */}
            <div className="skill-lt pb-10px">
              <h6 className="dark-color pb-10px">HTML5, CSS, JavaScript, NextJs, NodeJs, React, Python, Tailwind, 
              Bootstrap, Sass, Git version control, API's,<br /> Adobe Photoshop, Adobe InDesign, Adobe Illustrator</h6>
            </div>
            {/* end skill */}

          </div>
        </div>
        </div>
    </section>
  );
};
export default Skills;
