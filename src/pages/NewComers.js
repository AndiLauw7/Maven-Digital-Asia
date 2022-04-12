import React, { useRef, useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { posts } from "../data.js";
import { motion } from "framer-motion";
import { MdOutlineStarPurple500 } from "react-icons/md";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import { Detail } from "./Detail.js";
import star from "../assets/start1.png";

export const NewComers = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const navigate = useNavigate();

  const handleDetail = () => {
    navigate("/detail");
  };
  return (
    <div>
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
              <motion.div className="item" key={post} onClick={handleDetail}>
                <img src={post.image} alt="" />
                <p className="text-start mt-1 text-white fw-bold fs-15 mb-1">
                  {post.title}
                </p>

                <p className="start-first ">
                  <img src={star} alt="" />
                  <span className="rating1">{post.rating}</span>
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};
