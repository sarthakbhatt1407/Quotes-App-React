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
  @media (max-width: 450px) {
    padding: 1rem 0.7rem;
    width: 90%;
  }
  @media only screen and (min-width: 451px) and (max-width: 1020px) {
    width: 80%;
  }
`;

const QuotePara = styled.p`
  font-size: 1.2rem;
  letter-spacing: 0.09rem;
  font-style: italic;
  text-transform: capitalize;
  @media (max-width: 450px) {
    font-size: 1.05rem;
    letter-spacing: 0.04rem;
  }
  @media only screen and (min-width: 451px) and (max-width: 1020px) {
    font-size: 1.1rem;
    letter-spacing: 0.06rem;
  }
`;
const QuoteCredit = styled.p`
  font-weight: bold;
  text-transform: capitalize;
  @media (max-width: 450px) {
    font-weight: 600;
  }
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
  @media (max-width: 450px) {
    padding: 0.2rem 0.4rem;
    font-size: 13px;
    margin-bottom: 0.5rem;
  }
  @media only screen and (min-width: 451px) and (max-width: 1020px) {
    padding: 0.2rem 0.4rem;
    font-size: 14px;
    margin-bottom: 0.6rem;
  }
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
