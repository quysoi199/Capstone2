import React from "react";
import sileimg from "../../../img/slideimg2.jpg";
import "./SliderItemSmall.scss";
import { Link } from "react-router-dom";

function SliderItemSmall({ data }) {
  return (
    <div className="SliderItemSmall" style={{ height: "100%", width: "100%" }}>
      <img
        style={{
          fontSize: "100px",
          width: "96%",
          borderRadius: "3px",
          height: "200px",
          minHeight: "200px",
        }}
        src={data && data.image}
        alt="image"
      />
      <br />
      <span className="textItemSlider">
        <Link to={`/detail/${data && data.id}`}>{data && data.title}</Link>
      </span>
    </div>
  );
}

export default SliderItemSmall;
