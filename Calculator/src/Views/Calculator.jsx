import React, { useState, useEffect } from "react";
import "./calculator.css";

const Calculator = () => {
    const [result, setResult] = useState("");
    const [activeKey, setActiveKey] = useState(null);

    useEffect(() => {
        const handleKeyDown = (e) => {
            const key = e.key;
            setActiveKey(key);
        
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
        
            setTimeout(() => setActiveKey(null), 200);
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [result]);

    const handleClick = (e) => {
        setActiveKey(null);
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
            <div className="display">{result}</div>
            <div className="buttons">
                <div className="numbers">
                    {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].map((num) => (
                        <button
                            key={num}
                            name={num}
                            onClick={handleClick}
                            className={activeKey === num ? 'active' : ''}
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
                            className={activeKey === op ? 'active' : ''}
                        >
                            {op}
                        </button>
                    ))}
                </div>
            </div>
            <div className="controls">
                <button onClick={clear} className={activeKey === 'Escape' ? 'active' : ''}>Clear</button>
                <button onClick={toggleSign} className={activeKey === '+/-' ? 'active' : ''}>+/-</button>
                <button onClick={calculate} className={activeKey === 'Enter' ? 'active' : ''}>=</button>
            </div>
        </div>
    );
};

export default Calculator;
