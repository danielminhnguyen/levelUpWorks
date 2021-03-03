import React from "react";
import PropTypes from "prop-types";
import SlideShow from "components/Slideshow/Slideshow";
// import OverlayIcon from "components/OverlayIcon/OverlayIcon";
import { slideshow, digitalSkills, studentCreation } from "./dataset";
// import "./Home.css";
import Tabs from "components/Tabs/Tabs";
import bulletpoint from "./bullet-point.png";
import section4Image from "assets/images/home-sectionfour.png";
import headerImage from "assets/images/header-image.png";
import { Grid, Typography } from "@material-ui/core";
import useStyles from "./styles";

Home.propTypes = {
  signUp: PropTypes.func,
};

export default function Home(props) {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <img className={classes.headerImage} src={headerImage} alt="" />
          <Grid item xs={6}>
            <div className={classes.section1}>
              <Typography className={classes.title} variant="h1" align="left">
                Prepare young minds for a better <span>future.</span>
              </Typography>
              <Typography className={classes.title} variant="h4" align="left">
                Let us help you advance students in Digital Technologies and other learning areas
                with our project-based learning programme.
              </Typography>
              <div className={classes.buttonContainer}>
                <div>
                  <button className="button-two">Learn More</button>
                </div>
                <div className="button-signup-wrapper">
                  <button className="button-one" onClick={() => props.signUp("Sign Up")}>
                    Sign Up
                  </button>
                  <Typography variant="body2" align="justify">
                    *Basic subscription includes the first 15 projects free of charge.
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>

        <Grid item xs={6}>
          <div className={classes.section2}>
            <div>
              <div className="section-1">
                <Typography className={classes.title} variant="h2" align="left">
                  What we offer
                </Typography>
                <Typography className={classes.offerText} align="left">
                  The Creative Problem Solving programme is series of digital creation projects
                  aimed to encourage self-motivation and student agency, designed by New Zealand’s
                  leading IT industry experts and schools.
                </Typography>
              </div>
              <h1>What will students create?</h1>
              <div className="center-wrapper">
                {studentCreation.map((item) => (
                  <div className="row">
                    <img src={item.image} alt="" />
                    <div className={item.overlay}>
                      <image src={item.overlay} />
                      <Typography>{item.title}</Typography>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
    
        <Grid item xs={6}>
          <div className={"section-1"}>
            <SlideShow data={slideshow} />
          </div>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3" className={classes.teachKid}>
            Teaching kids programming and digital skills is <span>MORE</span> than just writing
            code.
          </Typography>
          {/* <OverlayIcon data={digitalSkills} /> */}
        </Grid>
        <section className={classes.section4}>
          {/* Tab links */}
          <Tabs>
            <div label="LEARNING PATHWAYS">
              <h1 class="learningpathwaysh1">Creative Problem Solving</h1>
              <p>
                Co-Designed by IT industry exprets and schools in New Zealand, the creative Problem
                Solving Programme is designed as a series of Scratch-based digital creation projects
                and unplugged activities, aimed to encourage self-motivation and student agency, and
                achieve both progress Outcomes of Digital Technologies Curriculum.
              </p>
            </div>
            <div label="DIGITAL TECHNOLOGIES">
              <p>
                People use these competencies to live, learn, work, and contribute as active members
                of their communities. More complex than skills, the competencies draw also on
                knowledge, attitudes, and values in ways that lead to action. They are not separate
                or stand-alone. They are the key to learning in every learning area. The development
                of the competencies is both an end in itself (a goal) and the means by which other
                ends are achieved. Successful learners make use of the competencies in combination
                with all the other resources available to them. These include personal goals, other
                people, community knowledge and values, cultural tools (language, symbols, and
                texts), and the knowledge and skills found in different learning areas. As they
                develop the competencies, successful learners are also motivated to use them,
                recognising when and how to do so and why.
              </p>
            </div>
            <div label="KEY COMPETENCIES">
              <div>
                <title>Enhance key competencies</title>
                <p>
                  The programme enhances capabilities of students in the 5 Key Competencies
                  identified in the New Zealand Curriculum:
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
                          In particular the programme focused on problem solving, design thinking
                          and computational thinking.
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
                          Analysing language, symbols, and texts in order to understand and make
                          sense of the codes in which knowledge is expressed.
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
                          The programme is designed with unplugged sessions where students interact
                          in a range of different situations, including things like being able to
                          listen well, recognise different points of view, and share ideas.
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
                          family, whānau, school, and contribute and make connections with other
                          people
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div label="IR4.0">
              <h1 class="IR4h1">Future-Proof Students for a careerr in IR4.0</h1>
              <p class="IR4p">
                Designed with IT industry experts, the programme develops the cognitive and social
                competencies students will find applicable to jobs and careers in the fourth
                industrial revolution (IR4).
              </p>
            </div>
          </Tabs>
        </section>

        <Grid item xs={6}>
          <div>
            <img src={section4Image} alt="" />
          </div>
        </Grid>
        <Grid item xs={6}>
          <h1>What are you waiting for?</h1>
          <h4>Start teaching Digital Technologies today.</h4>
          <span>
            If you need more information, we are happy to answer any questions you may have.
          </span>
          <div className="button-wrapper">
            <button className="button-two">ENQUIRE NOW</button>
            <button className="button-one" onClick={() => props.signUp("Sign Up")}>
              SIGN UP
            </button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
