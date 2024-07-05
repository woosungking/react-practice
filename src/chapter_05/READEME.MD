component와 Props 정리

    리엑트에서 모든 페이지가 컴포넌트로 구성되어 있고 이런 여러가지 컴포넌트가 다시 모여서 다른 컴포넌트가 된다 -> 모듈화!!
    또 이런 컴포넌트가 모이면서 하나의 페이지가 나옴!
        -> 쉽게 컴포넌트를 함수라고 생성하면 됌.





React-Component

    "Props(속성)" ------ input -----> "react-component" --- return ---> react Element

    반죽 -> 붕어빵 틀 -> 붕어빵
    




Props

    컴포넌트에 전달 할 정보들을 담고있는 객체이다.

    예시를 들어보자면...

        에어비엔비 홈페이지에 가면 "틀 즉 배치는 똑같은데 안에 사진이랑 문구 색상이 다른 화면들이" 많이 배치가 되어있다.
        이것들을 전부 새로 만들지는 않았을거고 같은 컴포넌트를 사용했지만 입력값을 다르게 주어서 페이지 마다 특성을 살렸을 것이다.

        입력값이라고 하면 페이지의 색, 이미지, 문구 이다.

        즉 이런 입력값들을 props라고 한다 !

        붕어빵 반죽(props)을 파란색, 노란색, 주황색  OR 혹은 팥, 슈크림, 피자 를 넣어서 같은 틀(컴포넌트)에 구우면 비슷하지만? 다른 붕어빵(element)가 나온다
    

    Props를 지정해보자.(예시)

        function App(props){
            return(
                <profile

                name="기무성"
                age={26}

                />
            );
        }

            => 이랗게 히면 "profile"이라는 "컴포넌트"의 "Props"로 지정이 됌.
                -> 제이슨과 유사한 느낌의 데이터 셋이 됌.




Component


    설명을 위한 예시.1

        function Welcome(props){
            return( <h1>안녕 &{name} <h1/>);
        }

            -> 위와같은 함수 컴포넌트는 Props로 name만 받고 있음.
        


    설명을 위한 예시.2 -> 클레스 컴포넌트

        class Welcome extends React.Component{
            render(){
                return( <h1>안녕 &{name} <h1/>);
            }
        }
    
        -> 위와같은 클레스 컴포넌트들은 "React.Component"를 상속을 받아야함.


    컴포넌트 이름 지어주는 법

        무조건 대문자로 시작,
            -> react가 소문자로 시작하면 DOM 태그로 인식함.
                -> 소문자로 시작하는 span, div, h1, p 등등
        

            왜 대문자로 해야하는지 예시를 들어보겠3

                CASE.1 => const element = <h1> case1 <h1/>;

                CASE.2 => const element = <Profile name="기무성" />;

                    => 전자는 DOM 태그로 인식
                        후자는 "Profile" 이라는 "리엑트 컴포넌트로 인식"
            

컴포넌트를 추출해보자.

    function Comment(Props){
        return (

            <div className="comment">
                <div className="user-info"> 
                    <img class="avatar" 

                        src={props.avatarURL}
                        alt={props.name}

                    />
<!-- //먼저 추출 할 부분 -->
                    <div className="user-info-name">
                        {props.author.name}
                    <div/>
                <div/>

                <div class="comment-text">
                    {props.text}
                <div/>


                <div class="comment-date">
                    {formatDate(props.date)}
                <div/>
            <div/>

        );
    }

    먼저 className=avatar 를 추출해보자.

    function Avatar(props){
        return(
            <img class="avatar" 
                src={props.avatarURL}
                alt={props.name}
                    />
        );
    }
        --> <Avatar user={props.authoe}> 로 대채 가능
