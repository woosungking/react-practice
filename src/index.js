import React from 'react';
import ReactDOM  from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './chapter_03/Library';
// import Clock from './chapter_04/clock'
// import CommentList from './chapter_05/CommentList';
 import NotificationList from './chapter_07/NotificationList';
import Clock from './chapter_04/clock';

import Test from './htmlcsstest/Test';
import UseStateHookEx from './\bhook/UseStateHookEx';
import UseEffectEx from './\bhook/UseEffectEx';
import UseRefEx from './\bhook/UseRefEx';



// ReactDOM.render(
//   <React.StrictMode>
//     <Library/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Library/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// setInterval( 
// ()=>{ReactDOM.render(
//   <React.StrictMode>
//     <Clock/>
//   </React.StrictMode>,
//   document.getElementById('root') ); 
// }, 1000 );

// ReactDOM.render(
//     <React.StrictMode>
//       <CommentList/>
//     </React.StrictMode>,
//     document.getElementById('root')
    
// );

// ReactDOM.render(
//   <React.StrictMode>
//       <App/>
//   </React.StrictMode>,
//   document.getElementById('app')
// );

ReactDOM.render(
  <React.StrictMode>
    <div>
      {/* <Test />
      <Library />
      <Clock />
      <App />
      <NotificationList /> */}
      {/* <UseStateHookEx></UseStateHookEx> */}
      {/* <UseEffectEx></UseEffectEx> */}
      <UseRefEx></UseRefEx>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
