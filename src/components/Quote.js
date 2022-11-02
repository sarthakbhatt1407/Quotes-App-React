import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
const QuoteBox = styled.div`
  background-color: #e2d5cc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.4rem;
  width: 50%;
  position: relative;
  padding: 0.2rem 3rem;
`;
const QuotePara = styled.p`
  font-size: 1.2rem;
  letter-spacing: 0.09rem;
  font-style: italic;
  text-transform: capitalize;
`;
const QuoteCredit = styled.p`
  font-weight: bold;
  text-transform: capitalize;
`;
const CrossSymbol = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  top: 0;
  right: 0;
`;
const Button = styled.button`
  padding: 0.4rem 0.6rem;
  margin-bottom: 1rem;
  border: none;
  background-color: #f54749;
  border-radius: 0.3rem;
  color: white;
  font-size: 16px;
`;

const Quote = (props) => {
  const { quoteLine, id, person } = props.item;
  const dispatch = useDispatch();
  const onClickHandler = () => {
    dispatch({ type: "remove", item: props.item });
  };
  return (
    <QuoteBox>
      <CrossSymbol onClick={onClickHandler}>&#9587;</CrossSymbol>
      <QuotePara>{`"${quoteLine}"`}</QuotePara>
      <QuoteCredit>~ {`${person}`}</QuoteCredit>
      <Link to={`/all-quotes/${id}`}>
        <Button>Fullscreen</Button>
      </Link>
    </QuoteBox>
  );
};

export default Quote;
