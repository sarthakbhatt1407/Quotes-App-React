import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import OnlineQuote from "../components/OnlineQuote";
import Quote from "../components/Quote";
const AllQuoteBox = styled.div`
  padding: 0.8rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;
  overflow: auto;
  gap: 2rem;
  @media (max-width: 450px) {
    & h1 {
      font-size: 1.5rem;
    }
  }
  @media only screen and (min-width: 451px) and (max-width: 1020px) {
    & h1 {
      font-size: 1.7rem;
    }
  }
`;
const Loader = styled.div`
  border: 4px solid #f3f3f3; /* Light grey */
  border-top: 4px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const OnlineQuotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const arr = [];
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
    setIsLoading(false);
  };
  fetcher();
  return (
    <AllQuoteBox>
      <h1>Online Quotes</h1>
      {isLoading && <Loader></Loader>}
      {quotes.map((item) => {
        if (item.person) {
          return <OnlineQuote key={item.id} item={item} />;
        }
      })}
    </AllQuoteBox>
  );
};

export default OnlineQuotes;
