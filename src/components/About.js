import { useState,useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/Pic.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Carousel from 'react-multi-carousel';
import { BsPinMapFill } from 'react-icons/bs';
import { AiOutlineCalendar } from 'react-icons/ai';
import {FaRegFlag} from 'react-icons/fa'
import {MdLanguage} from 'react-icons/md'

export const About = () => {
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

  function calculateAge(dateOfBirth) {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
  
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
  
    // If the birth month is ahead of the current month, reduce the age by 1
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    return age;
  }


const isMobile = (width/height) <= 1;
  const dateOfBirth = '1996-06-27';
  return (
    <section className="contact" id="about">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className= {isMobile?"backdrop-blur-sm":"about-bx backdrop-blur-sm"}>
                        <Row>
                        <Col size={12} md={3}>
                            <img className= "about-imgbx"  md={4} src={contactImg} alt="Contact Us"/>
                          </Col>
                          <Col className="abouttxt" xs={12} md={7} xl={6}>
                          <h1>About me</h1>
                          <p style={{ fontSize: isMobile?"1rem":"1.2rem" }} className="text-gray-300">I'm a software engineer and artist from Portugal.</p>
                          <p style={{ fontSize: isMobile?"1rem":"1.2rem" }} className="text-gray-300">From a very young age, I’ve had an interest in computers that originated from playing video games. My interests, however, aren't just technology-related, as I tend to explore any topic or field I'm vaguely interested in, like 2D/3D art, fitness/sports and music. <br></br>For me, physical activity is just as important as working to reach my career goals, so if I'm not sitting in front of a computer, you'll probably find me at the gym.</p>

                          <ul style={{ fontSize: isMobile?"1rem":"1.2rem" }} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                              <li className="col-span-1 flex  items-start gap-x-2">
                              <BsPinMapFill />
                                <span className="font-bold text-white">Location:</span>
                                <span className="text-gray-300">Tokyo, Japan</span>
                              </li>
                              <li className="col-span-1 flex  items-start gap-x-2">
                                <AiOutlineCalendar/>
                                <span className="font-bold text-white">Age:</span>
                                <span className="text-gray-300">{calculateAge(dateOfBirth)}</span>
                              </li>
                              <li className="col-span-1 flex  items-start gap-x-2">
                                <FaRegFlag/>
                                <span className="font-bold text-white">Nationality:</span>
                                <span className="text-gray-300">Portuguese</span>
                              </li>
                              <li className="col-span-1 flex  items-start gap-x-2">
                                <MdLanguage/>
                                <span className="font-bold text-white">Languages:</span>
                                <span className="text-gray-300">PT, EN, JP</span>
                              </li>
                          </ul>
                          </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
