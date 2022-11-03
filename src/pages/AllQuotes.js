import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
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

const AllQuotes = () => {
  const quotes = useSelector((state) => state.items);

  const dispatch = useDispatch();
  let arr = [];
  useEffect(() => {
    const fetcher = async () => {
      const resp = await fetch(
        "https://quote-app-react-default-rtdb.firebaseio.com/quotes.json"
      );
      const data = await resp.json();

      for (const item in data) {
        const fields = {
          id: item,
          person: data[item]["person"],
          quoteLine: data[item]["quoteLine"],
        };
        arr.push(fields);
      }
      for (const item of arr) {
        dispatch({ type: "add", item: { ...item } });
      }
    };
    fetcher();
  });

  return (
    <AllQuoteBox>
      <h1>Your Quotes</h1>
      {quotes.length < 1 && <p>Loading</p>}
      {quotes.map((item) => {
        return <Quote key={item.id} item={item} />;
      })}
    </AllQuoteBox>
  );
};

export default AllQuotes;
