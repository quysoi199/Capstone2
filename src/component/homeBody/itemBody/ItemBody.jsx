import img from "../../../img/ItemBody2.jpg";
import { ForwardOutlined } from "@ant-design/icons";
import "./ItemBody.scss";
import React from "react";

function ItemBody() {
  return (
    <div className="wrapItemBody">
      <div className="wrapItemText">
        <span className="itemText-head">Bóng đá</span>
        <span className="itemText">Thể thao</span>
        <span className="itemText">Video</span>
        <span className="itemText">Ngoại hạng Anh</span>
        <span className="itemText">Lịch thi đấu</span>
      </div>
      <div className="textItem">
        <div>
          Kịch bản choáng bốc thăm World Cup 2022: 7 ông lớn lo vào "bảng tử
          thần" với Đức
        </div>
      </div>
      <div className="wrapbodyItem">
        <img src={img} alt="" />
        <div style={{ textAlign: "left", marginLeft: "5px" }}>
          Các ông lớn sẽ mong không rơi vào bảng 'tử thần' World Cup có Đức góp
          mặt.
          <div className="bodyItem2">
            <ForwardOutlined style={{ color: "#9c4" }} />
            World Cup 2022
          </div>
        </div>
      </div>
      <div
        className="wrapTitle"
        style={{
          backgroundColor: "#efb",
          marginTop: "3px",
          textAlign: "left",
        }}
      >
        <span className="title1">
          <ForwardOutlined style={{ color: "#9c4" }} />
          Haaland dính chấn thương cực nặng, chấp nhận "hạ giá" để đến Ngoại
          hạng Anh
        </span>
        <br />
        <span className="title1">
          <ForwardOutlined style={{ color: "#9c4" }} />
          Ronaldo vs Fernandes "lột xác" ở Bồ Đào Nha gây tranh cãi, Salah quyết
          rời Liverpool (Clip 1 phút Bóng đá 24H)
        </span>
        <br />
        <span className="title1">
          <ForwardOutlined style={{ color: "#9c4" }} />
          Tự hào Tiến Linh ghi bàn tốt hơn cả Messi - Ronaldo ở vòng loại World
          Cup
        </span>
      </div>
      <div
        className="wrapTitleSec"
        style={{
          backgroundColor: "#dfb",
          textAlign: "left",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          fontSize: "14px",
        }}
      >
        <span className="titleSec">
          <ForwardOutlined style={{ color: "#9c4" }} />
          Việt Nam khiến Nhật Bản mất ngôi đầu, 2 đội châu Á nào tranh "vé vớt"
          World Cup?
        </span>
        <br />
        <span className="titleSec">
          <ForwardOutlined style={{ color: "#9c4" }} />
          Cựu chuyền hai Thu Hòa thi Hoa hậu hoàn vũ, ba vòng quyến rũ nhờ mê
          thể thao
        </span>
      </div>
    </div>
  );
}

export default ItemBody;
