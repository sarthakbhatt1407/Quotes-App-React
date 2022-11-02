import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import OnlineQuote from "../components/OnlineQuote";
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

const OnlineQuotes = () => {
  const [quotes, setQuotes] = useState([]);
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
  };
  fetcher();
  return (
    <AllQuoteBox>
      <h1>Online Quotes</h1>
      {quotes.length < 1 && <p>Empty</p>}
      {quotes.map((item) => {
        if (item.person) {
          return <OnlineQuote key={item.id} item={item} />;
        }
      })}
    </AllQuoteBox>
  );
};

export default OnlineQuotes;
