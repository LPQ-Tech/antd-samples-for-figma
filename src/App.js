import React from "react";
import { Button, ConfigProvider, theme, Card, Row, Col } from "antd";
import "antd/dist/reset.css";

const App = () => (
  <ConfigProvider
    theme={{
      algorithm: theme.darkAlgorithm,
    }}
  >
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          <Button>Click me</Button>
          <Button type="ghost">Gosht</Button>
          <Button type="text">Text</Button>
          <Button disabled>Disabled</Button>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
        <Button type="primary" size="large">Click me</Button>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
    </Row>
  </ConfigProvider>
);

export default App;
