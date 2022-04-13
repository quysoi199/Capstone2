import React, { useEffect, useRef } from "react";
import { Button, Typography } from "antd";
import { Image } from "antd";
import pic from "../../../img/picdetail.jpg";

const { Title } = Typography;

function DetailBody() {
  var txtInput = document.querySelector("#txtInput");
  var voiceList = document.querySelector("#voiceList");
  var btnSpeak = document.querySelector("#btnSpeak");
  var synth = window.speechSynthesis;
  var voices = [];
  PopulateVoices();
  if (speechSynthesis !== undefined) {
    speechSynthesis.onvoiceschanged = PopulateVoices;
  }
  const handleVoice = () => {
    var toSpeak = new SpeechSynthesisUtterance(txtInput.value);
    var selectedVoiceName =
      voiceList.selectedOptions[0].getAttribute("data-name");
    voices.forEach((voice) => {
      console.log(voice);
      if (voice.name === selectedVoiceName) {
        toSpeak.voice = voice;
      }
    });
    synth.speak(toSpeak);
  };
  // btnSpeak.addEventListener("click", () => {

  // });

  function PopulateVoices() {
    voices = synth.getVoices();

    var selectedIndex =
      voiceList.selectedIndex < 0 ? 0 : voiceList.selectedIndex;
    voiceList.innerHTML = "";
    voices.forEach((voice) => {
      var listItem = document.createElement("option");
      listItem.textContent = voice.name;
      listItem.setAttribute("data-lang", voice.lang);
      listItem.setAttribute("data-name", voice.name);
      voiceList.appendChild(listItem);
    });

    voiceList.selectedIndex = selectedIndex;
  }

  // function PopulateVoices() {
  //   voices = synth.getVoices();

  //   var selectedIndex =
  //     voiceList.selectedIndex < 0 ? 0 : voiceList.selectedIndex;
  //   voiceList.innerHTML = "";
  //   voices.forEach((voice) => {
  //     var listItem = document.createElement("option");
  //     listItem.textContent = voice.name;
  //     listItem.setAttribute("data-lang", voice.lang);
  //     listItem.setAttribute("data-name", voice.name);
  //     voiceList.appendChild(listItem);
  //   });

  //   voiceList.selectedIndex = selectedIndex;
  // }
  return (
    <div>
      Select Voice: <select id="voiceList"></select> <br></br>
      <input id="txtInput" />
      <button id="btnSpeak">Speak!</button>
      <Button onClick={handleVoice}>Voice</Button>
      <div style={{ textAlign: "left" }}>
        <h2>
          Hành tinh "em út" Trái Đất mắc kẹt với mùa hè ngược đời kéo dài 40 năm
        </h2>
        <Title level={2}>
          (NLĐO) - Sáu siêu kính viễn vọng đã cùng hướng về người anh em lạnh và
          bí ẩn nhất của Trái Đất và khám phá ra những điều hết sức lạ lùng đang
          diễn ra trên hành tinh này.
        </Title>
        <Title level={4}>
          Trong khi bí ẩn về khí hậu kỳ lạ trên nhiều ngoại hành tinh đã được hé
          lộ, những gì thực sự diễn ra trên sao Hải Vương, một hành tinh nằm
          ngay trong hệ Mặt Trời, vẫn là câu đố thú vị đối với giới thiên văn.
        </Title>{" "}
        <Title level={4}>
          Bởi lẽ với khoảng cách 4,5 tỉ km, nhiệt độ luôn âm khoảng 220 độ C và
          bóng tối bủa vây, cực kỳ khó quan sát hành tinh thứ 8 của hệ Mặt Trời
          từ Trái Đất.
        </Title>{" "}
        <div style={{ textAlign: "center" }}>
          <Image width={600} src={pic} />
          <Title style={{ fontStyle: "italic" }} level={5}>
            Sao Hải Vương - Ảnh đồ họa từ dữ liệu NASA
          </Title>
        </div>
        <Title level={4}>
          Theo Sci-News, nhóm nghiên cứu dẫn đầu bởi nhà thiên văn học Michael
          Roman từ Trường Đại học Leicester (Anh) và các đồng nghiệp đã nghiên
          cứu về hành tinh độc đáo này bằng dữ liệu tổng hợp từ Kính viễn vọng
          Very Large (VLT) của Đài thiên văn Nam Âu (ESO), Kính viễn vọng không
          gian Spitzer của NASA, 2 kính viễn vọng Subaru, Keck và Bắc Gemini ở
          Hawaii - Mỹ, kính viễn vọng Nam Gemini ở Chile.
        </Title>{" "}
        <Title level={4}>
          Mùa hè ở Nam bán cầu của sao Hải Vương đã diễn ra từ năm 2005 đến nay
          và sẽ còn kéo dài đến năm 2045. Bởi lẽ người em út của Trái Đất nằm xa
          Mặt Trời nhất nên có quỹ đạo cực lớn. Một năm ở đây dài bằng 165 năm
          Trái Đất nên một mùa cũng kéo dài hơn 4 thập kỷ.
        </Title>{" "}
        <Title level={4}>
          Các nhà khoa học đã nghiên cứu ánh sáng hồng ngoại phát ra từ tầng
          bình lưu của Sao Hải Vương, để rồi choáng váng nhận ra nó đang... lạnh
          dần sau gần 2 thập kỷ trải qua cái gọi là "mùa hè".
        </Title>{" "}
        <Title level={4}>
          Cụ thể, theo Science Alert, nhiệt độ trung bình của hành tinh này đã
          giảm khoảng 8 độ kể từ năm 2003 đến lần đo đạc tổng thể cuối cùng là
          năm 2018.
        </Title>
        <Title level={4}>
          Ngược lại, cực Nam của hành tinh lại ấm lên đáng kể, tăng tới 11 độ
          chỉ từ năm 2018 đến năm 2020.
        </Title>
        <Title level={4}>
          Hiện các tác giả vẫn chưa biết nguyên nhân chính xác của "mùa hè lạnh"
          và hiện tượng cực Nam bị nung nóng đột ngột. Họ cho rằng có thể do
          thay đổi hóa học phức tạp trong tầng bình lưu hoặc cả bầu khí quyển,
          hoặc các kiểu thời tiết ngẫu nhiên và phức tạp hơn bất kỳ hành tinh
          nào khác của hệ Mặt Trời.
        </Title>
        <Title level={4}>
          Nghiên cứu vẫn sẽ tiếp diễn bởi sao Hải Vương luôn là một mục tiêu hấp
          dẫn của giới thiên văn. Tuy nó lạnh và có vẻ chết chóc nhưng NASA nghi
          ngờ là có đại dương ngầm dưới vỏ băng của hành tinh này.
        </Title>
        <Title level={4}>
          Nghiên cứu vừa công bố trên tạp chí Planetary Science Journal.s
        </Title>
      </div>
    </div>
  );
}

export default DetailBody;
