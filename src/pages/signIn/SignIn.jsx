import React from "react";
import Logo from "../../Components/auth/logo/Logo";
import SigninForm from "../../Components/auth/signInFrom/SignInForm";
import styled from "styled-components";
const SignIn = () => {
  return (
    <SignInPageContainer>
      <Logo />
      <SigninForm />
    </SignInPageContainer>
  );
};

export default SignIn;

const SignInPageContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0px 10px;
`;
