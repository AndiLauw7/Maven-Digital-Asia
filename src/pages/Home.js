import React, { useRef, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavHome } from "../components/Navbar";
import "../Style.css";
import { motion } from "framer-motion";
import { posts } from "../data.js";
import { MdOutlineStarPurple500 } from "react-icons/md";
import logo from "../assets/7.jpg";
import { data } from "../dataMost";

export const Home = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div>
      <NavHome />
      <Container fluid className="bodyHome mt-5 mb-5">
        <Container>
          <Row className="bodyTop ">
            <Col className="bodyItem ">
              <p
                className="title text-start text-white mb-1 "
                style={{
                  fontWeight: "bolder",
                  fontSize: "21px",
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
                        <hr />
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>
            </Col>
            <Col className="bodyItem">
              <p
                className="title text-start text-white"
                style={{
                  fontWeight: "bolder",
                  fontSize: "20px",
                }}
              >
                MOST VIEWED MOVIE
              </p>
              <div className="first">
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
        </Container>
      </Container>
    </div>
  );
};
