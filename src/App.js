import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const operations = ["+", "-", "*", "/"];

  const [firstnumber, setFirstnumber] = useState("");
  const [secondnumber, setSecondnumber] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState(0);

  useEffect(() => {
    console.log(firstnumber)
  },[])

  const currentValue = (val) => {
    if (operation == "") {
      setFirstnumber(firstnumber + val);
    } else {
      setSecondnumber(secondnumber + val);
    }
  };

  const clickOperation = (val) => {
    setOperation(val);
  };

  const performOperation = () => {
    switch (operation) {
      case "+":
        console.log(firstnumber, secondnumber);
        setResult(Number(firstnumber) + Number(secondnumber));
        break;

      case "-":
        console.log(firstnumber, secondnumber);
        setResult(Number(firstnumber) - Number(secondnumber));
        break;

      case "*":
        console.log(firstnumber, secondnumber);
        setResult(Number(firstnumber) * Number(secondnumber));
        break;

      case "/":
        console.log(firstnumber, secondnumber);
        setResult(Number(firstnumber) / Number(secondnumber));
        break;
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <div>{firstnumber} {operation} {secondnumber}</div>
          <div>{result}</div>
        </div>
        <div className="button">
          <div className="leftside">
            <div id="seeresult" onClick={performOperation}>
              See result
            </div>
            <div className="numbers">
              {numbers.map((val, key) => {
                return (
                  <div
                    id="individualid"
                    onClick={() => {
                      currentValue(val);
                    }}
                  >
                    {val}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="rightside">
            {operations.map((val, key) => {
              return (
                <div
                  id="operation"
                  onClick={() => {
                    clickOperation(val);
                  }}
                >
                  {val}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
