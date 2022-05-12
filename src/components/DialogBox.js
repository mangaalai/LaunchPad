import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  font-family: "Inter", sans-serif;
  padding: 1em 2.5em;
  border: none;
  background-color: #2b64e1;
  color: white;
  border-radius: 5px;
  text-transform: uppercase;
  &:hover {
    background-color: #1e57d3;
    cursor: pointer;
  }
`;

const Modal = styled.div`
  box-sizing: box-model;
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 1em;
  width: 500px;
  border-radius: 15px;
`;

const Title = styled.h3`
  color: #2b64e1;
  max-width: 450px;
  margin-bottom: 2em;
`;

const Layer = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: #2b64e1;
  font-size: 0.95rem;
  margin-top: 0.5em;
`;

function DialogBox({ show, handleShow }) {
  if (show) {
    return (
      <Layer>
        <Modal>
          <Title>
            Your request is successfully submitted. We will contact you soon.
          </Title>
          <Link to="/">
            <Button>Done</Button>
          </Link>
          <StyledLink to="/form-page" onClick={() => handleShow()}>
            Retake survey
          </StyledLink>
        </Modal>
      </Layer>
    );
  }
}

export default DialogBox;
