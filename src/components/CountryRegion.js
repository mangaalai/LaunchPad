import { useState } from "react";
import styled from "styled-components";
import { useShortAnswerInput } from "react-google-forms-hooks";
import countryData from "./country.json";
import countryName from "country-region";

const QuestionContainer = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;

const QuestionLabel = styled.h3`
  margin-bottom: 0.3em;
  color: #6b6b6b;
  font-size: 0.95rem;
`;

const Input = styled.input`
  padding: 1em;
  width: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid #6b6b6b;
  &:focus {
    border: none;
    outline: #2b64e1 solid 2px;
  }
`;

const InOneLine = styled.div`
  width: 100%;
  display: block;
  gap: 1em;
  @media (min-width: 600px) {
    display: flex;
  }
`;

const Required = styled.span`
  color: red;
`;

function CountryRegion() {
  const { register: countryRe } = useShortAnswerInput("1722100055");
  const { register: regionRe } = useShortAnswerInput("1139372258");
  const [region, setRegion] = useState([]);

  const countries = countryData.map((el) => el.countryName);

  const countriesEl = countries.map((country) => (
    <option value={country} key={country} />
  ));

  function handleOnChange(event) {
    const result = event.target.value;
    if (countries.includes(result)) {
      setRegion(countryName(result).regions.map((el) => el.name));
    }
  }

  return (
    <>
      <InOneLine>
        <QuestionContainer>
          <QuestionLabel htmlFor="country">
            Country<Required>*</Required>
          </QuestionLabel>
          <Input
            list="country-list"
            id="country"
            {...countryRe()}
            placeholder="Select country where your business is located"
            autoComplete="off"
            onChange={handleOnChange}
            required
          />
          <datalist id="country-list">{countriesEl}</datalist>
        </QuestionContainer>
        <QuestionContainer>
          <QuestionLabel htmlFor="region">
            Region<Required>*</Required>
          </QuestionLabel>
          <Input
            list="region-list"
            id="region"
            {...regionRe()}
            placeholder="Select region where your business is located"
            autoComplete="off"
            required
          />
          <datalist id="region-list">
            {region.length > 0 &&
              region.map((el, index) => (
                <option key={index.toString()} value={el} />
              ))}
          </datalist>
        </QuestionContainer>
      </InOneLine>
    </>
  );
}

export default CountryRegion;
