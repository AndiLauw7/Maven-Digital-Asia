import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { NavHome } from "../components/Navbar";
import "../Style.css";
import { BrowseTrailer } from "./BrowseTrailer";
import { NewComers } from "./NewComers";
import { MostViewd } from "./MostViewd";
import { TopPiks } from "./TopPiks";
import { Footer } from "../components/Footer";

export const Home = (props) => {
  return (
    <div>
      <NavHome />
      <Container fluid className="bodyHome mt-5 mb-5">
        <Container className="text-center">
          <Row className="bodyTop text-center">
            <Col md={8} sm={12} className="bodyItem mb-4 text-center ">
              <NewComers />
            </Col>
            <Col md={3} sm={12} className="bodyItem text-center">
              <MostViewd />
            </Col>
          </Row>
          <Container fluid>
            <Row>
              <Col className="bodyTop mt-5">
                <TopPiks />
              </Col>
            </Row>
          </Container>
          <Row>
            <Col className="bodyTop mt-5">
              <BrowseTrailer />
            </Col>
          </Row>
          <Row>
            <Col className="bodyTop mt-5">
              <NewComers />
            </Col>
          </Row>
        </Container>
      </Container>
      <Row>
        <Col className="foot mt-5">
          <Footer />
        </Col>
      </Row>
    </div>
  );
};
