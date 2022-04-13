import React from "react";
import sileimg from "../../../img/slideimg2.jpg";
import "./SliderItemSmall.scss";

function SliderItemSmall() {
  return (
    <div className="SliderItemSmall" style={{ height: "100%", width: "100%" }}>
      <img
        style={{
          fontSize: "100px",
          width: "100%",
          borderRadius: "3px",
        }}
        src={sileimg}
        alt=""
      />
      <br />
      <span className="textItemSlider">
        Tokyu PM ứng dụng công nghệ chuyển đổi số DX vào vận hành D-Aqua
      </span>
    </div>
  );
}

export default SliderItemSmall;
