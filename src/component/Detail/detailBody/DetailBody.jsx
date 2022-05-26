import React, { useState, useRef } from "react";
import { Typography } from "antd";
import { Image } from "antd";
import { useSpeechSynthesis } from "react-speech-kit";
import pic from "../../../img/picdetail.jpg";
import playgif from "../../../img/play4.gif";

import "./DetailBody.scss";
import { CaretRightOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

function DetailBody({ data }) {
  console.log(data);
  const synth = window.speechSynthesis;
  const [pitch, setPitch] = useState(1);
  const [rate, setRate] = useState(1);
  const { speak, voices, cancel, speaking } = useSpeechSynthesis();
  const [stop, setStop] = useState(false);

  const divRef = useRef();
  const handleSpeak = () => {
    const bb = document.querySelector(".bc");
    const dd = document.querySelector(".ac");
    const tt = `${divRef.current.innerText} ,${dd.innerText}, ${bb.innerText}`;

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
          {data && data.title}
        </span>
        <div style={{ textAlign: "center" }}>
          <Image
            width={600}
            src={data && data.image}
            alt={data && data.title}
          />
          <Title className="ac" style={{ fontStyle: "italic" }} level={5}>
            {data && data.content.split(". ").shift()}
          </Title>
        </div>
        <Text className="bc">
          {data &&
            data.content
              .split(". ")
              .slice(1)
              .map((d, i) => {
                return <p key={i}>{d}.</p>;
              })}
        </Text>
      </div>
    </div>
  );
}

export default DetailBody;
