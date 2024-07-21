import { Row, Col, Button, Select, Input } from "antd";
const { Option } = Select;

const ContentAreaHeader = () => {
  return (
    <Row
      justify="space-between"
      style={{ backgroundColor: "#f0f0f0", height: "50px", padding: "10px", marginBottom: "10px" }}
    >
      <Col>
        <Select defaultValue="option1">
          <Option value="option1">Option 1</Option>
          <Option value="option2">Option 2</Option>
        </Select>
      </Col>
      <Col>
        <Row gutter={16}>
          <Col>
            <Button>Button</Button>
          </Col>
          <Col>
            <Input.Search allowClear />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ContentAreaHeader;
