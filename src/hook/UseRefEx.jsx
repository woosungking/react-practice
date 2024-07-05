import React, { useRef, useState } from "react";

const UseRefEx=()=>{
    const [state, setState] = useState(0);
    const ref = useRef(0);
    let Var = 0;

    const increaseState=()=>{
        setState(state+1);
        setState((state)=>{
            return state+1;
        });
    };
    const increaseRef=()=>{
        ref.current = ref.current+2;
    };
    const increaseVar=()=>{
        Var = Var + 2;
    };

    return(
        <div>
            <p>현제 state 값: {state}</p>
            <p>현제 useref값: {ref.current}</p>
            <p>현제 Var값: {Var}</p>
            <button onClick={increaseState}>state + 2</button>
            <button onClick={increaseRef}>ref + 2</button>
            <button onClick={increaseVar}>Var + 2</button>
            <div>
                <p>특성</p>
                "state+2" 버튼을 누르면 랜더링이 일어나면서 값이 2씩 증가함(새로고침)
                "ref + 2" 버튼을 누르면 화면상에 카운트는 올라가지 않지만 내부적으로는 값이 증가하고있음
                이 상태에서 state+2 버튼을 누르면 랜더링이 새롭게 되면서 화면상 변화한 ref값도 나오게 됌. 
            </div>
            <div>
                <p>특성</p>
                "Var+2" 버튼을 아무리 눌러도 화면상에 숫자 변화가 없고, state+2 를 눌러 랜더링을 다시해도 화면에는 0이 표시되는것을 볼 수 있다. <br></br>
                하지만 console.log를 찍어보면 Var의 값은 분명히 올라간다. 여기서 알 수 있는건 컴포넌트가 함수형 컴포넌트 이므로 랜더링이 될때마다 함수가 새롭게 실행이 되면서<br>
                </br> let Var =0 을 실행시키기 때문에 화면에는 0으로 밖에 안보이는것이다. 하지만 ref는 랜더링(함수의 재실행)이 되면서 const ref = useRef(0);를 만나는데도 0으로 초기화가 안된다. 의미를 잘 생각해보자
            </div>
        </div>
    );
};

//state값이 변화가 되면 랜더링이 새로 되는데. 값이 변화해도 랜더링이 필요없는 작업을 수행할때 사용을 한다.

export default UseRefEx;