import React from "react";
import pic from "../../../../img/vidpicsmall.jpg";
import "./VideoItemSmall.scss";

function VideoItemSmall() {
  return (
    <div style={{ display: "flex" }}>
      <img src={pic} alt="/" style={{ width: "60%" }} />
      <div
        className="edit"
        title="Benzema ghi hat-trick lập nhiều kỷ lục, sánh ngang Ronaldo - Messi ở cúp
        C1"
        style={{ textAlign: "left", marginLeft: "5px" }}
      >
        Benzema ghi hat-trick lập nhiều kỷ lục, sánh ngang Ronaldo - Messi ở cúp
        C1
      </div>
    </div>
  );
}

export default VideoItemSmall;
