import React, { useState } from "react";
import { Row, Col } from "antd";
import HeadSubBody from "../itemSubBody/headSubBody/HeadSubBody";
import ItemSubBody from "../itemSubBody/ItemSubBody";
import SlideItem from "../../homeBody/slideItem/SlideItem";
import { useParams } from "react-router-dom";
import { allType } from "../../constants/constans";
import { getPaperType } from "../../../fetchData";
import Loading from "../../loading/Loading";
function GridSubBody() {
  const [item, setItem] = React.useState([]);
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("tokens")
    ? JSON.parse(localStorage.getItem("tokens"))
    : null;

  const { type } = useParams();
  const category = allType.filter((d) => {
    return d.type === type;
  });
  React.useEffect(async () => {
    setLoading(true);
    const res = await getPaperType(category[0].name, token.access.token);
    await setItem(res);
    setLoading(false);
  }, [type]);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Row style={{}}>
          <Row>
            <Col span={24}>
              <HeadSubBody />
            </Col>
          </Row>
          {item &&
            item.length > 0 &&
            item.map((d, i) => {
              return (
                <Col key={i} style={{ backgroundColor: "#fff" }} span={8}>
                  <ItemSubBody data={d} />
                </Col>
              );
            })}
        </Row>
      )}
    </div>
  );
}

export default GridSubBody;
