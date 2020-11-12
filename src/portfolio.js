import React from 'react';
import "./style.css";
import ARTGAL from "./img/ARTGAL.png";
import LifePT from "./img/Lifepoint.png";
import EATBURG from "./img/EatBurg.png";
import DayPlan from "./img/DayPlanner.png";
import ASQUIZ from "./img/AstQuiz.png";
import WEATDASH from "./img/Wedash.png";
import LIFEV2 from "./img/LIFEV2.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import portfolio from "./portfolio.json";


function Portfolio() {
    const images = {
        ARTGAL,
        LifePT,
        EATBURG,
        DayPlan,
        ASQUIZ,
        WEATDASH,
        LIFEV2
    };
    return (
        <>
            {portfolio.map( p => 
            <Row className="portfolio-row">
                <Col>
                <img src={images[p.image]} className="img-fluid" alt={p.imageAlt}/>
                </Col>
                <Col>
                    <br></br>
                        <h4>{p.heading}</h4>
                        <p className="portfolio-content">{p.content}</p>
                        <a href={p.site} target="_blank">Click here to checkout site</a>
                        <br></br>
                        <a href={p.github} target="_blank">Click here to checkout Github Repo </a>
                </Col>
            </Row>
            )}
            
        </>
  );
}
export default Portfolio;                                                                         