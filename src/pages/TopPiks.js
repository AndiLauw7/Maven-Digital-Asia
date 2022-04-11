import React, { useRef, useState, useEffect } from "react";

import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { dataPiks } from "../dataPiks";
import { MdOutlineStarPurple500 } from "react-icons/md";
export const TopPiks = () => {
  const [witdh, setWitdh] = useState(0);
  const carouselBody = useRef();
  useEffect(() => {
    console.log(carouselBody.current.scrollWidth);
    setWitdh(
      carouselBody.current.scrollWidth - carouselBody.current.offsetWidth
    );
  }, []);
  return (
    <div>
      {" "}
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
                    <Card.Title className="topText">{piks.title}</Card.Title>
                    <Card.Title className="midText">{piks.titleMid}</Card.Title>
                    <Card.Title className="botText">{piks.titleBot}</Card.Title>
                    <Card.Title className="button">View Info</Card.Title>
                    <Card.Title className="Watch">Watch Trailer</Card.Title>
                    <Card.Title className="WatchList">+ Watch List</Card.Title>
                    <Card.Title className="ratinContent">
                      <MdOutlineStarPurple500 className="text-warning" />
                      {piks.rating}
                    </Card.Title>

                    <Card.Text className="TextContent">
                      At the age of 8, Park Joo-Hyeong went to Italy after he
                      was adopted. He is now an adult and has the name <br /> of
                      Vincenzo Cassano (Song Joong-Ki). He is a lawyer, who
                      works for the Mafia as a consigliere. <br /> Because of a
                      war between mafia groups, he flees to South Korea.
                    </Card.Text>
                  </Card.ImgOverlay>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};
