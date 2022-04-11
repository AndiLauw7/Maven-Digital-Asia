import React, { useEffect, useRef, useState } from "react";
import { Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import logo from "../assets/ghost.png";
import logo2 from "../assets/knife.png";
import logo3 from "../assets/hearts.png";
import logo4 from "../assets/theater.png";
import "../Style.css";
import { granim } from "granim";

export const BrowseTrailer = () => {
  //   useEffect(() => {
  //     new granim({
  //       element: "#logo canvas",
  //       direction: "left-right",
  //       opacity: [1, 1],
  //       states: {
  //         "default-state": {
  //           gradients: [
  //             ["#15181C", "#895E2A"],
  //             ["#15181C", "#00245A"],
  //             ["#15181C", "#62105C"],
  //             ["#15181C", "#62105C"],
  //           ],
  //           transitionSpeed: 1000,
  //         },
  //       },
  //     });
  //   }, []);

  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <Col md={12} sm={12} className="bodyItem mb-4 ">
      <p
        className="title text-start text-white mb-2  "
        style={{
          fontWeight: "bolder",
          fontSize: "21px",
          padding: "0",
          margin: "0",
        }}
      >
        BROWSE TRAILERS
      </p>
      {/* <motion.div ref={carousel} className="carousel">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {posts.map((post) => {
            return (
              <motion.div className="box" key={post}>
                <div className="boximg">
                  <img src={post.image} alt="" className="imgage" />
                  <p className="boxText">pppppp</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        <hr />
      </motion.div> */}
      <motion.div ref={carousel} className="carousel">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          <motion.div className="box">
            <div className="boximg" style={{ backgroundColor: "#00245A" }}>
              <img src={logo} alt="" className="imgage" />
              <p className="boxText">HOROR</p>
            </div>
            <div className="boximg" style={{ backgroundColor: "#401077" }}>
              <img src={logo2} alt="" className="imgage" />
              <p className="boxText">THRILLER</p>
            </div>
            <div className="boximg " style={{ backgroundColor: "#401077" }}>
              <img src={logo3} alt="" className="imgage" />
              <p className="boxText">ROMANCE</p>
            </div>
            <div className="boximg" style={{ backgroundColor: "#895E2A" }}>
              <img src={logo4} alt="" className="imgage" />
              <p className="boxText">COMEDY</p>
            </div>
            <div className="boximg" style={{ backgroundColor: "#00245A" }}>
              <img src={logo} alt="" className="imgage" />
              <p className="boxText">HOROR</p>
            </div>
            <div className="boximg" style={{ backgroundColor: "#401077" }}>
              <img src={logo2} alt="" className="imgage" />
              <p className="boxText">THRILLER</p>
            </div>
            <div className="boximg " style={{ backgroundColor: "#401077" }}>
              <img src={logo3} alt="" className="imgage" />
              <p className="boxText">ROMANCE</p>
            </div>
            <div className="boximg" style={{ backgroundColor: "#895E2A" }}>
              <img src={logo4} alt="" className="imgage" />
              <p className="boxText">COMEDY</p>
            </div>
            <div className="boximg" style={{ backgroundColor: "#00245A" }}>
              <img src={logo} alt="" className="imgage" />
              <p className="boxText">HOROR</p>
            </div>
            <div className="boximg" style={{ backgroundColor: "#401077" }}>
              <img src={logo2} alt="" className="imgage" />
              <p className="boxText">THRILLER</p>
            </div>
            <div className="boximg " style={{ backgroundColor: "#401077" }}>
              <img src={logo3} alt="" className="imgage" />
              <p className="boxText">ROMANCE</p>
            </div>
            <div className="boximg" style={{ backgroundColor: "#895E2A" }}>
              <img src={logo4} alt="" className="imgage" />
              <p className="boxText">COMEDY</p>
            </div>
          </motion.div>
        </motion.div>
        <hr />
      </motion.div>
    </Col>
  );
};
