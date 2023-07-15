
import React from 'react';
import { Button, Form, Input, InputNumber } from 'antd';
import { InputImage } from './InputImage';

const onFinishSucceful = (values) => {
  console.log('Success:', values);
};
const onFinishFailedDefault = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

export default function OurForm({title='', onFinish=onFinishSucceful, onFinishFailed=onFinishFailedDefault}) {
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <h2>{title}</h2>
      {/* <Form.Item
        label="Country flag"
        name="flags"
        rules={[
          {
            required: true,
            message: "Please input your Country flag!",
          },
        ]}
      >
        <InputImage />
      </Form.Item> */}
      <Form.Item
        label="Country name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input your Country name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Capital"
        name="capital"
        rules={[
          {
            required: true,
            message: "Please input your Capital!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Region"
        name="region"
        rules={[
          {
            required: true,
            message: "Please input your Region!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Population"
        name="population"
        rules={[
          {
            required: true,
            message: "Please input your Population!",
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        label="Country Position : x "
        name="x"
        rules={[
          {
            required: true,
            message: "Please input your Country Position!",
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        label="Country Position : y "
        name="y"
        rules={[
          {
            required: true,
            message: "Please input your Country Position!",
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
