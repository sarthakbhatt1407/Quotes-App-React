import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Quote from "../components/Quote";
const AllQuoteBox = styled.div`
  /* background-color: red; */
  padding: 0.8rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;
  overflow: auto;
  gap: 2rem;
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
  }, []);

  return (
    <AllQuoteBox>
      <h1>Your Quotes</h1>
      {quotes.length < 1 && <p>Empty</p>}
      {quotes.map((item) => {
        return <Quote key={item.id} item={item} />;
      })}
    </AllQuoteBox>
  );
};

export default AllQuotes;
