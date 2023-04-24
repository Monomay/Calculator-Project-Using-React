import React from "react";
import { useState, useEffect } from "react";
import { NumericFormat } from "react-number-format";
import "./Calculator.css";

export default function Calculator() {
  const [prestate, setPrestate] = useState("");
  const [curstate, setCurstate] = useState("");
  const [input, setInput] = useState("0");
  const [operators, setOperators] = useState(null);
  const [total, setTotal] = useState(false);

  const reset = () => {
    setPrestate("");
    setCurstate("");
    setInput("0");
  };

  const percent = () => {
    prestate ? setCurstate(String(parseFloat(curstate) / 100 *
     prestate)) : setCurstate(String(parseFloat(curstate) / 100));
  };

  const plusMinus = () => {
    if(curstate.charAt(0) === "-"){
      setInput(curstate.substring(1));
    } else {
      setCurstate("-" + curstate);
    }
  };

  const operator = (e) => {
    setTotal(false);
    setOperators(e.target.innerText);
    if (curstate === "") 
    return;

    if (prestate !== "") {
      euals();
    }
    setPrestate(curstate);
    setCurstate("");
  };

  const inputNumber = (e) => {
    if (curstate.includes(".") && e.target.innerText === ".") return;

    if (total) {
      setPrestate("");
    }

    curstate
      ? setCurstate((pre) => pre + e.target.innerText)
      : setCurstate(e.target.innerText);
    setTotal(false);
  };

  useEffect(() => {
    setInput(curstate);
  }, [curstate]);

  useEffect(() => {
    setInput("0");
  }, []);

  const euals = (e) => {
    if (e?.target.innerText === "=") { 
      setTotal(true);
  };

  let cal;
  switch (operators) {
    case "÷":
      cal = String(parseFloat(prestate) / parseFloat(curstate));
      break;

    case "x":
      cal = String(parseFloat(prestate) * parseFloat(curstate));
      break;

    case "-":
      cal = String(parseFloat(prestate) - parseFloat(curstate));
      break;
    case "+":
      cal = String(parseFloat(prestate) + parseFloat(curstate));
      break;
    default:
      return;
  }
  setInput("");
  setPrestate(cal);
  setCurstate("");
}

  return (
/*-------------- Main Container-------------*/
    <div className="container">
      <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="circle3"></div>
      <div className="wrapper">
{ /* -----------------------screen---------------------------- */ }
        <div className="screen">
{/*--------------------------input------------------------*/}
          {input !== "" || input === "0" ? (
            <NumericFormat
              value={input}
              displayType={"text"}
              thousandSeparator={true}
            />
          ) : (
            <NumericFormat value={prestate}
            displayType={'text '}
            thousandSeparator={true}
            />
          )}
        </div>
{/*-----------------------------------Button------------------------*/}
        <div className="btn light-gray" onClick={reset}>
          C
        </div>
        <div className="btn light-gray" onClick={percent}>
          %
        </div>
        <div className="btn light-gray" onClick={plusMinus}>
          +/-
        </div>
        <div className="btn orange" onClick={operator}>
          ÷
        </div>
        <div className="btn light-gray" onClick={inputNumber}>
          7
        </div>
        <div className="btn light-gray" onClick={inputNumber}>
          8
        </div>
        <div className="btn light-gray" onClick={inputNumber}>
          9
        </div>
        <div className="btn orange" onClick={operator}>
          x
        </div>
        <div className="btn light-gray" onClick={inputNumber}>
          4
        </div>
        <div className="btn light-gray" onClick={inputNumber}>
          5
        </div>
        <div className="btn light-gray" onClick={inputNumber}>
          6
        </div>
        <div className="btn orange" onClick={operator}>
          -
        </div>
        <div className="btn light-gray" onClick={inputNumber}>
          1
        </div>
        <div className="btn light-gray" onClick={inputNumber}>
          2
        </div>
        <div className="btn light-gray" onClick={inputNumber}>
          3
        </div>
        <div className="btn orange" onClick={operator}>
          +
        </div>
        <div className="btn zero" onClick={inputNumber}>
          0
        </div>
        <div className="btn light-gray" onClick={inputNumber}>
          .
        </div>
        <div className="btn orange" onClick={euals}>
          =
        </div>
      </div>
    </div>
  );
}
