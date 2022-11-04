import React from "react";
import styled from "styled-components";
import QuoteForm from "../components/QuoteForm";
const AddQuoteBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  justify-content: start;
  align-items: center;
  @media (max-width: 650px) {
    h2 {
      font-size: 1.2rem;
    }
  }
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
