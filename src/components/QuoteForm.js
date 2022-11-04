import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
const Form = styled.form`
  padding: 3rem 8rem;
  width: 40%;
  border-radius: 0.5rem;
  background-color: rgb(252, 247, 244);
  @media (max-width: 650px) {
    width: 55%;
    padding: 3rem 3rem;
  }
`;

const InpLabBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  background-color: #ffffff;
  border: 1px solid #c6c6c6;
  padding: 0.5rem 0.4rem;
  display: block;
  border-radius: 0.3rem;
  margin: 0.4rem 0;
`;
const TextArea = styled.textarea`
  background-color: #ffffff;
  border: 1px solid #c6c6c6;
  padding: 0.5rem 0.4rem;
  display: block;
  border-radius: 0.3rem;
  margin: 0.4rem 0;
`;
const Label = styled.label`
  color: black;
  font-weight: bold;
  font-size: 1.2rem;
  letter-spacing: 0.06rem;
`;
const Button = styled.button`
  margin-top: 1.2rem;
  padding: 0.4rem 0.6rem;
  border: none;
  background-color: #f54749;
  border-radius: 0.3rem;
  color: white;
  font-size: 16px;
`;

const QuoteForm = () => {
  const defaultInpFields = {
    quoteLine: "",
    person: "",
  };
  const [inputFields, setInputFields] = useState(defaultInpFields);

  const onChangeHandler = (e) => {
    const field = e.target.id;
    const value = e.target.value;
    if (value.trim().length > 0) {
      const element = document.getElementById(field);
      element.style.border = "none";
      element.placeholder = "";
    }
    setInputFields({ ...inputFields, [field]: value });
  };

  const onBlurHandler = (e) => {
    const field = e.target.id;
    const value = e.target.value;
    if (value.trim().length < 1) {
      const element = document.getElementById(field);
      element.style.border = "2px solid red";
      if (field == "quoteLine") {
        element.placeholder = "Enter Valid Quote";
      } else if (field == "person") {
        element.placeholder = "Enter Valid Name";
      }
    }
  };

  const submitHandler = () => {
    const quoteLine = document.getElementById("quoteLine").value;
    const person = document.getElementById("person").value;
    if (quoteLine.trim().length > 0 && person.trim().length > 0) {
      return true;
    } else {
      return false;
    }
  };
  const dispatch = useDispatch();
  const history = useHistory();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (submitHandler()) {
      const fetcher = async () => {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(inputFields),
        };
        const resp = await fetch(
          "https://quote-app-react-default-rtdb.firebaseio.com/quotes.json",
          requestOptions
        );
      };
      fetcher();
      dispatch({ type: "add", item: { ...inputFields } });

      setInputFields(defaultInpFields);

      history.push("/all-quotes");
    } else {
      alert("wrong input");
    }
  };
  return (
    <Fragment>
      <Form>
        <InpLabBox>
          <Label htmlFor="quoteLine">Quote</Label>

          <TextArea
            rows={5}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            type="text"
            id="quoteLine"
            value={inputFields.quoteLine}
          />
        </InpLabBox>
        <InpLabBox>
          <Label htmlFor="person">Author</Label>
          <Input
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            type="text"
            id="person"
            value={inputFields.person}
          />
        </InpLabBox>
        <Button onClick={onSubmitHandler}>Submit</Button>
      </Form>
    </Fragment>
  );
};

export default QuoteForm;
