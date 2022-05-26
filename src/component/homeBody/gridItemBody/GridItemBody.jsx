import { Row, Col, Pagination } from "antd";
import React, { useEffect, useState } from "react";
import ItemBody from "../itemBody/ItemBody";
import SlideItem from "../slideItem/SlideItem";
import { getNewPaperData } from "../../../fetchData";
import Loading from "../../loading/Loading";

function GridItemBody() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  useEffect(async () => {
    setLoading(true);
    const res = await getNewPaperData(page);
    await setData(res);
    setLoading(false);
  }, [page]);
  console.log(page);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Row style={{}}>
            {data !== null &&
              data.length > 0 &&
              data.slice(1).map((d, i) => {
                return (
                  <Col key={i} style={{ backgroundColor: "#fff" }} span={8}>
                    <ItemBody data={d} />
                  </Col>
                );
              })}
            <Col span={24}>
              <Pagination
                style={{ marginTop: "10px", marginBottom: "10px" }}
                onChange={(page, pageSize) => {
                  setPage(page);
                }}
                defaultCurrent={page}
                total={100}
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <SlideItem data={data} />
            </Col>
          </Row>
        </>
      )}
    </div>
  );
}

export default GridItemBody;
