import React, { useRef, useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { NavHome } from "../components/Navbar";
import "../Style.css";
import { data } from "../dataMost";
import { BrowseTrailer } from "./BrowseTrailer";
import { dataPiks } from "../dataPiks";
import { motion } from "framer-motion";
import { posts } from "../data.js";
import { MdOutlineStarPurple500 } from "react-icons/md";

export const Home = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  const [witdh, setWitdh] = useState(0);
  const carouselBody = useRef();
  useEffect(() => {
    console.log(carouselBody.current.scrollWidth);
    setWitdh(
      carouselBody.current.scrollWidth - carouselBody.current.offsetWidth
    );
  }, []);

  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div>
      <NavHome />
      <Container fluid className="bodyHome mt-5 mb-5">
        <Container className="text-center">
          <Row className="bodyTop text-center">
            <Col md={8} sm={12} className="bodyItem mb-4 text-center ">
              <p
                className="title text-start text-white mb-3 "
                style={{
                  fontWeight: "bolder",
                  fontSize: "21px",
                  padding: "0",
                  margin: "0",
                }}
              >
                NEWCOMERS
              </p>
              <motion.div ref={carousel} className="carousel">
                <motion.div
                  drag="x"
                  dragConstraints={{ right: 0, left: -width }}
                  className="inner-carousel"
                >
                  {posts.map((post) => {
                    return (
                      <motion.div className="item" key={post}>
                        <img src={post.image} alt="" />
                        <p className="text-start mt-1 text-white fw-bold fs-15 mb-1">
                          {post.title}
                        </p>
                        <p className="start-first ">
                          <MdOutlineStarPurple500 className="text-warning" />{" "}
                          <span className="rating">{post.rating}</span>
                        </p>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>
            </Col>
            <Col md={3} sm={12} className="bodyItem text-center">
              <p
                className="title text-start text-white mb-3"
                style={{
                  fontWeight: "bolder",
                  fontSize: "20px",
                  padding: "0",
                  margin: "0",
                }}
              >
                MOST VIEWED MOVIE
              </p>
              <div className="first text-center">
                <div className="second">
                  <div className="thereItem">
                    {data.map((datas) => {
                      return (
                        <div className="first-text">
                          <p className="top"> 0{datas.id}.</p>
                          <img src={datas.image} alt="" className="img" />
                          <div className="mid">
                            <p className="second-text">{datas.title}</p>
                            <p className="there-white">
                              <MdOutlineStarPurple500 className="text-warning" />
                              <span className="rating">8.5</span>
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Container fluid>
            <Row>
              <Col className="bodyTop mt-5">
                <motion.div ref={carouselBody} className="carouselBody">
                  <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -witdh }}
                    className="innerBody"
                  >
                    {dataPiks.map((piks) => {
                      return (
                        <motion.div className="content" key={piks}>
                          <Card className="bodyContent">
                            <Card.Img src={piks.image} alt="Card image" />
                            <Card.ImgOverlay>
                              <Card.Title className="topText">
                                {piks.title}
                              </Card.Title>
                              <Card.Title className="midText">
                                {piks.titleMid}
                              </Card.Title>
                              <Card.Title className="botText">
                                {piks.titleBot}
                              </Card.Title>
                              <Card.Title className="button">
                                View Info
                              </Card.Title>
                              <Card.Title className="Watch">
                                Watch Trailer
                              </Card.Title>
                              <Card.Title className="WatchList">
                                + Watch List
                              </Card.Title>
                              <Card.Title className="ratinContent">
                                <MdOutlineStarPurple500 className="text-warning" />
                                {piks.rating}
                              </Card.Title>

                              <Card.Text className="TextContent">
                                At the age of 8, Park Joo-Hyeong went to Italy
                                after he was adopted. He is now an adult and has
                                the name <br /> of Vincenzo Cassano (Song
                                Joong-Ki). He is a lawyer, who works for the
                                Mafia as a consigliere. <br /> Because of a war
                                between mafia groups, he flees to South Korea.
                              </Card.Text>
                            </Card.ImgOverlay>
                          </Card>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </motion.div>
              </Col>
            </Row>
          </Container>
          <Row>
            <Col className="bodyTop mt-5">
              <BrowseTrailer />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};
