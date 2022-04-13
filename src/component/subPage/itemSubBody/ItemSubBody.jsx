import React from "react";
import img from "../../../img/picsubitem.jpg";
import "./ItemSubBody.scss";

function ItemSubBody() {
  return (
    <div className="wrabSubItem">
      <div
        className="head"
        title=" Phát hiện mới: Trái đất đã từng có sóng thần cao hàng ngàn mét "
      >
        Phát hiện mới: Trái đất đã từng có sóng thần cao hàng ngàn mét
      </div>
      <div className="body">
        <img className="imgBody" src={img} alt="" />
        <div className="bodyInside">
          Khi một tiểu hành tinh va chạm với Trái đất hơn 65 triệu năm trước đã
          khiến khủng long bị tuyệt chủng. Cú va chạm này đã sinh ra một cơn
          sóng thần cao gần 2.000 m qua Vịnh Mexico gây hỗn loạn trên khắp các
          đại dương trên thế giới.
        </div>
      </div>
    </div>
  );
}

export default ItemSubBody;
