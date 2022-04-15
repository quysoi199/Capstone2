import React, { useState, useRef, useEffect } from "react";
import { Button, Typography } from "antd";
import { Image } from "antd";
import { useSpeechSynthesis } from "react-speech-kit";
import pic from "../../../img/picdetail.jpg";
import playgif from "../../../img/play4.gif";

import "./DetailBody.scss";
import { CaretRightOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

function DetailBody() {
  const synth = window.speechSynthesis;
  const [pitch, setPitch] = useState(1);
  const [rate, setRate] = useState(1);
  const { speak, voices, cancel, speaking } = useSpeechSynthesis();
  const [stop, setStop] = useState(false);

  const divRef = useRef();
  const handleSpeak = () => {
    const cc = document.querySelector(".ad");
    const bb = document.querySelector(".bc");
    const tt = `${divRef.current.innerText} , ${cc.innerText}, ${bb.innerText}`;

    speak({
      text: tt,
      voice: voices[3],
      rate: rate,
      pitch: pitch,
    });
    // console.log(synth.speaking);
  };
  return (
    <div>
      <div className="void">
        <div className="wrapRange">
          <div className="wrapItem">
            <label htmlFor="rate">Tốc độ đọc: </label>
            <div className="rate-value">{rate}</div>
          </div>
          <input
            disabled={speaking === true}
            type="range"
            min="0.5"
            max="2"
            defaultValue="1"
            step="0.1"
            id="rate"
            onChange={(event) => {
              setRate(event.target.value);
            }}
          />
        </div>
        <div className="wrapRange">
          <div className="wrapItem">
            <label htmlFor="pitch">Độ trầm: </label>
            <div className="pitch-value">{pitch}</div>
          </div>
          <input
            disabled={speaking === true}
            type="range"
            min="0"
            max="2"
            defaultValue="1"
            step="0.1"
            id="pitch"
            onChange={(event) => {
              setPitch(event.target.value);
            }}
          />
        </div>
        {!speaking && (
          <button className="btn-sss" onClick={handleSpeak}>
            Bắt đầu
          </button>
        )}

        {speaking && (
          <>
            {stop ? (
              <button
                className="btn-sss"
                onClick={() => {
                  synth.resume();
                  setStop(false);
                }}
              >
                <CaretRightOutlined style={{ fontSize: 30 }} />
              </button>
            ) : (
              <button
                className="btn-sss"
                onClick={() => {
                  synth.pause();
                  setStop(true);
                }}
              >
                <img className="icon" src={playgif} alt="" />
                {/* <span
                  className="icon"
                  style={{
                    backgroundImage: playgif,
                  }}
                ></span> */}
                {/* <PauseOutlined style={{ fontSize: 30 }} /> */}
              </button>
            )}
          </>
        )}
        <button
          className="btn-sss"
          onClick={() => {
            setStop(false);
            synth.cancel();
          }}
        >
          Tải lại
        </button>
      </div>

      <div style={{ textAlign: "left" }}>
        <span ref={divRef} style={{ fontSize: 30, fontWeight: "bold" }}>
          Hành tinh "em út" Trái Đất mắc kẹt với mùa hè ngược đời kéo dài 40 năm
        </span>
        <Title className="ad" level={2}>
          (NLĐO) - Sáu siêu kính viễn vọng đã cùng hướng về người anh em lạnh và
          bí ẩn nhất của Trái Đất và khám phá ra những điều hết sức lạ lùng đang
          diễn ra trên hành tinh này.
        </Title>
        <Text className="bc">
          Trong khi bí ẩn về khí hậu kỳ lạ trên nhiều ngoại hành tinh đã được hé
          lộ, những gì thực sự diễn ra trên sao Hải Vương, một hành tinh nằm
          ngay trong hệ Mặt Trời, vẫn là câu đố thú vị đối với giới thiên văn.
          <br />
          <br />
          Bởi lẽ với khoảng cách 4,5 tỉ km, nhiệt độ luôn âm khoảng 220 độ C và
          bóng tối bủa vây, cực kỳ khó quan sát hành tinh thứ 8 của hệ Mặt Trời
          từ Trái Đất.
          <div style={{ textAlign: "center" }}>
            <Image width={600} src={pic} />
            <Title style={{ fontStyle: "italic" }} level={5}>
              Sao Hải Vương - Ảnh đồ họa từ dữ liệu NASA
            </Title>
          </div>
          Theo Sci-News, nhóm nghiên cứu dẫn đầu bởi nhà thiên văn học Michael
          Roman từ Trường Đại học Leicester (Anh) và các đồng nghiệp đã nghiên
          cứu về hành tinh độc đáo này bằng dữ liệu tổng hợp từ Kính viễn vọng
          Very Large (VLT) của Đài thiên văn Nam Âu (ESO), Kính viễn vọng không
          gian Spitzer của NASA, 2 kính viễn vọng Subaru, Keck và Bắc Gemini ở
          Hawaii - Mỹ, kính viễn vọng Nam Gemini ở Chile.
          <br />
          <br />
          Mùa hè ở Nam bán cầu của sao Hải Vương đã diễn ra từ năm 2005 đến nay
          và sẽ còn kéo dài đến năm 2045. Bởi lẽ người em út của Trái Đất nằm xa
          Mặt Trời nhất nên có quỹ đạo cực lớn. Một năm ở đây dài bằng 165 năm
          Trái Đất nên một mùa cũng kéo dài hơn 4 thập kỷ.
          <br />
          <br />
          Các nhà khoa học đã nghiên cứu ánh sáng hồng ngoại phát ra từ tầng
          bình lưu của Sao Hải Vương, để rồi choáng váng nhận ra nó đang... lạnh
          dần sau gần 2 thập kỷ trải qua cái gọi là "mùa hè".
          <br />
          <br />
          Cụ thể, theo Science Alert, nhiệt độ trung bình của hành tinh này đã
          giảm khoảng 8 độ kể từ năm 2003 đến lần đo đạc tổng thể cuối cùng là
          năm 2018.
          <br />
          <br />
          Ngược lại, cực Nam của hành tinh lại ấm lên đáng kể, tăng tới 11 độ
          chỉ từ năm 2018 đến năm 2020.
          <br />
          <br />
          Hiện các tác giả vẫn chưa biết nguyên nhân chính xác của "mùa hè lạnh"
          và hiện tượng cực Nam bị nung nóng đột ngột. Họ cho rằng có thể do
          thay đổi hóa học phức tạp trong tầng bình lưu hoặc cả bầu khí quyển,
          hoặc các kiểu thời tiết ngẫu nhiên và phức tạp hơn bất kỳ hành tinh
          nào khác của hệ Mặt Trời.
          <br />
          <br />
          Nghiên cứu vẫn sẽ tiếp diễn bởi sao Hải Vương luôn là một mục tiêu hấp
          dẫn của giới thiên văn. Tuy nó lạnh và có vẻ chết chóc nhưng NASA nghi
          ngờ là có đại dương ngầm dưới vỏ băng của hành tinh này.
          <br />
          <br />
          Nghiên cứu vừa công bố trên tạp chí Planetary Science Journal.s
        </Text>
      </div>
    </div>
  );
}

export default DetailBody;
