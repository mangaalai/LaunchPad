import { useState } from "react";
import styled from "styled-components";
import { useShortAnswerInput } from "react-google-forms-hooks";
import Select from "react-select";
import countryData from "./country.json";
import countryName from "country-region";

const QuestionContainer = styled.div`
  margin-bottom: 20px;
`;

const QuestionLabel = styled.h3`
  margin-bottom: 10px;
`;

function ReactSelect() {
  const { register: countryRe } = useShortAnswerInput("1722100055");
  const { register: regionRe } = useShortAnswerInput("1139372258");
  const [region, setRegion] = useState([]);
  const [country, setCountry] = useState(null);

  const countries = countryData.map((el) => ({
    value: el.countryName,
    label: el.countryName,
  }));

  function handleOnChange() {
    setCountry(country);
    setRegion(
      countryName(country).regions.map((el) => ({
        value: el.name,
        label: el.name,
      }))
    );
  }

  return (
    <>
      <QuestionContainer>
        <QuestionLabel htmlFor="country">Country:</QuestionLabel>
        <Select
          defaultValue={country}
          id="country"
          {...countryRe()}
          onChange={handleOnChange}
          options={countries}
        />
      </QuestionContainer>
      <QuestionContainer>
        <QuestionLabel htmlFor="region">Region:</QuestionLabel>
        <Select
          id="region"
          {...regionRe()}
          placeholder="Select your region"
          // defaultValue={region}
          options={region}
        />
      </QuestionContainer>
    </>
  );
}

export default ReactSelect;
