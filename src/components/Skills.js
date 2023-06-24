import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import toolImg1 from "../assets/img/Visual-Studio-Logo.png";
import toolImg2 from "../assets/img/Visual-Studio-Code-Logo.png";
import toolImg3 from "../assets/img/Blender-Logo.png";
import toolImg4 from "../assets/img/Painter-Logo.png";
import toolImg5 from "../assets/img/Photoshop-Logo.png";
import toolImg6 from "../assets/img/React-Logo.png";
import toolImg7 from "../assets/img/Unity-Logo.png";
import toolImg8 from "../assets/img/UE-Logo.png";
import toolImg9 from "../assets/img/Threejs-Logo.png";
import toolImg10 from "../assets/img/AWS-Logo.png";
import toolImg11 from "../assets/img/Github-Logo.png";
import toolImg12 from "../assets/img/Nodejs-Logo.png";
import toolImg13 from "../assets/img/XCode-Logo.png";
import toolImg14 from "../assets/img/Jupyter-Logo.png";
import toolImg15 from "../assets/img/AndroidStudio-Logo.png";
import toolImg16 from "../assets/img/Opencv-Logo.png";
import toolImg17 from "../assets/img/Opengl-Logo.png";
import toolImg18 from "../assets/img/Tensorflow-Logo.png";
import { ToolCard } from "./ProjectCard";
import { useState, useEffect } from "react";

const skills = [{
  name: "C++",
  value: 90,
},
{
  name: "C#",
  value: 85,
},
{
  name: "C",
  value: 85,
},
{
  name: "Javascript",
  value: 80,
},
{
  name: "Java",
  value: 70,
},
{
  name: "Python",
  value: 70,
},
{
  name: "GLSL",
  value: 60,
},
{
  name: "Swift",
  value: 40,
},
{
  name: "Kotlin",
  value: 35,
},
];

const tools = [
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: toolImg1,
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: toolImg2,
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: toolImg17,
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: toolImg16,
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: toolImg7,
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: toolImg8,
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: toolImg14,
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: toolImg18,
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: toolImg15,
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: toolImg13,
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: toolImg6,
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: toolImg12,
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: toolImg9,
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: toolImg10,
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: toolImg11,
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: toolImg3,
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: toolImg4,
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: toolImg5,
  },

];


export const Skills = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

const isMobile = (width/height) <= 1.2;
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p style={{fontSize: isMobile?"1rem":"1.2rem"}}>Over the years, I've acquired experience in various languages and tools from all areas<br></br> of development and I'm always open to learning new ones.</p>
                        <Row >
                          <Col xs={12} md={7}>
                          <div className="skill-bx2">
                            <h3>Languages</h3>
                            {skills.map((data, i) => {
                              return (
                                <div key={i}>
                                  <h3 className="progress-title">{data.name}</h3>
                                  <div className="progress">
                                    <div
                                      className="progress-bar progress-bar-striped progress-bar-animated" 
                                      style={{
                                        width: `${data.value}%`,
                                        backgroundColor: 'rgb(125, 0, 163)',
                                      }}
                                    >
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                            </div>
                          </Col>
                          { !isMobile &&
                          <Col xs={6} md={4}>
                          <div className="skill-bx2" style={{width: 420 }}>
                            <h3>Tools/Frameworks</h3>
                            <Row style={{width: 320, marginLeft: 10 }}>
                            {
                              tools.map((project, index) => {
                                return (
                                  <ToolCard
                                    key={index}
                                    {...project}
                                    />
                                )
                              })
                            }
                          </Row>
                          </div>
                          </Col>}
                        </Row>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
