import styled from "styled-components";
import { useState } from "react";

const CalculatorWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid black;
  width: 500px;
  height: 650px;
  align-items: center;
  margin-top: 50px;
`;
const Box = styled.input`
  display: flex;
  justify-content: center;
  width: 400px;
  height: 100px;
  border: 1px solid black;
  margin: 0px 50px 50px 50px;
  font-size: 30px;
  text-align: end;
`;

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 100px);
  width: 400px;
  height: 400px;
  border-top: 1px solid gray;
  border-left: 1px solid gray;
`;

const Button = styled.button`
  font-size: 20px;
  text-align: center;
  background-color: white;
  border-top: none;
  border-left: none;
  border-right: 1px solid gray;
  border-bottom: 1px solid gray;
  &:hover {
    background-color: #f6d8ce;
  }
`;

let input = "";

function Calculator() {
  const [result, setResult] = useState("");

  const num = (e) => {
    input += e.target.value;
    setResult(result + e.target.value);
  };

  const onClickOperators = (e) => {
    input += e.target.value;
    setResult("");
  };

  const onClickResult = () => {
    let number = "";
    let numbers = [];
    let operator = "";

    for (let i = 0; i < input.length; i++) {
      if (isNaN(input[i])) {
        numbers.push(number);
        number = "";
        operator = input[i];
      } else {
        number = number + input[i];
      }
    }
    numbers.push(number);
    number = "";

    let opResult;
    if (operator === "/") {
      opResult = Number(numbers.shift()) / Number(numbers.shift());
    } else if (operator === "x") {
      opResult = Number(numbers.shift()) * Number(numbers.shift());
    } else if (operator === "-") {
      opResult = Number(numbers.shift()) - Number(numbers.shift());
    } else if (operator === "+") {
      opResult = Number(numbers.shift()) + Number(numbers.shift());
    }

    numbers.push(opResult);

    input = opResult;

    setResult(Number(numbers[0]));
  };

  const onReset = () => {
    input = "";
    setResult("");
  };

  return (
    <div>
      <CalculatorWrapper>
        <Box value={result}></Box>
        <ButtonWrapper>
          <Button value={7} onClick={num}>
            7
          </Button>
          <Button value={8} onClick={num}>
            8
          </Button>
          <Button value={9} onClick={num}>
            9
          </Button>
          <Button value={"/"} onClick={onClickOperators}>
            /
          </Button>
          <Button value={4} onClick={num}>
            4
          </Button>
          <Button value={5} onClick={num}>
            5
          </Button>
          <Button value={6} onClick={num}>
            6
          </Button>
          <Button value={"x"} onClick={onClickOperators}>
            x
          </Button>
          <Button value={1} onClick={num}>
            1
          </Button>
          <Button value={2} onClick={num}>
            2
          </Button>
          <Button value={3} onClick={num}>
            3
          </Button>
          <Button value={"-"} onClick={onClickOperators}>
            -
          </Button>
          <Button value={"@"} onClick={onReset}>
            @
          </Button>
          <Button value={0} onClick={num}>
            0
          </Button>
          <Button value={"+"} onClick={onClickOperators}>
            +
          </Button>
          <Button value={"="} onClick={onClickResult}>
            =
          </Button>
        </ButtonWrapper>
      </CalculatorWrapper>
    </div>
  );
}
export default Calculator;
