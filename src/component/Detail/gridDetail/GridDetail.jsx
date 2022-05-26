import React, { useEffect, useState } from "react";
import { Row, Col, Pagination } from "antd";
import SlideItem from "../../homeBody/slideItem/SlideItem";
import HeadDetail from "../headDetail/HeadDetail";
import ItemBody from "../../subPage/itemSubBody/ItemSubBody";
import DetailBody from "../detailBody/DetailBody";
import { useParams } from "react-router-dom";
import {
  getNewPaperDataWithId,
  getNewPaperData,
  getNewPaperDataWithPage,
} from "../../../fetchData";
function GridDetail() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [item, setItem] = useState([]);
  const token = localStorage.getItem("tokens")
    ? JSON.parse(localStorage.getItem("tokens"))
    : null;

  useEffect(async () => {
    const res = await getNewPaperData(1);
    await setItem(res);
  }, []);
  useEffect(async () => {
    const res = await getNewPaperDataWithId(id, token.access.token);
    await setData(res);
  }, [id]);
  return (
    <div>
      <Row style={{}}>
        <Col span={24}>
          <HeadDetail />
          <DetailBody data={data} />
        </Col>
        <Col span={24}>
          <p
            style={{
              textAlign: "left",
              fontWeight: "bold",
              fontSize: "20px",
              color: "rgb(136, 187, 68)",
            }}
          >
            Gợi Ý Tin Tức
          </p>
        </Col>
        {item &&
          item.length > 0 &&
          item.slice(1).map((d, i) => {
            return (
              <Col key={i} style={{ backgroundColor: "#fff" }} span={8}>
                <ItemBody data={d} />
              </Col>
            );
          })}

        <Col span={24}>
          <SlideItem data={item} />
        </Col>
      </Row>
    </div>
  );
}

export default GridDetail;
