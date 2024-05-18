import React, { useState, useEffect } from 'react';
import Calculator from '../Views/Calculator';

export default {
  title: 'Calculator/Calculator',
  component: Calculator,
};

const CalculatorWithInitialState = ({ initialState }) => {
  const [result, setResult] = useState(initialState);

  const handleKeyDown = (e) => {
    const key = e.key;
    if ((key >= '0' && key <= '9') || key === '+' || key === '-' || key === '*' || key === '/' || key === '%') {
      setResult(prevResult => {
        const newResult = prevResult.concat(key);
        if (newResult.length <= 9) {
          return newResult;
        }
        return prevResult;
      });
    } else if (key === 'Enter') {
      e.preventDefault();
      calculate();
    } else if (key === 'Escape') {
      clear();
    } else if (key === 'Backspace') {
      setResult(prevResult => prevResult.slice(0, -1));
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleClick = (e) => {
    if (result === "Error") {
      setResult("");
    }
    const newResult = result.concat(e.target.name);
    if (newResult.length <= 9) {
      setResult(newResult);
    }
  };

  const clear = () => {
    setResult("");
  };

  const calculate = () => {
    try {
      let res = eval(result).toString();
      if (res.length > 9) {
        res = res.substring(0, 9);
      }
      setResult(res);
    } catch (err) {
      setResult("Error");
    }
  };

  const toggleSign = () => {
    let res = result.startsWith("-") ? result.substring(1) : "-" + result;
    if (res.length > 9) {
      res = res.substring(0, 9);
    }
    setResult(res);
  };

  return (
    <div className="calculator">
      <div className="display" data-testid="result">{result}</div>
      <div className="buttons">
        <div className="numbers">
          {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].map((num) => (
            <button
              key={num}
              name={num}
              onClick={handleClick}
              className=""
            >
              {num}
            </button>
          ))}
        </div>
        <div className="operations">
          {['+', '-', '*', '/', '%'].map((op) => (
            <button
              key={op}
              name={op}
              onClick={handleClick}
              className=""
            >
              {op}
            </button>
          ))}
        </div>
      </div>
      <div className="controls">
        <button onClick={clear} className="">Clear</button>
        <button onClick={toggleSign} className="">+/-</button>
        <button onClick={calculate} className="">=</button>
      </div>
    </div>
  );
};

export const DefaultCalculator = () => <Calculator />;

export const WithInitialValue = () => <CalculatorWithInitialState initialState="123" />;

export const MaxDigitsReached = () => <CalculatorWithInitialState initialState="123456789" />;

export const ErrorState = () => <CalculatorWithInitialState initialState="Error" />;

export const CalculationPerformed = () => {
  const [result, setResult] = useState("1+2");
  useEffect(() => {
    setTimeout(() => {
      setResult(eval(result).toString());
    }, 1000);
  }, []);

  return <CalculatorWithInitialState initialState={result} />;
};
