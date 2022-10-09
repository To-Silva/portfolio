import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={3}>
      <div className="tool-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
export const ProjectCardSmall = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={3}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}

export const ToolCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4} >
      <div className="tool-imgbx">
        <img src={imgUrl}/>
      </div>
    </Col>
  )
}
