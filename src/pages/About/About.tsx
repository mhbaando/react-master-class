import React from "react";
import Layout from "@/ui/organisms/Layout/Layout";
import Photo1 from "./resources/1.jpg";
import Photo2 from "./resources/2.jpg";
import Photo3 from "./resources/3.jpg";
import Photo4 from "./resources/4.jpg";
import Photo5 from "./resources/5.jpg";
import "./About.scss";

const About = (): React.ReactElement => {
  return (
    <Layout>
      <div className="about">
        <div className="gallery">
          <img src={Photo1} alt="Resources" className="gallery__img" />
          <div className="gallery__photos">
            <img src={Photo2} alt="Photo2" className="gallery__photos--img" />
            <img src={Photo3} alt="Photo3" className="gallery__photos--img" />
            <img src={Photo4} alt="Photo4" className="gallery__photos--img" />
            <img src={Photo5} alt="Photo4" className="gallery__photos--img" />
          </div>
        </div>
        <div className="about-me">
          <div className="about-me__p">
            I’m a <span className="bold color-black">Software Engineer </span>{" "}
            and <span className="bold color-black">UX/UI Designer</span> living
            currently in Mogadishu, Somalia. I’ve studied
            <br /> Web Development & UI/UX Design and now I’m studying testing
            about react apps
          </div>

          <div className="about-me__p">
            I was introduced to computers from an early age and since then it
            became my passion. Being driven by curiosity, I got into design,
            programming and others IT areas that sparked my interest.
          </div>

          <div className="about-me__p">
            Moreover, there are a lot of things that I am passionate about, such
            as music, math, meditating, artificial intelligence, books, health &
            performance optimization ( and frankly optimization of any sort
            really ), photography, investing and personal development.
          </div>

          <div className="about-me__p">
            I think that anything can be achieved with hard work, perseverance,
            ambition & determination and I strongly believe that, on a personal
            level, change starts from within.
          </div>

          <div className="about-me__p">
            You can get in touch with me via{" "}
            <span className="bold color-black underline">email</span> or on
            Twitter at <span className="bold color-black">@mhbaando</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default About;
