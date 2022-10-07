import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { useState } from 'react';

const Clock = () =>{
    const [time, timeCounter] = React.useState(new Date());

    setInterval(() => {
        timeCounter(new Date())
    }, 1000);

    return (
        <div className='clock'>
                 {time.toLocaleTimeString()}
            </div>
    );
}
// class Orologio extends React.Component{
//     constructor(start) {
//         this.start = 0;
//     }

//     render(){
//         return (
//             runningTime()
//         );
//     }
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Clock />);