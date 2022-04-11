import React from "react";

export const Detail = () => {
  return (
    <div className="bg-image hover-overlay" style={{ maxWidth: "24rem" }}>
      <img
        src="https://mdbootstrap.com/img/new/standard/city/053.webp"
        className="w-100"
      />
      <div
        className="mask"
        style={{
          background:
            "linear-gradient(45deg, rgba(29, 236, 197, 0.5), rgba(91, 14, 214, 0.5) 100%)",
        }}
      ></div>
    </div>
  );
};
