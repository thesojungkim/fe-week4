# 멋쟁이 사자처럼 10기 FE 4주차 과제 설계 방식과 코드 설명 🦁

### 실습 1

```
import React, { useState } from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 500px;
  height: 50px;
`;

const ViewWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  width: 500px;
  height: 50px;
`;

function InputSample() {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  const onChangename = (e) => {
    setName(e.target.value);
  };

  const onChangenickname = (e) => {
    setNickname(e.target.value);
  };

  const onReset = () => {
    setName("");
    setNickname("");
  };
  //이름과 닉네임 초기화//
  return (
    <div>
      <InputWrapper>
        <input
          name="name"
          placeholder="이름"
          value={name}
          onChange={onChangename}
        />
        <input
          name="nickname"
          placeholder="닉네임"
          onChange={onChangenickname}
          value={nickname}
        />
        <button onClick={onReset}>초기화</button>
        //초기화 버튼//
      </InputWrapper>

      <ViewWrapper>
        값 : {name !== "" ? name : "이름이 없습니다."}(
        {nickname !== "" ? nickname : "닉네임이 없습니다."})
      </ViewWrapper>
      //아무것도 입력되지 않았을 때 나타나는 문구//
    </div>
  );
}
export default InputSample;

```

### 실습 2 (오류)

```
const Problem = () => {
  const [count, setCount] = useState(0);
  const [isClick, setIsClick] = useState(false);

  useEffect(() => {
    setCount((state) => state + 1);
    //(state) => state + 1와 같이 useState함수의 형태로 넣어줘야한다.//
  }, [isClick]);
```

### 실습 3 (계산기)

```
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
//계산기를 감싸주는 박스//

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
//결과값을 보여주는 박스//

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 100px);
  width: 400px;
  height: 400px;
  border-top: 1px solid gray;
  border-left: 1px solid gray;
`;
//버튼을 감싸는 박스들을 한번에 감싸는 박스//

const Button = styled.button`//숫자들을 감싸는 버튼//
  font-size: 20px;
  text-align: center;
  background-color: white;
  border-top: none;
  border-left: none;
  border-right: 1px solid gray;
  border-bottom: 1px solid gray;
  &:hover {
    background-color: #f6d8ce;
  } //마우스를 올리면 배경색을 변경시켜준다//
`;
```

```
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
          // @ 를 클릭하면 결과값리셋//
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

```

# 실습 제출

https://user-images.githubusercontent.com/103019590/169685916-7058a60b-58e6-4c5e-a2da-dff50628114d.mov
