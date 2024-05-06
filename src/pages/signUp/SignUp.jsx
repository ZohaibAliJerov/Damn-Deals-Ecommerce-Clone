import React from "react";
import Logo from "../../Components/auth/logo/Logo";
import SignUpForm from "../../Components/auth/form/Form";
import styled from "styled-components";

const SignUp = () => {
  return (
    <SignUpPageContainer>
      <Logo />
      <SignUpForm />
    </SignUpPageContainer>
  );
};

export default SignUp;

const SignUpPageContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0px 10px;
`;
