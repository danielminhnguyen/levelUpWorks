import React from "react";
import PropTypes from "prop-types";
import SlideShow from "components/Slideshow/Slideshow";
import OverlayIcon from "components/OverlayIcon/OverlayIcon";
import { slideshow, digitalSkills, studentCreation } from "./dataset";
import "./Home.css";
import Tabs from "components/Tabs/Tabs";
import bulletpoint from "./bullet-point.png";
import section4 from "./home-sectionfour.png";
import { Typography } from "@material-ui/core";
import HomeHeader from "assets/images/header-image.png";

Home.propTypes = {
  signUp: PropTypes.func,
};

export default function Home(props) {
  return (
    <div className="content-wrapper">
      <section className="header-bottom">
        <img className="header-image" src={HomeHeader} alt="" />

        <div>
          <h1>
            Prepare young minds for a better <span>future.</span>
          </h1>
          <p>
            Let us help you advance students in Digital Technologies and other learning areas with
            our project-based learning programme.
          </p>
          <div className="button-wrapper">
            <div>
              <button className="button-two">Learn More</button>
            </div>
            <div className="button-signup-wrapper">
              <button className="button-one" onClick={() => props.signUp("Sign Up")}>
                Sign Up
              </button>
              <p>*Basic subscription includes the first 15 projects free of charge.</p>
            </div>
          </div>
        </div>
        <div>
          <img src="/home-header.png" alt="" />
        </div>
      </section>

      <section className="section-1">
        <div className="section-column">
          <div>
            <div>
              <h1>What we offer</h1>
              <p>
                The Creative Problem Solving programme is series of digital creation projects aimed
                to encourage self-motivation and student agency, designed by New Zealandâ€™s leading
                IT industry experts and schools.
              </p>
            </div>
            <h1>What will students create?</h1>
            <div className="center-wrapper">
              <OverlayIcon data={studentCreation} />
            </div>
          </div>
        </div>

        <div className="section-column">
          <SlideShow data={slideshow} />
        </div>
      </section>

      <section className="section-2" id="home-icon">
        <h2>
          Teaching kids programming and digital skills is <span>MORE</span> than just writing code.
        </h2>
        <OverlayIcon data={digitalSkills} />
        <div></div>
      </section>
      <section className="section-3">
        {/* Tab links */}

        <Tabs>
          <div label="LEARNING PATHWAYS">
            <Typography variant="h3">
              Co-Designed by IT industry exprets and schools in New Zealand, the creative Problem
              Solving Programme is designed as a series of Scratch-based digital creation projects
              and unplugged activities, aimed to encourage self-motivation and student agency, and
              achieve both progress Outcomes of Digital Technologies Curriculum.
            </Typography>
          </div>
          <div label="DIGITAL TECHNOLOGIES">
            <Typography variant="h3">
              People use these competencies to live, learn, work, and contribute as active members
              of their communities. More complex than skills, the competencies draw also on
              knowledge, attitudes, and values in ways that lead to action. They are not separate or
              stand-alone. They are the key to learning in every learning area. The development of
              the competencies is both an end in itself (a goal) and the means by which other ends
              are achieved. Successful learners make use of the competencies in combination with all
              the other resources available to them. These include personal goals, other people,
              community knowledge and values, cultural tools (language, symbols, and texts), and the
              knowledge and skills found in different learning areas. As they develop the
              competencies, successful learners are also motivated to use them, recognising when and
              how to do so and why.
            </Typography>
          </div>
          <div label="KEY COMPETENCIES">
            <div>
              <title>Enhance key competencies</title>
              <p>
                The programme enhances capabilities of students in the 5 Key Competencies identified
                in the New Zealand Curriculum:
              </p>
              <div>
                <div className="section3-list">
                  <div className="tab-item">
                    <div>
                      <img className="image" src={bulletpoint} alt=""></img>
                    </div>
                    <div className="description">
                      <span>THINKING</span>
                      <p>
                        In particular the programme focused on problem solving, design thinking and
                        computational thinking.
                      </p>
                    </div>
                  </div>
                  <div className="tab-item">
                    <div>
                      <img className="image" src={bulletpoint} alt=""></img>
                    </div>
                    <div className="description">
                      <span>DISCERNING CODES</span>
                      <p>
                        Analysing language, symbols, and texts in order to understand and make sense
                        of the codes in which knowledge is expressed.
                      </p>
                    </div>
                  </div>
                  <div className="tab-item">
                    <div>
                      <img className="image" src={bulletpoint} alt=""></img>
                    </div>
                    <div className="description">
                      <span>SELF-MANAGEMENT</span>
                      <p>
                        Projects and challenges are designed to motivate students to explore and
                        experiment with self-motivation
                      </p>
                    </div>
                  </div>
                  <div className="tab-item">
                    <div>
                      <img className="image" src={bulletpoint} alt=""></img>
                    </div>
                    <div className="description">
                      <span>RELATIONSHIPS WITH PEERS</span>
                      <p>
                        The programme is designed with unplugged sessions where students interact in
                        a range of different situations, including things like being able to listen
                        well, recognise different points of view, and share ideas.
                      </p>
                    </div>
                  </div>
                  <div className="tab-item">
                    <div>
                      <img className="image" src={bulletpoint} alt=""></img>
                    </div>
                    <div className="description">
                      <span>PARTICIPATION AND COLLABORATION</span>
                      <p>
                        The programme encourages students to be involved in communities, such as
                        family, whÄnau, school, and contribute and make connections with other
                        people
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div label="IR4.0">
            <Typography variant="h3">
              Designed with IT industry experts, the programme develops the cognitive and social
              competencies students will find applicable to jobs and careers in the fourth
              industrial revolution (IR4)
            </Typography>
          </div>
        </Tabs>
      </section>

      <section className="section-4">
        <div>
          <img src={section4} alt="" />
        </div>
        <div>
          <Typography variant="h1" align="left">
            What are you waiting for?
          </Typography>
          <Typography variant="h2" align="left">
            Start teaching Digital Technologies today.
          </Typography>
          <Typography variant="h4" align="left">
            If you need more information, we are happy to answer any questions you may have.
          </Typography>
          <div className="row">
            <button className="button-two">ENQUIRE NOW</button>
            <button className="button-one" onClick={() => props.signUp("Sign Up")}>
              SIGN UP
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
