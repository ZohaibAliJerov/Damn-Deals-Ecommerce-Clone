import React from "react";
import { Button, Form, Input } from "antd";
import styled from "styled-components";
import axios from "axios";

const layout = {
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 24,
  },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
  },
};

const SignUpForm = () => {
  const onFinish = async (values) => {
    const { name, lname, email, password } = values;

    try {
      const response = await axios.post(
        "http://localhost:9000/api/v1/user/register",
        { name, lname, email, password }
      );
      console.log(response.data, "send data to backend");
    } catch (error) {
      console.error(error, "error while sending data to backend");
    }
  };

  return (
    <SignUpFormContainer>
      <div>
        <SignUpHeading>Sign Up</SignUpHeading>
      </div>

      <FormDiv>
        <StyledForm
          {...layout}
          name="nest-messages"
          validateMessages={validateMessages}
          onFinish={onFinish}
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="lname" label="Last Name">
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                type: "email",
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              ...layout.wrapperCol,
              offset: 0,
            }}
          >
            <Button
              htmlType="submit"
              style={{
                background: "rgb(255, 208, 23)",
                border: "none",
                color: "purple",
                fontWeight: "500",
              }}
            >
              Register
            </Button>
          </Form.Item>
        </StyledForm>
      </FormDiv>
      <div style={{ width: "30rem", margin: "0 auto" }}>
        <p style={{ wordSpacing: "6px" }}>
          Already have an account?
          <span>
            <a style={{ color: "#ffd017", paddingLeft: "10px" }} href="/signin">
              SignIn
            </a>
          </span>
        </p>
      </div>
    </SignUpFormContainer>
  );
};

export default SignUpForm;

const SignUpFormContainer = styled.div``;
const FormDiv = styled.div`
  display: flex;
  justify-content: center;
`;
const SignUpHeading = styled.h2`
  text-align: center;
  font-weight: 400;
`;
const StyledForm = styled(Form)`
  width: 30rem;
`;
