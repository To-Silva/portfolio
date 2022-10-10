import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard,ProjectCardSmall } from "./ProjectCard";
import projImg1 from "../assets/img/Holotch-Logo.png";
import projImg2 from "../assets/img/AirfieldCanada-Logo.png";
import projImg3 from "../assets/img/Freelance.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import minhoU from "../assets/img/MinhoU.jfif";
import { useState, useEffect } from "react";
export const Experience = () => {
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

const isMobile = (width/height) <= 1;
  const educationtimeline = [{
    degree: "Master's degree in Computer Engineering",
    where: "Minho University",
    date: "2017-2019",
},
{
    degree: "Licentiate's degree in Computer Engineering",
    where: "Minho University",
    date: "2014-2017",
},
];

  const fulltime = [
    {
      title: "Holotch",
      when: "2020-present",
      position:"Lead Computer Graphics Engineer",
      description: "Helped developing a state-of-the-art pipeline for hologram content creation and consumption.",
      description2: "Contributed in all areas of development, such as desktop apps (C++/C#), frontend (Javascript/threejs), backend (NodeJS/AWS) and iOS (Swift).",
      imgUrl: projImg1,
    },
  ];

  const freelance = [
    {
      title: "Airfield Canada",
      when: "2018-present",
      position:"Co-founder and 3D Artist/Developer",
      description: "Small 3D team focused on developing high quality flight simulator addons.",
      description2: "Works include iconic Canadian aeroports such as Halifax and Deer Lake for X-Plane and MFS2020.",
      imgUrl: projImg2,
    },
    {
      title: "Freelance commissions",
      when: "2016-present",
      position:"3D Artist/Developer",
      description: "Commissions range from rigged 3D models to game engine projects with shaders and AI implemented.",
      description2: "",
      imgUrl: projImg3,
    },
  ];


  return (
    <section className="project" id="experience">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div >
                <h2>Resume</h2>
                <p style={{fontSize: isMobile?"1rem":"1.2rem"}}>
                Master's Degree in Computer Engineering at Minho University, specialized in Computer Graphics/Artificial Intelligence.<br></br> Years of experience working as developer and CG artist.
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Work</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Education</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" >
                    <Tab.Pane eventKey="first">
                      
                      <Row className={isMobile?"edp":"edu-bx"} style={{ marginLeft: 80}}>
                      <Col>
                        <h3 style={{fontSize: "1.4rem", textAlign: "center",marginBottom:50,marginLeft: -40,color:'rgb(245, 245, 245)'}}>Fulltime</h3>
                          {
                            fulltime.map((project, index) => {
                              return (
                                <Row>
                               { isMobile &&
                                <ProjectCardSmall
                                  key={index}
                                  {...project}
                                  />}
                                { !isMobile &&
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />}
                                    <Col size={12} sm={6} md={9}>
                                      <h4>{project.title}</h4>
                                      <span style={{ color:'rgb(255, 222, 130)'}}>{project.position}</span>
                                      <h4 style={{fontSize: "1rem",color:'rgb(235, 235, 235)' }}>{project.when}</h4>
                                      <p style={{ textAlign: "left", marginLeft: 0,fontSize: isMobile? "0.8rem":"1rem" }}>{project.description}</p>
                                      <p style={{ textAlign: "left", marginLeft: 0,fontSize: isMobile? "0.8rem":"1rem",marginTop: -20 }}>{project.description2}</p>
                                    </Col>
                                </Row>
                              )
                            })
                          }
                        </Col>
                        <Col style={{ marginLeft: -50}}>
                        <h3 style={{fontSize: "1.4rem", textAlign: "left",marginBottom:50,marginLeft: isMobile? 200:40,color:'rgb(245, 245, 245)'}}>Freelance/Personal Projects</h3>
                        {
                            freelance.map((project, index) => {
                              return (
                                <Row>
                               { isMobile &&
                                <ProjectCardSmall
                                  key={index}
                                  {...project}
                                  />}
                                { !isMobile &&
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />}
                                    <Col style={{ marginBottom: 50}} size={12} sm={6} md={9}>
                                      <h4>{project.title}</h4>
                                      <span style={{ color:'rgb(255, 222, 130)'}}>{project.position}</span>
                                      <h4 style={{fontSize: "1rem",color:'rgb(235, 235, 235)' }}>{project.when}</h4>
                                      <p style={{ textAlign: "left", marginLeft: 0,fontSize: isMobile? "0.8rem":"1rem" }}>{project.description}</p>
                                      <p style={{ textAlign: "left", marginLeft: 0,fontSize: isMobile? "0.8rem":"1rem",marginTop: -20 }}>{project.description2}</p>
                                    </Col>
                                </Row>
                              )
                            })
                          }                        
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <div className={isMobile?"edp":"edu-bx"} size={12} sm={6} md={1}>
                      <table style={{fontSize: isMobile?"0.8rem":"1.2rem" }} className="table caption-top">
                        <tbody>
                          {educationtimeline.map((data, i) => {
                            return (
                              <tr key={i}>
                                <th className="flex gap-x-5 text-gray-300" scope="row"><img className="eduphoto"  src={minhoU}/>{data.degree}</th>
                                <td className="text-gray-400">{data.where}</td>
                                <td className="text-gray-400">{data.date}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
