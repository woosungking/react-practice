HOOKS


    class component
        - state 사용가능 -> 생성자에서 state 정의
        - setState() 함수를 통해 state 업데이트 가능
        - 라이플 사이클 함수 지원
    
    functional component
        - state 사용불가
        - 라이플 사이클 마다 기능 구현 불가
        - 하지만 간결함

    
    functional component 를 보면 state사용을 못하는데 이걸 사용하게 하려고 나온게 "HOOK"임


    일단 훅 이름에는 use가 들어가야함


HOOK의 종류

    useStateHook

        예시

            function Counter(props){
                var count = 0;

                return(
                    <div>
                        <p>총 {count}번 클릭 했습니다.</p>
                        <button onClick={()=> count++}> 클릭!!! </button>
                    </div>
                ); 
            }

                => 딱 보기만 해도 클릭을 했을때 실시간으로 클릭 횟수가 안보인다는 걸 추측 할 수 있다.
                    => 그러려면 state를 써야겠지..!
            

        사용법

            const [변수명, set함수명] = useState(초기 값)    

                바로 예시 들어감.

                    function Counter(props){
                        const [count, setCount] = useState(0);
                        //변수 각각에 대해 set함수 존재, 여기는 Count밖에 없어서 setCount만 있는거임.

                        return(
                            <div>
                                <p> 총 {count}번 클릭 했습니다.</p>
                                <button onClick ={()=> setCount(count + 1)>
                            </div>
                        );
                    }

            <!-- 클릭 이벤트가 발생했을 때, onClick 핸들러에서 setCount(count + 1)을 호출하여 count 값을 1 증가시킵니다. setCount 함수를 호출하면 React는 상태를 업데이트하고, 컴포넌트를 다시 렌더링합니다. -->
            
    useEffect

        useEffect(이펙트 함수, 의존성 배열);
            -의존성 배열은 이팩트에 의존하고 있는 배열, 배열의 값이 "하나"라도 변경 되었을시 effect 함수가 실행됌
            - side effect를 실행하기 위한 친구

            의존성 배열이 mount, unmount 시에만 실행되도록 하고싶으면
                
                useEffect(이펙트 함수, []) // 빈배열을 쓰면 됌.
        
            의존성 배열을 생략하면 컴포넌트 업데이트 마다 이펙트가 실행 됌.
                
                useEffect(이펙트 함수)
        
             하나의 컴포넌트에 여러개의 useEffectHook 을 사용가능함 (useState, useEffect)

             useEffect(()=>{
                컴포넌트가 마운트 된 후, 의존성 배열에 있는 변수들중 하나라도 변경이 되면 실행된다.
                의존성 배열에 빈 배열을 넣으면 마운트와, 언마운트 시 한번씩 실행이 된다.
                의존성 배열이 생략이 된다면 컴포넌트 업데이트 마다 실행이 된다.

                return ()=>{
                    컴포넌트가 마운트 헤제 되기 전에 실행 된다
                }
             };);

    useMemo

        

