import React from "react";
import "../Style.css";
import logo from "../assets/vincenzo.jpeg";
import logo2 from "../assets/play.png";
import { Container, Card, Row, Col, ListGroup } from "react-bootstrap";
import { detail } from "../datadetail";
import { Footer } from "../components/Footer.js";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import stars from "../assets/start1.png";
export const Detail = () => {
  return (
    <div>
      <Container fluid className="mb-5">
        <div className="carddetail">
          <div className="hovereffect">
            <p className="eps1">Episode 20</p>
            <img className="img-responsive" src={logo} alt="" />
            <div className="overlay">
              <h2>Vincenzo</h2>
              <p className="eps">Episode 20</p>
              <span className="play">
                <img src={logo2} alt="" />
              </span>
              <a className="info" href="#">
                Add To WatchList
              </a>
            </div>
          </div>
        </div>

        <Container>
          {detail.map((id) => {
            return (
              <Row>
                <Col>
                  <div>
                    {" "}
                    <div>
                      <div className="detail">
                        <p className="about">About Vincenzo</p>
                        <p className="release">
                          Release {id.release} | {id.episode} | {id.kategory} |
                        </p>
                        <p className="name">Cast</p>
                        <p className="cast">{id.cast}</p>
                        <p className="name">Director</p>
                        <p className="director">{id.director}</p>
                        <p className="name">Sinopsis</p>
                        <p className="longdes">{id.longDesc}</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="detail">
                    <p className="about">Rate</p>
                    <p className="stars">
                      <img src={stars} alt="" />
                      {id.rating}
                    </p>
                    <p className="voters">{id.voters} voters</p>
                    <span className="voting" href="#">
                      Give Voting
                    </span>
                  </div>
                </Col>
              </Row>
            );
          })}
          ;
          <Row>
            <Col></Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </div>
  );
};
