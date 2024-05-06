import React from "react";
import { Button, Form, Input } from "antd";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

const SignInForm = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    const { email, password } = values;

    try {
      const response = await axios.post(
        "http://localhost:9000/api/v1/user/login",
        { email, password }
      );
      console.log(response.data, "send data to backend");
      if (response.data.success) {
        console.log("Login successful! Redirecting to home page...");
        alert("Login Success");
        navigate("/");
      } else {
        console.error("Login failed:", response.data.message);
        alert("Password or Email is invalid");
      }
    } catch (error) {
      console.error(error, "error while sending data to backend");
    }
  };

  return (
    <SignInFormContainer>
      <div>
        <SignInHeading>Sign In</SignInHeading>
      </div>

      <FormDiv>
        <StyledForm
          {...layout}
          name="nest-messages"
          validateMessages={validateMessages}
          onFinish={onFinish}
        >
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
              type="primary"
              htmlType="submit"
              style={{
                background: "rgb(255, 208, 23)",
                border: "none",
                color: "purple",
                fontWeight: "500",
              }}
            >
              Login
            </Button>
          </Form.Item>
        </StyledForm>
      </FormDiv>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "space-between",
          width: "30rem",
          margin: "0 auto",
        }}
      >
        <p>
          <span>
            <a href="">Forget Password</a>
          </span>
        </p>
        <p>
          Don't have an account?
          <span>
            <a style={{ color: "#ffd017", paddingLeft: "10px" }} href="/signup">
              SignUp
            </a>
          </span>
        </p>
      </div>
    </SignInFormContainer>
  );
};

export default SignInForm;

const SignInFormContainer = styled.div``;
const FormDiv = styled.div`
  display: flex;
  justify-content: center;
`;
const SignInHeading = styled.h2`
  text-align: center;
  font-weight: 400;
`;
const StyledForm = styled(Form)`
  width: 30rem;
`;
