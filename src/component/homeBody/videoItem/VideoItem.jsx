import React from "react";
import picvideo from "../../../img/picvideo1.jpg";
import { YoutubeOutlined, PlayCircleOutlined } from "@ant-design/icons";
import "./VideoItem.scss";
import VideoItemSmall from "./videoItemSmall/VideoItemSmall";
import { Row, Col, Card } from "antd";

function VideoItem() {
  return (
    <Card style={{ marginTop: 4 }}>
      <header className="headerItem">
        <h2 className="titleHeader">
          <YoutubeOutlined style={{ margin: "0 3px", color: "#8b4" }} />
          <a className="titleHeaderText" title="Tổng hợp video">
            VIDEO CHỌN LỌC
          </a>
          <hr size="6" width="100%" align="left" color="#8b4" />
        </h2>
      </header>
      <Row>
        <Card>
          <Col span={18}>
            <div className="wrapVideoItem">
              <div className="firstWrapItem">
                <div className="bodyVideoItem">
                  <div className="bodyVideoItemImg">
                    <img style={{ width: "100%" }} src={picvideo} alt="" />
                    <PlayCircleOutlined
                      title="Play video"
                      style={{
                        left: "60%",
                        position: "absolute",
                        bottom: "50%",
                        fontSize: "66px",
                        color: "#fff",
                      }}
                    />
                  </div>
                  <span
                    className="textVideo"
                    title="Cô gái Tây Nguyên bị nhầm là con lai vì xinh đẹp chẳng kém siêu
                mẫu"
                  >
                    Cô gái Tây Nguyên bị nhầm là con lai vì xinh đẹp chẳng kém
                    siêu mẫu
                  </span>
                  <br />
                  <span>
                    Sở hữu chiều cao 1,7m cùng gương mặt đẹp như tranh vẽ, H
                    Duyên-Bkrông thường bị nhầm là con lai.
                  </span>
                </div>
              </div>
              {/* <hr style={{ width: "0px", height: "100%" }} /> */}
            </div>
          </Col>
        </Card>
        <Col span={6}>
          <Card
            size="small"
            style={{ width: 400, overflow: "auto", height: "515px" }}
          >
            <p>
              <VideoItemSmall />
            </p>
            <p>
              <VideoItemSmall />
            </p>
            <p>
              <VideoItemSmall />
            </p>
            <p>
              <VideoItemSmall />
            </p>
            <p>
              <VideoItemSmall />
            </p>
            <p>
              <VideoItemSmall />
            </p>
          </Card>
        </Col>
      </Row>
    </Card>
  );
}

export default VideoItem;
