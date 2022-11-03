import React from "react";
import styled from "styled-components";
import QuoteForm from "../components/QuoteForm";
const AddQuoteBox = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  height: 80vh;
  justify-content: start;
  align-items: center;
`;

const AddQuote = () => {
  return (
    <AddQuoteBox>
      <h2>Add a new quote</h2>
      <QuoteForm />
    </AddQuoteBox>
  );
};

export default AddQuote;
