import React from "react";
import { data } from "../dataMost";
import { MdOutlineStarPurple500 } from "react-icons/md";
import logo from "../assets/start1.png";
export const MostViewd = () => {
  return (
    <div>
      {" "}
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
                      <img src={logo} alt="" />
                      <span className="rating1">8.5</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
