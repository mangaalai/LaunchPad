import React from "react";
import styled from "styled-components";
import { useDropdownInput } from "react-google-forms-hooks";

const Select = styled.select`
  padding: 1em;
  width: 100%;
  border-radius: 5px;
  &:focus {
    border: none;
    outline: 2px solid #2b64e1;
    color: black;
  }
  color: gray;
`;

const StyledParagraph = styled.p`
  font-size: 2rem;
`;

export default function DropdownInput({ id, placeholder, required }) {
  const { register, options } = useDropdownInput(id);

  return (
    <div>
      <Select {...register()} required={required}>
        <option value="" selected>
          {placeholder}
        </option>
        {options.map((o) => {
          return (
            <option key={o.label} value={o.label}>
              <StyledParagraph>{o.label}</StyledParagraph>
            </option>
          );
        })}
      </Select>
    </div>
  );
}
