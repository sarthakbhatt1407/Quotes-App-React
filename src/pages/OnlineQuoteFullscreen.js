import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import bgImg from "../assets/quoteBg.jpg";
const QuoteFullBox = styled.div`
  width: 100%;
  height: 80vh;
  background: url(${bgImg});
  background-repeat: no-repeat;
  background-position: top;
  background-size: contain;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const QuoteLine = styled.p`
  font-weight: bold;
  font-size: 23px;
  width: 40%;
  margin-left: 7rem;
  /* padding: 0 0 0 7rem; */
  letter-spacing: 0.08rem;
  font-style: italic;
`;
const QuoteAutor = styled.p`
  font-weight: bold;
  font-size: 23px;
  color: red;
  letter-spacing: 0.08rem;
  font-style: italic;
`;

const OnlineQuoteFullscreen = () => {
  const [quotes, setQuotes] = useState([]);
  const arr = [];

  useEffect(() => {
    const fetcher = async () => {
      let id = 0;
      const resp = await fetch("https://type.fit/api/quotes");
      const data = await resp.json();

      for (const item of data) {
        const field = {
          person: item.author,
          quoteLine: item.text,
          id: id + 1,
        };
        arr.push(field);
        id++;
      }
      setQuotes(arr);
    };
    fetcher();
  }, []);
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

export default OnlineQuoteFullscreen;
