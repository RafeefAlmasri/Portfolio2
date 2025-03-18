import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rafeef Almasri </span>
            from <span className="purple"> Balqa, Jordan.</span>
            <br />
            I currently work as a freelance software developer.
            <br />
            I completed my Bachelor's degree in Software Engineering from Al-Balqa Applied University/Salt.
            <br />
            <br />
            Besides programming, I have a few other activities I love!
            </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />Website development using WordPress..
            </li>
            <li className="about-activity">
              <ImPointRight /> UI and UX design..
            </li>
            <li className="about-activity">
              <ImPointRight />Graphic design..
            </li>
            <li className="about-activity">
              <ImPointRight />Traveling..
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Work hard to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Rafeef</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
