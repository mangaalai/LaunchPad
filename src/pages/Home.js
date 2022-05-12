import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/logo.jpg";

const TopSection = styled.section`
  box-sizing: border-box;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;

const BottomSection = styled.section`
  box-sizing: border-box;
  height: 40vh;
  background-color: #f0f8ff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HomeTitle = styled.h1`
  display: inline-block;
  font-size: 4rem;
  letter-spacing: -2px;
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
  margin-bottom: 1em;
`;

const Button = styled.button`
  border: none;
  background-color: #2b64e1;
  color: white;
  font-family: "Inter", sans-serif;
  font-size: 1.2rem;
  padding: 1em 2.5em;
  border-radius: 999px;
  &:hover {
    background-color: #1e57d3;
    cursor: pointer;
  }
`;

const SubTitle = styled.h3`
  font-size: 1.6rem;
  color: #444950;
  margin: 0;
  margin-bottom: 0.5em;
`;

const Description = styled.p`
  color: #444950;
  max-width: 600px;
  text-align: center;
  font-weight: 500;
  margin: 0;
`;

const Logo = styled.img`
  width: 75px;
  height: auto;
`;

function Home() {
  return (
    <div>
      <TopSection>
        <TopContainer>
          <Logo src={logo} alt="logo" />
          <HomeTitle>LaunchPad</HomeTitle>
          <SubTitle>Create your online school</SubTitle>
          <Description>
            If you want to create an online school, click on the register button
            and submit the form. This service isn’t available right now. After
            you submit the form, we will contact you as soon as our service gets
            available.
          </Description>
        </TopContainer>
      </TopSection>
      <BottomSection>
        <Link to="/form-page">
          <Button>Register</Button>
        </Link>
      </BottomSection>
    </div>
  );
}

export default Home;
