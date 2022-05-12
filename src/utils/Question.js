/* eslint-disable default-case */
import styled from "styled-components";

import CheckboxInput from "../components/CheckboxInput";
import ShortAnswerInput from "../components/ShortAnswerInput";
import LongAnswerInput from "../components/LongAnswerInput";
import DropdownInput from "../components/DropdownInput";

import form from "../script/form.json";

const QuestionContainer = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;

const QuestionLabel = styled.h3`
  margin-bottom: 0.3em;
  color: #6b6b6b;
  font-size: 0.95rem;
`;

const Required = styled.span`
  color: red;
`;

const Questions = ({ id, placeholder }) => {
  const foundField = form.fields.find((el) => el.id === id);
  let questionInput = null;
  switch (foundField.type) {
    case "CHECKBOX":
      questionInput = (
        <CheckboxInput
          id={id}
          placeholder={placeholder}
          required={foundField.required}
        />
      );
      break;
    case "SHORT_ANSWER":
      questionInput = (
        <ShortAnswerInput
          id={id}
          placeholder={placeholder}
          required={foundField.required}
        />
      );
      break;
    case "LONG_ANSWER":
      questionInput = (
        <LongAnswerInput
          id={id}
          placeholder={placeholder}
          required={foundField.required}
        />
      );
      break;
    case "DROPDOWN":
      questionInput = (
        <DropdownInput
          id={id}
          label={foundField.label}
          placeholder={placeholder}
          required={foundField.required}
        />
      );
      break;
  }

  return (
    <QuestionContainer>
      <QuestionLabel>
        {foundField.label}
        {foundField.required && <Required>*</Required>}
      </QuestionLabel>
      {questionInput}
    </QuestionContainer>
  );
};

export default Questions;
