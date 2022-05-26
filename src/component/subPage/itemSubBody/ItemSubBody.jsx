import React from "react";
import img from "../../../img/picsubitem.jpg";
import "./ItemSubBody.scss";
import { Link } from "react-router-dom";

function ItemSubBody({ data }) {
  return (
    <div className="wrabSubItem">
      <div className="head" title={data && data.title}>
        <Link to={`/detail/${data && data.id}`}>{data && data.title}</Link>
      </div>
      <div className="body">
        <img className="imgBody" src={data && data.image} alt="image" />
        <div className="bodyInside">{data && data.content}</div>
      </div>
    </div>
  );
}

export default ItemSubBody;
