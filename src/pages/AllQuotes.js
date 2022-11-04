import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Quote from "../components/Quote";
const AllQuoteBox = styled.div`
  padding: 0.8rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 89vh;
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

const AllQuotes = () => {
  const quotes = useSelector((state) => state.items);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetcher = () => {
      if (quotes.length > 0) {
        localStorage.setItem("qoutes", JSON.stringify(quotes));
      }
      const localArr = JSON.parse(localStorage.getItem("qoutes"));

      if (localArr) {
        for (const item of localArr) {
          dispatch({ type: "add", item: { ...item } });
        }
      }
    };
    fetcher();
  }, [quotes]);

  return (
    <AllQuoteBox>
      <h1>Your Quotes</h1>
      {quotes.length < 1 && <p>No quotes</p>}

      {quotes.map((item) => {
        return <Quote key={item.id} item={item} />;
      })}
    </AllQuoteBox>
  );
};

export default AllQuotes;
