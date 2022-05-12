import React from "react";
import styled from "styled-components";

import { useShortAnswerInput } from "react-google-forms-hooks";

const Input = styled.input`
  box-sizing: border-box;
  padding: 1em;
  width: 100%;

  border-radius: 5px;
  border: 1px solid #6b6b6b;
  outline: none;
  appearance: none;
  &:focus {
    border: none;
    outline: #2b64e1 solid 2px;
  }
`;

export default function ShortAnswerInput({ id, placeholder, required }) {
  const { register } = useShortAnswerInput(id);
  return (
    <div>
      <Input
        type="text"
        {...register()}
        autoComplete="off"
        placeholder={placeholder && placeholder}
        required={required}
      />
    </div>
  );
}
