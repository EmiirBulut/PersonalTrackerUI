import React from "react";
import { Carousel, Col, Image, Row, Typography } from "antd";

const contentStyle: React.CSSProperties = {
  margin: 0,
  marginBottom: "100px",
  height: "auto",
  color: "#fff",
  lineHeight: "auto",
  textAlign: "center",
  background: "#364d79",
};

const { Paragraph: Text } = Typography;

const Slider: React.FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <Carousel afterChange={onChange}>
      <div>
        <Row style={contentStyle}>
          <Col flex={2}>
            <Image
              width={500}
              style={{ margin: "55px" }}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              preview={false}
            />
          </Col>
          <Col flex={3} style={{ display: "grid", placeItems: "center" }}>
            <Text style={{ color: "white" }}>Text for image 1</Text>
          </Col>
        </Row>
      </div>
      <div>
        <Row style={contentStyle}>
          <Col flex={2}>
            <Image
              width={500}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              style={{ margin: "55px" }}
              preview={false}
            />
          </Col>
          <Col flex={3} style={{ display: "grid", placeItems: "center" }}>
            <Text>Text for image 2</Text>
          </Col>
        </Row>
      </div>
    </Carousel>
  );
};

export default Slider;
