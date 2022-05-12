/* eslint-disable default-case */
import React from "react";
import { useState } from "react";

import {
  firstName,
  lastName,
  email,
  iOrgName,
  phoneNum,
  jobTitle,
  funRole,
  describeIndustry,
  inOrCorp,
  haveSchool,
  howManySchool,
  howManyLearners,
  howManyTeachers,
  whyRegister,
  whichProduct,
  howHelp,
} from "../utils/Fields";

import logo from "../images/logo.jpg";
import styled from "styled-components";
import DialogBox from "../components/DialogBox";
import CountryRegion from "../components/CountryRegion";

import { GoogleFormProvider, useGoogleForm } from "react-google-forms-hooks";
import form from "../script/form.json";

const Logo = styled.img`
  width: 80px;
  height: auto;
`;

const LogoText = styled.p`
  margin-top: -5px;
  font-weight: 700;
  font-size: 0.85rem;
`;
const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Divider = styled.div`
  border-bottom: 1px solid #999;
  width: 100%;
  max-width: 200px;
`;

const Title = styled.h3`
  font-weight: 700;
  font-size: 1.5rem;
  margin: 0;
  background: linear-gradient(
    90deg,
    #405de6 0%,
    rgba(253, 29, 29, 0.83) 99.99%,
    rgba(253, 29, 29, 0) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  margin-top: 0.5em;
`;

const Container = styled.div`
  width: 90%;
  max-width: 700px;
  margin: 0 auto;
`;

const Header = styled.header`
  padding: 3em 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Main = styled.main`
  background-color: #f0f8ff;
`;

const Form = styled.form`
  margin: 0 auto;
  padding: 50px 0;
`;

const FormSection = styled.div`
  background-color: white;
  padding: 1.5em;
  filter: drop-shadow(0 0 0.65rem #2b64e1);
  border-radius: 10px;
`;

const FormTitle = styled.h1`
  font-size: 2rem;
`;

const FormDescription = styled.p``;
const FormGroup = styled.h3`
  padding-bottom: 0.2em;
  border-bottom: 1px solid black;
  text-align: center;
  margin-top: 3em;
  margin-bottom: 2em;
  color: black;
  &:first-child {
    margin-top: 0;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  padding: 1em 2.5em;
  background-color: #2b64e1;
  border: none;
  border-radius: 5px;
  color: white;
  text-transform: uppercase;
`;

const InOneLine = styled.div`
  width: 100%;
  display: block;
  gap: 1em;
  @media (min-width: 600px) {
    display: flex;
  }
`;

const GroupDescription = styled.p``;

const Required = styled.span`
  color: red;
`;

const FormPage = () => {
  const [showDialogBox, setShowDialogBox] = useState(false);

  function handleShow() {
    setShowDialogBox((prev) => !prev);
  }

  const methods = useGoogleForm({ form });
  const onSubmit = async (data) => {
    console.log(">>> Here is the data", data);
    await methods.submitToGoogleForms(data);
    methods.reset();
    setShowDialogBox(true);
    // alert("Form submitted with success!");
  };

  // console.log(">>> Here are the errors!!!", methods.formState.errors);

  return (
    <>
      <Header>
        <LogoContainer>
          <Logo src={logo} alt="logo" />
          <LogoText>Hischool</LogoText>
        </LogoContainer>
        <Divider />
        <Title>LaunchPad</Title>
      </Header>
      <Main>
        <Container>
          <GoogleFormProvider {...methods}>
            <Form onSubmit={methods.handleSubmit(onSubmit)}>
              <FormTitle>Registration Form</FormTitle>
              <FormDescription>
                Please fill out the required fields(<Required>*</Required>)
                below and click on the "Submit" button to register.
              </FormDescription>
              <FormSection>
                <FormGroup>Personal information</FormGroup>
                <InOneLine>
                  {firstName}
                  {lastName}
                </InOneLine>
                <InOneLine>
                  {jobTitle}
                  {funRole}
                </InOneLine>
                <CountryRegion />
                <FormGroup>Contact information</FormGroup>
                {email}
                {phoneNum}
                <FormGroup>Business information</FormGroup>
                {iOrgName}
                {describeIndustry}
                {inOrCorp}
                <InOneLine>
                  {haveSchool}
                  {howManySchool}
                </InOneLine>
                <InOneLine>
                  {howManyLearners}
                  {howManyTeachers}
                </InOneLine>
                {whyRegister}
                {whichProduct}
                {howHelp}

                <SubmitButton type="submit">Submit</SubmitButton>
              </FormSection>
            </Form>
          </GoogleFormProvider>
          <DialogBox show={showDialogBox} handleShow={handleShow} />
        </Container>
      </Main>
    </>
  );
};

export default FormPage;
