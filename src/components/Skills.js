import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import business from '../assets/img/business.png'
import fantasy from "../assets/img/fantasy.jpg"
import hero from "../assets/img/hero.png"
import yoga from "../assets/img/yoga.png"
import colorSharp from '../assets/img/color-sharp.png'

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>Very much Skills.</p>
                <Carousel responsive={responsive} infinite={true} className="skill-slider">
                    <div className="item">
                        <img src={hero} alt="Image"/>
                        <h5>UI Development</h5>
                        </div>
                        <div className="item">
                        <img src={business} alt="Image"/>
                        <h5>Documentation</h5>
                        </div>
                        <div className="item">
                        <img src={yoga} alt="Image"/>
                        <h5>User Experience</h5>
                        </div>
                        <div className="item">
                        <img src={fantasy} alt="Image"/>
                        <h5>Sleeping</h5>
                        </div>
                </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  );
};
