import React from "react";
import { useSelector } from "react-redux";
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
  const items = useSelector((state) => state.items);
  return (
    <AddQuoteBox>
      <h2>Add a new quote</h2>
      <QuoteForm />
    </AddQuoteBox>
  );
};

export default AddQuote;
