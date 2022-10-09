import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/Antonio-Logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon4.png";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a onClick={(e) => {e.preventDefault();window.location.href='https://www.linkedin.com/in/to-silva/'}} href="#"><img src={navIcon1} alt="" /></a>
                <a onClick={(e) => {e.preventDefault();window.location.href='https://github.com/To-Silva'}} href="#"><img src={navIcon2} alt="" /></a>
                <a onClick={(e) => {e.preventDefault();window.location.href='https://www.instagram.com/silva.back_/'}} href="#"><img src={navIcon3} alt="" /></a>
            </div>
            <p style={{color:'rgb(245, 245, 245)'}}>Contact: 96.to.silva@gmail.com</p>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
