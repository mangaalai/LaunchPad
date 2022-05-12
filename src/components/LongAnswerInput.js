import React from "react";
import styled from "styled-components";
import { useLongAnswerInput } from "react-google-forms-hooks";

const Textarea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  height: 10em;
  border-radius: 5px;
  padding: 1em;
  &:focus {
    border: none;
    outline: 2px solid #2b64e1;
  }
`;

export default function LongAnswerInput({ id, placeholder }) {
  const { register } = useLongAnswerInput(id);

  return (
    <div>
      <Textarea
        type="text"
        {...register()}
        placeholder={placeholder && placeholder}
      />
    </div>
  );
}
