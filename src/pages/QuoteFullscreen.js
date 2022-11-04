import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import bgImg from "../assets/quoteBg.jpg";
const QuoteFullBox = styled.div`
  width: 100%;
  height: 89vh;

  display: flex;
  flex-direction: column;

  justify-content: space-evenly;
  background-color: #ffedea;
  color: black;
  align-items: center;
  @media (max-width: 650px) {
  }
`;

const QuoteLine = styled.p`
  font-weight: bold;
  font-size: 23px;
  width: 90%;
  padding: 1rem 0;
  line-height: 1.8rem;
  text-align: center;
  letter-spacing: 0.12rem;
  font-style: italic;
  @media (max-width: 650px) {
    font-size: 1.2rem;
  }
`;
const QuoteAutor = styled.p`
  font-weight: bold;
  font-size: 23px;
  color: red;
  letter-spacing: 0.08rem;
  font-style: italic;
  @media (max-width: 650px) {
    font-size: 1.2rem;
  }
`;

const QuoteFullscreen = () => {
  const quotes = useSelector((state) => state.items);

  const location = useParams();
  const quoteId = parseInt(location.quoteId);

  return (
    <Fragment>
      {quotes.map((item) => {
        if (item.id === quoteId) {
          return (
            <QuoteFullBox key={item.id}>
              <QuoteLine>{`"${item.quoteLine}"`}</QuoteLine>
              <QuoteAutor>{item.person}</QuoteAutor>
            </QuoteFullBox>
          );
        }
      })}
    </Fragment>
  );
};

export default QuoteFullscreen;
